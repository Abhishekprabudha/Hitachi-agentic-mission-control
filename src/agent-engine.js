export class AgentEngine {
  constructor(store){ this.store = store; }
  randomSeedEvent(){
    const seeds = this.store.data.events_seed;
    const seed = seeds[Math.floor(Math.random()*seeds.length)];
    const severityBoost = Math.random()>.72 ? 'High' : seed.severity;
    return { ...seed, severity: severityBoost };
  }
  liveTick(){
    const evt = this.randomSeedEvent();
    const confidence = 72 + Math.floor(Math.random()*22);
    this.store.pushEvent({ ...evt, confidence, event: `${evt.event} · live sample ${new Date().toLocaleTimeString()}` });
    this.store.updateAgent(evt.agent, { status: confidence > 86 ? 'Investigating' : 'Monitoring', confidence });
    if(evt.severity === 'High' && Math.random() > .55){
      this.store.pushAudit({ actor: this.agentName(evt.agent), action: 'Auto-triaged live signal', detail: evt.event, outcome: 'Recommendation pending', type:'Signal' });
    }
    this.store.addTrendPoint();
  }
  runScenario(id){
    const sc = this.store.data.scenarios.find(s=>s.id===id) || this.store.data.scenarios[Math.floor(Math.random()*this.store.data.scenarios.length)];
    const agent = this.agentName(sc.agent);
    const event = { source:'Scenario Simulator', severity:sc.severity, event:sc.headline, agent:sc.agent, confidence:88+Math.floor(Math.random()*8) };
    this.store.pushEvent(event);
    this.store.pushIncident({ severity:sc.severity, title:sc.title, agent:sc.agent, summary:sc.description, business_impact:sc.impact, status:'Open' });
    this.store.updateAgent(sc.agent, { status:'Recommending', confidence: event.confidence, risk:sc.severity });
    const action = this.store.pushAction({ scenario_id: sc.id, agent: sc.agent, agent_name: agent, title: sc.action, rationale: sc.description, expected_impact: sc.impact, kpi_delta: sc.kpi, risk: sc.severity, approver:'India GCC + Japan/APAC governance', evidence:[`Scenario ${sc.id}`, 'Synthetic telemetry', 'Policy guardrail check'] });
    this.store.pushAudit({ actor:agent, action:'Generated recommendation', detail:sc.action, outcome:'Awaiting human approval', type:'Recommendation' });
    return { scenario: sc, action };
  }
  approveAction(actionId){
    const action = this.store.state.actions.find(a=>a.id===actionId); if(!action) return null;
    action.status = 'Approved + Executed'; action.approved_at = new Date().toISOString(); action.approved_by = 'Demo Executive Approver';
    this.store.applyKpi(action.kpi_delta);
    this.store.updateAgent(action.agent, { status:'Executed', confidence: Math.min(98, (this.store.state.agents.find(a=>a.id===action.agent)?.confidence || 88)+2), risk:'Controlled' });
    this.store.pushAudit({ actor:'Demo Executive Approver', action:'Approved agent action', detail:action.title, outcome:action.expected_impact, type:'Approval' });
    this.store.addTrendPoint(); this.store.persist(); return action;
  }
  rejectAction(actionId){
    const action = this.store.state.actions.find(a=>a.id===actionId); if(!action) return null;
    action.status = 'Rejected / Parked'; action.rejected_at = new Date().toISOString();
    this.store.pushAudit({ actor:'Demo Executive Approver', action:'Rejected agent action', detail:action.title, outcome:'Retained in audit trail for review', type:'Rejection' });
    this.store.updateAgent(action.agent, { status:'Monitoring' });
    this.store.persist(); return action;
  }
  agentName(id){ return this.store.state.agents.find(a=>a.id===id)?.name || id; }
}