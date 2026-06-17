import { Store } from './data-store.js';
import { AgentEngine } from './agent-engine.js';
import { buildHtmlReport, downloadBlob, escapeHtml } from './report-export.js';

const store = new Store();
await store.load();
const engine = new AgentEngine(store);
const root = document.querySelector('#view-root');
const nav = [...document.querySelectorAll('.nav')];
let currentView = 'command';

const fmt = n => Number(n).toLocaleString('en-IN');
const sev = s => (s||'').toLowerCase();
function toast(title, msg){
  const el = document.createElement('div'); el.className='toast'; el.innerHTML=`<b>${escapeHtml(title)}</b><span>${escapeHtml(msg)}</span>`; document.body.appendChild(el); setTimeout(()=>el.remove(), 3600);
}
function setView(v){ currentView=v; nav.forEach(b=>b.classList.toggle('active', b.dataset.view===v)); render(); }
nav.forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
document.querySelector('#run-random').addEventListener('click',()=>{ const sc=store.data.scenarios[Math.floor(Math.random()*store.data.scenarios.length)]; const r=engine.runScenario(sc.id); toast('Incident simulation started', r.scenario.headline); render(); });
document.querySelector('#export-json').addEventListener('click',()=>downloadBlob('aionos-hitachi-mission-control-store.json', store.exportState()));
document.querySelector('#export-html').addEventListener('click',()=>downloadBlob('hitachi-gcc-evidence-report.html', buildHtmlReport(store.state), 'text/html'));

setInterval(()=>{ document.querySelector('#live-clock').textContent = new Date().toLocaleString(); }, 1000);
setInterval(()=>{ engine.liveTick(); if(currentView==='command'||currentView==='agents'||currentView==='governance') render(); }, 4500);

function render(){
  const views = { command: renderCommand, agents: renderAgents, scenarios: renderScenarios, governance: renderGovernance, data: renderDataRoom };
  root.innerHTML = views[currentView]();
  bindActions();
}
function bindActions(){
  root.querySelectorAll('[data-scenario]').forEach(b=>b.addEventListener('click',()=>{ const r=engine.runScenario(b.dataset.scenario); toast('Agent recommendation generated', r.scenario.impact); render(); }));
  root.querySelectorAll('[data-approve]').forEach(b=>b.addEventListener('click',()=>{ const a=engine.approveAction(b.dataset.approve); toast('Action approved + executed', a.title); render(); }));
  root.querySelectorAll('[data-reject]').forEach(b=>b.addEventListener('click',()=>{ const a=engine.rejectAction(b.dataset.reject); toast('Action rejected / parked', a.title); render(); }));
  root.querySelectorAll('[data-download]').forEach(b=>b.addEventListener('click',()=>{ const payload = store.data[b.dataset.download] || store.state[b.dataset.download] || {}; downloadBlob(`${b.dataset.download}.json`, JSON.stringify(payload,null,2)); }));
  const reset = root.querySelector('#reset-store'); if(reset) reset.addEventListener('click',()=>{ store.reset(); toast('Demo reset', 'Synthetic JSON store restored to baseline.'); render(); });
  const report = root.querySelector('#inline-report'); if(report) report.addEventListener('click',()=>downloadBlob('hitachi-gcc-evidence-report.html', buildHtmlReport(store.state), 'text/html'));
}
function kpiCards(){ const k=store.state.kpis; return `<div class="grid kpi">
 ${kpi('GCC health', k.gccHealth, 'Composite agentic control score')}${kpi('Cloud waste', k.cloudWaste+'%', 'Avoidable spend hypothesis')}${kpi('Savings found', '₹'+fmt(k.savings)+'M', 'Approved + pending actions')}${kpi('K8s health', k.k8sHealth, 'Industrial AI reliability')}${kpi('DR score', k.drScore, 'RPO/RTO readiness')}${kpi('Governance', k.governance, 'Audit + approval posture')}
 </div>`; }
