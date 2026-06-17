# AIonOS Mission Control for Hitachi GCC Bengaluru

A static, backend-free, GitHub Pages-ready demo system that simulates an AI-native infrastructure control plane for Hitachi GCC Bengaluru.

## What it demonstrates

- Real-time synthetic events and incidents across cloud, Kubernetes, industrial IoT, DR, modernization and vendor governance.
- Six governed AI agents: FinOps, K8s SRE, Modernization, Industrial AI Platform, DR Readiness and Vendor Governance.
- Human-in-the-loop approval workflow.
- Browser-side JSON persistence using `localStorage`.
- Exportable JSON evidence store and standalone HTML evidence report.
- Synthetic seed datasets and past data sheets in `/data` and `/sheets`.

## Why it is backend-free

The app is pure HTML, CSS and JavaScript. It reads seed JSON files where allowed, falls back to embedded default data when opened locally, and stores live demo state in the browser.

## Run locally

Option 1: open `index.html` directly.

Option 2: serve as a static site:

```bash
python -m http.server 8080
# open http://localhost:8080
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "AIonOS Mission Control for Hitachi GCC"
git branch -M main
git remote add origin https://github.com/<your-user>/hitachi-gcc-mission-control.git
git push -u origin main
```

Then go to GitHub → Settings → Pages → Deploy from branch → `main` → `/root`.

## Replace synthetic data with real data later

Keep the same JSON schemas in `/data` and replace the values with exports from cloud cost systems, Prometheus, Kubernetes events, CMDB/app inventory, IoT data quality systems, DR test records and vendor SLA logs.

## Demo script

See `docs/DEMO_SCRIPT.md`.