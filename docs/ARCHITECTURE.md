# Architecture

```text
Static HTML / CSS / JavaScript
        ↓
Browser-side Agent Engine
        ↓
Synthetic Real-time Event Simulator
        ↓
JSON Seed Data + localStorage JSON Store
        ↓
Exportable HTML Evidence Report + JSON Evidence Store
```

## Modules

- `src/app.js`: renders the mission control UI, tabs and dashboards.
- `src/agent-engine.js`: scenario execution, approval/rejection logic and live signal generation.
- `src/data-store.js`: JSON loading, localStorage persistence and KPI mutation.
- `src/report-export.js`: standalone HTML report and JSON downloads.
- `data/*.json`: synthetic seed data.
- `sheets/*.csv`: past data sheets for client credibility.

## Production extension path

Replace synthetic seed files with telemetry adapters:

- Cloud cost: AWS Cost Explorer, Azure Cost Management, GCP Billing export.
- K8s: Prometheus, Grafana, OpenTelemetry, Kubernetes Events API.
- Modernization: CMDB, Git repos, app inventory, SonarQube, IaC scanners.
- IoT: Kafka, MQTT, edge gateways, data quality services.
- DR: backup tools, runbook systems, RPO/RTO evidence.
- Vendor: contract repository, SLA dashboards, ITSM.