function kpi(label,value,sub){ return `<div class="card kpi-card"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong><span>${escapeHtml(sub)}</span></div>`; }
function renderCommand(){
  const trend = store.state.trend;
  return `${kpiCards()}<div class="grid two-col"><div class="card"><div class="section-title"><div><h2>Live enterprise signal stream</h2><p>Events are generated in real time and persisted to the browser JSON store.</p></div><span class="badge high">LIVE</span></div><div class="event-list">${store.state.events.slice(0,14).map(eventRow).join('')}</div></div><div class="card"><div class="section-title"><div><h2>Awaiting approval</h2><p>Japan-grade human-in-loop control for every action.</p></div></div><div class="action-list">${store.state.actions.slice(0,8).map(actionRow).join('') || '<p class="footer-note">Run a scenario to create approval-ready actions.</p>'}</div></div></div><div class="section-title"><div><h2>Control plane health</h2><p>24-week telemetry curves use smoothing, rolling averages and next-period projections so the health story reads continuously instead of point-to-point.</p></div><span class="badge low">AI trend model</span></div><div class="grid three-col"><div class="card"><h3>Cost index</h3>${lineChart(trend.map(x=>x.cost_index), { invert:true, label:'lower is better' })}</div><div class="card"><h3>K8s health</h3>${lineChart(trend.map(x=>x.k8s_health), { label:'resilience score' })}</div><div class="card"><h3>Governance score</h3>${lineChart(trend.map(x=>x.governance), { label:'control maturity' })}</div></div>`;
}
function renderAgents(){ return `<div class="section-title"><div><h2>Six lighthouse agents</h2><p>Each agent produces auditable business actions — not just answers.</p></div></div><div class="grid agent-grid">${store.state.agents.map(agentCard).join('')}</div><div class="section-title"><div><h2>Specialized telemetry views</h2><p>Realistic synthetic data for cloud, Kubernetes, IoT, modernization, DR and vendor governance.</p></div></div><div class="grid two-col"><div class="card"><h3>Kubernetes SRE clusters</h3><div class="node-map">${store.data.kubernetes_telemetry.map(n=>nodeCard(n.cluster,n.region,n.health,n.risk)).join('')}</div></div><div class="card"><h3>Industrial AI / IoT pipelines</h3>${table(store.data.iot_pipelines,['pipeline','freshness','quality','latency','drift','status'])}</div></div>`; }
function renderScenarios(){ return `<div class="section-title"><div><h2>Boardroom-ready scenario simulator</h2><p>Trigger one incident, let the agent reason, generate an action, then approve and prove KPI impact.</p></div></div><div class="grid scenario-grid">${store.data.scenarios.map(sc=>`<div class="card scenario"><span class="badge ${sev(sc.severity)}">${sc.severity}</span><h3>${escapeHtml(sc.title)}</h3><p>${escapeHtml(sc.headline)}</p><p class="footer-note">${escapeHtml(sc.description)}</p><strong>${escapeHtml(sc.impact)}</strong><button class="primary" data-scenario="${sc.id}">Run simulation</button></div>`).join('')}</div><div class="section-title"><div><h2>Modernization backlog</h2><p>CFO-friendly ranking linked to effort, risk, cost and business impact.</p></div></div><div class="card">${table(store.data.apps_modernization,['app_id','name','criticality','cloud_readiness','dependency_risk','path','wave','estimated_savings'])}</div>`; }
function renderGovernance(){ return `<div class="grid two-col"><div class="card"><div class="section-title"><div><h2>Governance controls</h2><p>Designed for approval hierarchy, auditability and technical due diligence.</p></div></div>${store.data.governance_policies.map(p=>`<div class="metric-row"><div><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.control)}</small></div><span class="badge">${escapeHtml(p.id)}</span></div>`).join('')}</div><div class="card"><div class="section-title"><div><h2>Audit trail</h2><p>Every recommendation, approval and rejection is recorded.</p></div></div><div class="audit-list">${store.state.audit.slice(0,16).map(auditRow).join('') || '<p class="footer-note">Audit events will appear after scenarios or live investigations.</p>'}</div></div></div><div class="section-title"><div><h2>DR + vendor evidence</h2><p>Operational resilience and managed-services governance dashboards.</p></div></div><div class="grid two-col"><div class="card"><h3>DR readiness</h3>${table(store.data.dr_readiness,['system','rpo_target_min','rpo_actual_min','rto_target_min','rto_actual_min','backup_freshness','score'])}</div><div class="card"><h3>Vendor governance</h3>${table(store.data.vendors,['vendor','category','annual_spend_cr','sla','actual','incidents','overlap','risk'])}</div></div>`; }
function renderDataRoom(){ return `<div class="section-title"><div><h2>JSON Data Room</h2><p>Use these files as the synthetic “live” data, past sheets, and client-demo evidence store.</p></div><button id="reset-store" class="danger">Reset demo</button></div><div class="tabs">${['agents','cloud_spend','kubernetes_telemetry','apps_modernization','iot_pipelines','dr_readiness','vendors','historic_kpis','events','actions','audit'].map(x=>`<button class="chip" data-download="${x}">Download ${x}.json</button>`).join('')}<button id="inline-report" class="chip">Download HTML evidence report</button></div><div class="grid two-col"><div class="card"><h3>Current browser JSON store</h3><pre class="codebox">${escapeHtml(JSON.stringify(store.state,null,2))}</pre></div><div class="card"><h3>GitHub Pages deployment</h3><p>This app is static. Push the folder to GitHub and enable Pages from the root branch. No server, database, API key or build step required.</p><div class="codebox">git init
git add .
git commit -m "AIonOS Mission Control for Hitachi GCC"
git branch -M main
git remote add origin https://github.com/&lt;user&gt;/hitachi-gcc-mission-control.git
git push -u origin main</div><p class="footer-note">Past data sheets are available in /sheets as CSV files. Seed JSON lives in /data.</p></div></div>`; }
function agentCard(a){ return `<div class="card agent-card ${a.color==='black'?'black':''}"><div class="agent-top"><h3>${escapeHtml(a.name)}</h3><span class="badge ${sev(a.risk)}">${escapeHtml(a.status)}</span></div><p>${escapeHtml(a.mission)}</p><div class="progress"><i style="width:${a.confidence}%"></i></div><div class="metric-row"><span>Confidence</span><strong>${a.confidence}%</strong></div><div class="metric-row"><span>Business impact</span><strong>${escapeHtml(a.impact)}</strong></div><div class="tabs">${a.verbs.map(v=>`<span class="chip">${escapeHtml(v)}</span>`).join('')}</div></div>`; }
function eventRow(e){ return `<div class="event"><span class="event-dot ${escapeHtml(e.severity)}"></span><div><strong>${escapeHtml(e.event)}</strong><small>${escapeHtml(e.source)} · ${escapeHtml(e.agent)}</small></div><time><span class="badge ${sev(e.severity)}">${escapeHtml(e.severity)}</span></time></div>`; }
function actionRow(a){ const buttons = a.status==='Awaiting approval' ? `<div class="approval-buttons"><button class="approve" data-approve="${a.id}">Approve</button><button class="reject" data-reject="${a.id}">Reject</button></div>` : `<span class="badge">${escapeHtml(a.status)}</span>`; return `<div class="action"><span class="event-dot ${escapeHtml(a.risk)}"></span><div><strong>${escapeHtml(a.title)}</strong><small>${escapeHtml(a.agent_name)} · ${escapeHtml(a.expected_impact)}</small></div>${buttons}</div>`; }
function auditRow(a){ return `<div class="audit"><span class="event-dot Medium"></span><div><strong>${escapeHtml(a.action)}</strong><small>${escapeHtml(a.actor)} · ${escapeHtml(a.detail)} · Outcome: ${escapeHtml(a.outcome)}</small></div><time>${new Date(a.time).toLocaleTimeString()}</time></div>`; }
function table(rows, cols){ return `<table class="table"><thead><tr>${cols.map(c=>`<th>${escapeHtml(c.replaceAll('_',' '))}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${cols.map(c=>`<td>${escapeHtml(r[c])}</td>`).join('')}</tr>`).join('')}</tbody></table>`; }
function nodeCard(title, sub, value, risk){ return `<div class="node ${risk==='High'?'risk':''}"><b>${escapeHtml(title)}</b><small>${escapeHtml(sub)}</small><div class="bar"><i style="width:${value}%"></i></div><span class="badge ${sev(risk)}">${value}% · ${escapeHtml(risk)}</span></div>`; }
function lineChart(values, opts={}){
  const options = typeof opts === 'boolean' ? { invert: opts } : opts;
  const windowed = values.map((_,i)=>{
    const start = Math.max(0, i-2);
    const sample = values.slice(start, i+1);
    return sample.reduce((a,b)=>a+b,0)/sample.length;
  });
  const latest = values[values.length-1];
  const slope = values.length > 3 ? (latest - values[values.length-4]) / 3 : 0;
  const forecast = Math.max(0, Math.round((latest + slope) * 10) / 10);
  const plotted = [...windowed, forecast];
  const min=Math.min(...plotted), max=Math.max(...plotted), w=420,h=150,p=16; const span=max-min||1;
  const point = (v,i,arr=plotted)=>{ const x=p+i*((w-p*2)/(arr.length-1)); const y=options.invert ? p+(v-min)/span*(h-p*2) : h-p-(v-min)/span*(h-p*2); return { x, y }; };
  const coords = plotted.map(point);
  const path = smoothPath(coords);
  const area = `${path} L ${coords.at(-1).x},${h-p} L ${coords[0].x},${h-p} Z`;
  const avg = Math.round((values.slice(-6).reduce((a,b)=>a+b,0)/Math.min(6, values.length))*10)/10;
  const delta = Math.round((latest - values[Math.max(0, values.length-7)])*10)/10;
  const sentiment = options.invert ? -delta : delta;
  const badge = sentiment >= 0 ? 'Improving' : 'Watch';
  const id = `g${values.reduce((acc, v, i)=>acc + Math.round(v * 10) * (i + 1), 0)}`;
  return `<div class="chart smart-chart"><div class="chart-meta"><span>${escapeHtml(options.label || 'rolling signal')}</span><b>${latest}</b></div><svg class="svg-chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><defs><linearGradient id="${id}" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#ed001b" stop-opacity=".24"/><stop offset="100%" stop-color="#ed001b" stop-opacity="0"/></linearGradient></defs><path d="${area}" fill="url(#${id})"/><path d="${path}" fill="none" stroke="#ed001b" stroke-width="4" stroke-linecap="round"/><path d="M ${coords.at(-2).x},${coords.at(-2).y} L ${coords.at(-1).x},${coords.at(-1).y}" fill="none" stroke="#08090b" stroke-width="3" stroke-dasharray="7 7" stroke-linecap="round"/><line x1="${p}" y1="${h-p}" x2="${w-p}" y2="${h-p}" stroke="#dfe3ea"/><circle cx="${coords.at(-2).x}" cy="${coords.at(-2).y}" r="5" fill="#ed001b"/></svg><div class="chart-insights"><span>${badge} · ${delta >= 0 ? '+' : ''}${delta} vs 6 periods</span><span>6-point avg ${avg}</span><span>Next ${forecast}</span></div></div>`;
}
function smoothPath(points){
  if(points.length < 2) return '';
  return points.reduce((path, point, i, arr)=>{
    if(i === 0) return `M ${point.x},${point.y}`;
    const prev = arr[i-1];
    const midX = (prev.x + point.x) / 2;
    return `${path} C ${midX},${prev.y} ${midX},${point.y} ${point.x},${point.y}`;
  }, '');
}
render();