import { DEFAULT_DATA } from './default-data.js';

const STORE_KEY = 'aionos-hitachi-mission-control-state-v1';
const DATA_FILES = {
  agents: 'data/agents.json', cloud_spend: 'data/cloud_spend.json', kubernetes_telemetry: 'data/kubernetes_telemetry.json',
  apps_modernization: 'data/apps_modernization.json', iot_pipelines: 'data/iot_pipelines.json', dr_readiness: 'data/dr_readiness.json',
  vendors: 'data/vendors.json', historic_kpis: 'data/historic_kpis.json', scenarios: 'data/scenarios.json', events_seed: 'data/events_seed.json',
  governance_policies: 'data/governance_policies.json'
};

export class Store {
  constructor(){ this.data = structuredClone(DEFAULT_DATA); this.state = null; }
  async load(){
    const loaded = {};
    await Promise.all(Object.entries(DATA_FILES).map(async ([key,path])=>{
      try { const res = await fetch(path); if(res.ok) loaded[key] = await res.json(); } catch(e) { /* file:// fallback */ }
    }));
    this.data = { ...structuredClone(DEFAULT_DATA), ...loaded, config: DEFAULT_DATA.config };
    const existing = localStorage.getItem(STORE_KEY);
    if(existing){
      try { this.state = JSON.parse(existing); return this.state; } catch(e) { localStorage.removeItem(STORE_KEY); }
    }
    this.state = this.createInitialState();
    this.persist();
    return this.state;
  }
  createInitialState(){
    const now = new Date().toISOString();
    return {
      meta: { ...this.data.config, created_at: now, last_saved_at: now },
      kpis: { gccHealth: 82, cloudWaste: 13.7, savings: 0, k8sHealth: 85, mttr: 37, migrationVelocity: 8, iotQuality: 85, drScore: 82, vendorRisk: 42, governance: 82 },
      agents: structuredClone(this.data.agents),
      events: this.seedEvents(), incidents: [], actions: [], audit: [], trend: structuredClone(this.data.historic_kpis), sequence: 1000
    };
  }
  seedEvents(){
    return this.data.events_seed.slice(0,5).map((e,i)=>({ id:`EVT-00${i+1}`, time:new Date(Date.now()-(5-i)*60000).toISOString(), ...e, status:'Observed' })).reverse();
  }
  persist(){ this.state.meta.last_saved_at = new Date().toISOString(); localStorage.setItem(STORE_KEY, JSON.stringify(this.state)); }
  reset(){ localStorage.removeItem(STORE_KEY); this.state = this.createInitialState(); this.persist(); }
  nextId(prefix){ this.state.sequence += 1; return `${prefix}-${this.state.sequence}`; }
  pushEvent(evt){ this.state.events.unshift({ id:this.nextId('EVT'), time:new Date().toISOString(), status:'Observed', ...evt }); this.state.events = this.state.events.slice(0,80); this.persist(); }
  pushIncident(incident){ this.state.incidents.unshift({ id:this.nextId('INC'), time:new Date().toISOString(), ...incident }); this.state.incidents = this.state.incidents.slice(0,40); this.persist(); }
  pushAction(action){ this.state.actions.unshift({ id:this.nextId('ACT'), created_at:new Date().toISOString(), status:'Awaiting approval', ...action }); this.persist(); return this.state.actions[0]; }
  pushAudit(entry){ this.state.audit.unshift({ id:this.nextId('AUD'), time:new Date().toISOString(), ...entry }); this.state.audit = this.state.audit.slice(0,80); this.persist(); }
  updateAgent(agentId, patch){ const a=this.state.agents.find(x=>x.id===agentId); if(a) Object.assign(a, patch); this.persist(); }
  applyKpi(delta={}){ Object.entries(delta).forEach(([k,v])=>{ if(this.state.kpis[k] !== undefined){ this.state.kpis[k] = Math.max(0, Math.round((this.state.kpis[k] + v)*10)/10); }}); this.persist(); }
  addTrendPoint(){
    const k=this.state.kpis; const n=this.state.trend.length+1;
    this.state.trend.push({ week:`Live-${n}`, cost_index:Math.max(70, Math.round(126 - k.savings*1.8 + k.cloudWaste*.6)), k8s_health:k.k8sHealth, mttr:k.mttr, iot_quality:k.iotQuality, dr_score:k.drScore, governance:k.governance });
    this.state.trend = this.state.trend.slice(-24); this.persist();
  }
  exportState(){ return JSON.stringify({ exported_at:new Date().toISOString(), data:this.data, state:this.state }, null, 2); }
}