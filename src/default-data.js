export const DEFAULT_DATA = {
  "agents": [
    {
      "id": "finops",
      "name": "FinOps Agent",
      "mission": "Stop cloud cost leakage before invoice",
      "status": "Monitoring",
      "confidence": 91,
      "risk": "Medium",
      "impact": "\u20b918.7M potential annualized savings",
      "color": "red",
      "verbs": [
        "detect",
        "explain",
        "optimize",
        "audit"
      ]
    },
    {
      "id": "k8s",
      "name": "K8s SRE Agent",
      "mission": "Keep industrial AI workloads alive",
      "status": "Monitoring",
      "confidence": 88,
      "risk": "High",
      "impact": "MTTR reduction and safer releases",
      "color": "black",
      "verbs": [
        "predict",
        "heal",
        "scale",
        "learn"
      ]
    },
    {
      "id": "modernization",
      "name": "Modernization Agent",
      "mission": "Convert legacy due diligence into migration waves",
      "status": "Ready",
      "confidence": 86,
      "risk": "Medium",
      "impact": "Ranked backlog for Japan/APAC approvals",
      "color": "red",
      "verbs": [
        "discover",
        "assess",
        "prioritize",
        "generate"
      ]
    },
    {
      "id": "iot",
      "name": "Industrial AI Platform Agent",
      "mission": "Scale IoT data into reliable AI decisions",
      "status": "Monitoring",
      "confidence": 84,
      "risk": "Medium",
      "impact": "Data quality, latency and model readiness",
      "color": "red",
      "verbs": [
        "ingest",
        "validate",
        "route",
        "scale"
      ]
    },
    {
      "id": "dr",
      "name": "DR Readiness Agent",
      "mission": "Prove resilience before failure",
      "status": "Ready",
      "confidence": 82,
      "risk": "Medium",
      "impact": "RPO/RTO evidence and failover readiness",
      "color": "black",
      "verbs": [
        "simulate",
        "test",
        "govern",
        "evidence"
      ]
    },
    {
      "id": "vendor",
      "name": "Vendor Governance Agent",
      "mission": "Rationalize vendors and SLA risk",
      "status": "Watching",
      "confidence": 79,
      "risk": "Medium",
      "impact": "Contract overlap and SLA breach evidence",
      "color": "black",
      "verbs": [
        "compare",
        "detect",
        "negotiate",
        "track"
      ]
    }
  ],
  "cloud_spend": [
    {
      "month": "Jan",
      "aws": 32.4,
      "azure": 25.1,
      "gcp": 14.2,
      "private": 9.5,
      "waste": 7.2
    },
    {
      "month": "Feb",
      "aws": 34.1,
      "azure": 25.6,
      "gcp": 14.9,
      "private": 9.7,
      "waste": 7.8
    },
    {
      "month": "Mar",
      "aws": 35.8,
      "azure": 26.5,
      "gcp": 15.4,
      "private": 10.1,
      "waste": 8.4
    },
    {
      "month": "Apr",
      "aws": 37.5,
      "azure": 27.2,
      "gcp": 16.1,
      "private": 10.4,
      "waste": 9.6
    },
    {
      "month": "May",
      "aws": 39.2,
      "azure": 28.6,
      "gcp": 17.7,
      "private": 10.8,
      "waste": 11.2
    },
    {
      "month": "Jun",
      "aws": 42.8,
      "azure": 29.1,
      "gcp": 18.3,
      "private": 11.0,
      "waste": 13.7
    }
  ],
  "kubernetes_telemetry": [
    {
      "cluster": "industrial-ai-prod",
      "region": "Tokyo",
      "health": 78,
      "latency_ms": 212,
      "cpu": 74,
      "memory": 82,
      "restarts": 31,
      "risk": "High"
    },
    {
      "cluster": "iot-analytics-apac",
      "region": "Singapore",
      "health": 86,
      "latency_ms": 148,
      "cpu": 63,
      "memory": 71,
      "restarts": 12,
      "risk": "Medium"
    },
    {
      "cluster": "data-platform-blr",
      "region": "Bengaluru",
      "health": 91,
      "latency_ms": 96,
      "cpu": 58,
      "memory": 64,
      "restarts": 7,
      "risk": "Low"
    },
    {
      "cluster": "edge-inference-eu",
      "region": "Frankfurt",
      "health": 83,
      "latency_ms": 171,
      "cpu": 69,
      "memory": 77,
      "restarts": 19,
      "risk": "Medium"
    }
  ],
  "apps_modernization": [
    {
      "app_id": "APP-001",
      "name": "Industrial Asset Analytics",
      "business_unit": "Industrial AI",
      "criticality": "High",
      "cloud_readiness": 72,
      "tech_debt": 68,
      "dependency_risk": 81,
      "security_risk": 62,
      "path": "Replatform",
      "effort": "M",
      "estimated_savings": "18%",
      "wave": "Wave 1"
    },
    {
      "app_id": "APP-002",
      "name": "Factory Quality Data Hub",
      "business_unit": "Manufacturing",
      "criticality": "High",
      "cloud_readiness": 65,
      "tech_debt": 76,
      "dependency_risk": 70,
      "security_risk": 58,
      "path": "Refactor",
      "effort": "L",
      "estimated_savings": "12%",
      "wave": "Wave 1"
    },
    {
      "app_id": "APP-003",
      "name": "Railway Reliability Portal",
      "business_unit": "Mobility",
      "criticality": "Medium",
      "cloud_readiness": 84,
      "tech_debt": 45,
      "dependency_risk": 39,
      "security_risk": 42,
      "path": "Rehost",
      "effort": "S",
      "estimated_savings": "9%",
      "wave": "Wave 2"
    },
    {
      "app_id": "APP-004",
      "name": "Procurement Vendor Console",
      "business_unit": "Enterprise Transformation",
      "criticality": "Medium",
      "cloud_readiness": 59,
      "tech_debt": 71,
      "dependency_risk": 66,
      "security_risk": 73,
      "path": "Replatform",
      "effort": "M",
      "estimated_savings": "15%",
      "wave": "Wave 2"
    },
    {
      "app_id": "APP-005",
      "name": "Energy Edge Telemetry",
      "business_unit": "Energy",
      "criticality": "High",
      "cloud_readiness": 69,
      "tech_debt": 63,
      "dependency_risk": 84,
      "security_risk": 67,
      "path": "Refactor",
      "effort": "L",
      "estimated_savings": "20%",
      "wave": "Wave 1"
    },
    {
      "app_id": "APP-006",
      "name": "HR Service Portal",
      "business_unit": "Corporate IT",
      "criticality": "Low",
      "cloud_readiness": 91,
      "tech_debt": 32,
      "dependency_risk": 28,
      "security_risk": 35,
      "path": "SaaS replace",
      "effort": "S",
      "estimated_savings": "22%",
      "wave": "Wave 3"
    },
    {
      "app_id": "APP-007",
      "name": "Legacy Batch Billing",
      "business_unit": "Finance",
      "criticality": "High",
      "cloud_readiness": 42,
      "tech_debt": 88,
      "dependency_risk": 92,
      "security_risk": 79,
      "path": "Strangler refactor",
      "effort": "XL",
      "estimated_savings": "16%",
      "wave": "Wave 2"
    },
    {
      "app_id": "APP-008",
      "name": "ServiceNow Integration Hub",
      "business_unit": "Infrastructure Ops",
      "criticality": "Medium",
      "cloud_readiness": 78,
      "tech_debt": 54,
      "dependency_risk": 60,
      "security_risk": 49,
      "path": "Replatform",
      "effort": "M",
      "estimated_savings": "11%",
      "wave": "Wave 2"
    }
  ],
  "iot_pipelines": [
    {
      "pipeline": "Factory Vision QA",
      "edge": "Bengaluru Plant Edge",
      "freshness": 91,
      "quality": 86,
      "latency": 132,
      "drift": 12,
      "model_ready": 78,
      "status": "Watch"
    },
    {
      "pipeline": "Rail Asset Telemetry",
      "edge": "Tokyo Mobility Edge",
      "freshness": 88,
      "quality": 79,
      "latency": 178,
      "drift": 19,
      "model_ready": 71,
      "status": "Risk"
    },
    {
      "pipeline": "Energy Equipment Sensors",
      "edge": "APAC Energy Edge",
      "freshness": 94,
      "quality": 91,
      "latency": 104,
      "drift": 7,
      "model_ready": 84,
      "status": "Healthy"
    },
    {
      "pipeline": "Construction Machinery IoT",
      "edge": "Singapore Edge Mesh",
      "freshness": 81,
      "quality": 75,
      "latency": 211,
      "drift": 25,
      "model_ready": 66,
      "status": "Risk"
    }
  ],
  "dr_readiness": [
    {
      "system": "Industrial AI Data Lake",
      "rpo_target_min": 15,
      "rpo_actual_min": 18,
      "rto_target_min": 45,
      "rto_actual_min": 51,
      "backup_freshness": "Watch",
      "score": 78
    },
    {
      "system": "Kubernetes Control Plane",
      "rpo_target_min": 5,
      "rpo_actual_min": 4,
      "rto_target_min": 20,
      "rto_actual_min": 18,
      "backup_freshness": "Healthy",
      "score": 91
    },
    {
      "system": "IoT Edge Gateway Config",
      "rpo_target_min": 30,
      "rpo_actual_min": 52,
      "rto_target_min": 60,
      "rto_actual_min": 72,
      "backup_freshness": "Risk",
      "score": 64
    },
    {
      "system": "Vendor Governance Repository",
      "rpo_target_min": 60,
      "rpo_actual_min": 35,
      "rto_target_min": 120,
      "rto_actual_min": 103,
      "backup_freshness": "Healthy",
      "score": 88
    }
  ],
  "vendors": [
    {
      "vendor": "CloudOps Prime",
      "category": "Managed Kubernetes",
      "annual_spend_cr": 12.4,
      "sla": 99.9,
      "actual": 99.71,
      "incidents": 8,
      "overlap": "Medium",
      "risk": "High"
    },
    {
      "vendor": "InfraScale APAC",
      "category": "Cloud MSP",
      "annual_spend_cr": 18.9,
      "sla": 99.5,
      "actual": 99.56,
      "incidents": 5,
      "overlap": "High",
      "risk": "Medium"
    },
    {
      "vendor": "DataStream Works",
      "category": "IoT Data Platform",
      "annual_spend_cr": 9.8,
      "sla": 99.7,
      "actual": 99.31,
      "incidents": 11,
      "overlap": "Medium",
      "risk": "High"
    },
    {
      "vendor": "SecureMesh",
      "category": "Security Monitoring",
      "annual_spend_cr": 7.1,
      "sla": 99.9,
      "actual": 99.93,
      "incidents": 2,
      "overlap": "Low",
      "risk": "Low"
    },
    {
      "vendor": "CloudFin Advisory",
      "category": "FinOps Tooling",
      "annual_spend_cr": 5.7,
      "sla": 99.0,
      "actual": 99.04,
      "incidents": 3,
      "overlap": "High",
      "risk": "Medium"
    }
  ],
  "historic_kpis": [
    {
        "week": "W-24",
        "cost_index": 101,
        "k8s_health": 69,
        "mttr": 78,
        "iot_quality": 73,
        "dr_score": 64,
        "governance": 55
    },
    {
        "week": "W-23",
        "cost_index": 103,
        "k8s_health": 71,
        "mttr": 74,
        "iot_quality": 74,
        "dr_score": 66,
        "governance": 57
    },
    {
        "week": "W-22",
        "cost_index": 105,
        "k8s_health": 71,
        "mttr": 72,
        "iot_quality": 75,
        "dr_score": 66,
        "governance": 58
    },
    {
        "week": "W-21",
        "cost_index": 107,
        "k8s_health": 71,
        "mttr": 72,
        "iot_quality": 75,
        "dr_score": 67,
        "governance": 60
    },
    {
        "week": "W-20",
        "cost_index": 107,
        "k8s_health": 73,
        "mttr": 69,
        "iot_quality": 76,
        "dr_score": 68,
        "governance": 60
    },
    {
        "week": "W-19",
        "cost_index": 107,
        "k8s_health": 75,
        "mttr": 66,
        "iot_quality": 77,
        "dr_score": 70,
        "governance": 62
    },
    {
        "week": "W-18",
        "cost_index": 107,
        "k8s_health": 74,
        "mttr": 65,
        "iot_quality": 78,
        "dr_score": 70,
        "governance": 63
    },
    {
        "week": "W-17",
        "cost_index": 109,
        "k8s_health": 76,
        "mttr": 64,
        "iot_quality": 78,
        "dr_score": 71,
        "governance": 65
    },
    {
        "week": "W-16",
        "cost_index": 109,
        "k8s_health": 75,
        "mttr": 64,
        "iot_quality": 77,
        "dr_score": 70,
        "governance": 63
    },
    {
        "week": "W-15",
        "cost_index": 111,
        "k8s_health": 76,
        "mttr": 61,
        "iot_quality": 78,
        "dr_score": 72,
        "governance": 65
    },
    {
        "week": "W-14",
        "cost_index": 114,
        "k8s_health": 77,
        "mttr": 58,
        "iot_quality": 79,
        "dr_score": 72,
        "governance": 66
    },
    {
        "week": "W-13",
        "cost_index": 116,
        "k8s_health": 77,
        "mttr": 58,
        "iot_quality": 79,
        "dr_score": 74,
        "governance": 69
    },
    {
        "week": "W-12",
        "cost_index": 116,
        "k8s_health": 79,
        "mttr": 56,
        "iot_quality": 80,
        "dr_score": 74,
        "governance": 69
    },
    {
        "week": "W-11",
        "cost_index": 116,
        "k8s_health": 80,
        "mttr": 52,
        "iot_quality": 81,
        "dr_score": 76,
        "governance": 71
    },
    {
        "week": "W-10",
        "cost_index": 116,
        "k8s_health": 80,
        "mttr": 51,
        "iot_quality": 82,
        "dr_score": 76,
        "governance": 72
    },
    {
        "week": "W-9",
        "cost_index": 118,
        "k8s_health": 82,
        "mttr": 50,
        "iot_quality": 82,
        "dr_score": 78,
        "governance": 74
    },
    {
        "week": "W-8",
        "cost_index": 118,
        "k8s_health": 81,
        "mttr": 51,
        "iot_quality": 81,
        "dr_score": 76,
        "governance": 72
    },
    {
        "week": "W-7",
        "cost_index": 120,
        "k8s_health": 82,
        "mttr": 47,
        "iot_quality": 82,
        "dr_score": 78,
        "governance": 74
    },
    {
        "week": "W-6",
        "cost_index": 122,
        "k8s_health": 83,
        "mttr": 44,
        "iot_quality": 83,
        "dr_score": 78,
        "governance": 75
    },
    {
        "week": "W-5",
        "cost_index": 124,
        "k8s_health": 83,
        "mttr": 45,
        "iot_quality": 83,
        "dr_score": 80,
        "governance": 77
    },
    {
        "week": "W-4",
        "cost_index": 124,
        "k8s_health": 84,
        "mttr": 42,
        "iot_quality": 84,
        "dr_score": 81,
        "governance": 77
    },
    {
        "week": "W-3",
        "cost_index": 124,
        "k8s_health": 86,
        "mttr": 38,
        "iot_quality": 85,
        "dr_score": 82,
        "governance": 79
    },
    {
        "week": "W-2",
        "cost_index": 124,
        "k8s_health": 86,
        "mttr": 38,
        "iot_quality": 86,
        "dr_score": 82,
        "governance": 80
    },
    {
        "week": "W-1",
        "cost_index": 126,
        "k8s_health": 85,
        "mttr": 37,
        "iot_quality": 85,
        "dr_score": 82,
        "governance": 82
    }
],
  "scenarios": [
    {
      "id": "cloud-anomaly",
      "title": "Cloud spend anomaly",
      "agent": "finops",
      "severity": "High",
      "headline": "Industrial AI GPU spend surged 23% above baseline",
      "description": "FinOps Agent correlates GPU utilization, idle notebooks and missed commitment coverage.",
      "action": "Approve GPU schedule policy + rightsize 18 idle nodes",
      "impact": "\u20b93.2M monthly avoidable run-rate detected",
      "kpi": {
        "savings": 3.2,
        "cloudWaste": -3,
        "governance": 2
      }
    },
    {
      "id": "k8s-pressure",
      "title": "Kubernetes outage risk",
      "agent": "k8s",
      "severity": "Critical",
      "headline": "Pod memory spike + node pressure on industrial-ai-prod",
      "description": "K8s SRE Agent links traffic shift, deployment hash and memory saturation.",
      "action": "Scale node pool by 2, rollback model service v2.4 if latency persists",
      "impact": "Expected latency improvement 32%; MTTR avoidance 41 minutes",
      "kpi": {
        "k8sHealth": 5,
        "mttr": -8,
        "governance": 1
      }
    },
    {
      "id": "legacy-wave",
      "title": "Legacy modernization wave",
      "agent": "modernization",
      "severity": "Medium",
      "headline": "Legacy batch billing and IoT gateway apps moved into Wave 1/2 decision pack",
      "description": "Modernization Agent creates CFO-friendly ranking with risk, effort and cloud impact.",
      "action": "Generate Japan/APAC approval packet and IaC backlog",
      "impact": "8 apps scored; 3 candidates ready for architecture workshop",
      "kpi": {
        "migrationVelocity": 4,
        "governance": 3
      }
    },
    {
      "id": "iot-drift",
      "title": "IoT data quality degradation",
      "agent": "iot",
      "severity": "High",
      "headline": "Sensor drift detected in construction machinery telemetry",
      "description": "Industrial AI Platform Agent flags latency + data-quality risk before model degradation.",
      "action": "Quarantine bad sensor batch, reroute stream, increase feature quality gate",
      "impact": "Model readiness expected to improve from 66 to 78",
      "kpi": {
        "iotQuality": 6,
        "k8sHealth": 1
      }
    },
    {
      "id": "dr-gap",
      "title": "DR readiness failure",
      "agent": "dr",
      "severity": "High",
      "headline": "IoT Edge Gateway Config exceeds RPO/RTO targets",
      "description": "DR Agent simulates failover and produces evidence gaps for leadership review.",
      "action": "Refresh backup policy, retest failover, attach audit evidence",
      "impact": "DR score expected to improve by 9 points",
      "kpi": {
        "drScore": 9,
        "governance": 4
      }
    },
    {
      "id": "vendor-sla",
      "title": "Vendor SLA and consolidation risk",
      "agent": "vendor",
      "severity": "Medium",
      "headline": "3 overlapping vendors and 2 SLA breaches identified",
      "description": "Vendor Governance Agent finds cloud MSP/tooling overlap and contract leakage.",
      "action": "Create consolidation shortlist and SLA breach evidence pack",
      "impact": "11% vendor rationalization opportunity identified",
      "kpi": {
        "vendorRisk": -8,
        "savings": 1.1,
        "governance": 3
      }
    }
  ],
  "events_seed": [
    {
      "source": "AWS Cost Explorer",
      "severity": "Medium",
      "event": "Idle EC2 family detected in AI analytics sandbox",
      "agent": "finops"
    },
    {
      "source": "Azure Monitor",
      "severity": "Medium",
      "event": "Storage tier drift: premium disks below IOPS threshold",
      "agent": "finops"
    },
    {
      "source": "Kubernetes Events",
      "severity": "High",
      "event": "Node pressure warning in industrial-ai-prod",
      "agent": "k8s"
    },
    {
      "source": "Prometheus",
      "severity": "High",
      "event": "P95 latency breach for model inference endpoint",
      "agent": "k8s"
    },
    {
      "source": "App Inventory",
      "severity": "Low",
      "event": "New legacy dependency detected for billing workflow",
      "agent": "modernization"
    },
    {
      "source": "Kafka Data Quality",
      "severity": "High",
      "event": "Sensor freshness below threshold in rail telemetry stream",
      "agent": "iot"
    },
    {
      "source": "DR Runbook",
      "severity": "Medium",
      "event": "Backup job duration exceeds target for IoT edge gateway",
      "agent": "dr"
    },
    {
      "source": "Vendor SLA Feed",
      "severity": "Medium",
      "event": "Monthly SLA evidence missing for DataStream Works",
      "agent": "vendor"
    }
  ],
  "governance_policies": [
    {
      "id": "POL-001",
      "name": "Human approval required for infrastructure changes",
      "scope": "All agents",
      "control": "No write action executes without named approver"
    },
    {
      "id": "POL-002",
      "name": "Japan/APAC approval packet for modernization waves",
      "scope": "Modernization",
      "control": "Decision pack must include cost, risk, dependency and rollback"
    },
    {
      "id": "POL-003",
      "name": "Sovereign data boundary guardrail",
      "scope": "IoT, AI, cloud",
      "control": "OT and regulated telemetry cannot cross configured boundary"
    },
    {
      "id": "POL-004",
      "name": "K8s production rollback guardrail",
      "scope": "K8s SRE",
      "control": "Rollback allowed only if error budget burn exceeds threshold"
    },
    {
      "id": "POL-005",
      "name": "DR evidence retention",
      "scope": "DR",
      "control": "Every DR simulation keeps RPO/RTO evidence and action log"
    }
  ],
  "config": {
    "client": "Hitachi GCC Bengaluru",
    "system": "AIonOS Mission Control",
    "tagline": "AI-native infrastructure, FinOps, K8s SRE, Industrial AI and governance control plane",
    "version": "1.0.0",
    "mode": "static-github-pages",
    "timezone": "Asia/Kolkata"
  }
};
