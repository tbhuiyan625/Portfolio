import React from 'react';
import './SecurityDashboardCard.css';

export default function SecurityDashboardCard({ size = 'hero' }) {
  const containerClass = size === 'hero' ? 'security-card security-card--hero' : 'security-card security-card--compact';

  const logs = [
    '[RLS] RLS_POLICY_APPLIED clients',
    '[RBAC] RBAC_ROLE_UPDATED admin -> billing',
    '[AUDIT] AUDIT_EVENT_WRITE auth.login',
    '[SEC] SECURITY_CHECK passed',
    '[IR] INCIDENT_TRIAGE started',
    '[AWS] SERVICE_CONNECTED s3',
    '[APP] FRONTEND_BUILD passing',
    '[DB] SUPABASE_POSTGRES online'
  ];

  return (
    <div className={containerClass} aria-label="Security dashboard">
      <div className="security-card__sweep" />
      <div className="security-card__inner">
        <div className="security-card__header">Security Dashboard</div>
        <div className="security-card__subtitle">Cloud • AppSec • Monitoring</div>

        {/* Status chips */}
        <div className="security-card__chips" role="group" aria-label="status chips">
          <span className="security-chip">RLS: Enforced</span>
          <span className="security-chip">RBAC: Active</span>
          <span className="security-chip">Audit Logs: Enabled</span>
          <span className="security-chip">AWS: Secured</span>
          <span className="security-chip">Build: Passing</span>
        </div>

        {/* Mini panels */}
        <div className="security-card__panels" aria-label="dashboard panels">
          <div className="security-panel">
            <div className="security-panel__title">Access Control</div>
            <div className="security-panel__item"><span className="dot" />Policies: RBAC + RLS</div>
            <div className="security-panel__item"><span className="dot" />Tenants: Protected</div>
          </div>
          <div className="security-panel">
            <div className="security-panel__title">Audit Trail</div>
            <div className="security-panel__item"><span className="dot" />Events: Auth + CRUD</div>
            <div className="security-panel__item"><span className="dot" />Integrity: Verified</div>
          </div>
          <div className="security-panel">
            <div className="security-panel__title">Cloud / Infra</div>
            <div className="security-panel__item"><span className="dot" />AWS Services: Connected</div>
            <div className="security-panel__item"><span className="dot" />Secrets: Protected</div>
          </div>
        </div>

        {/* Log feed */}
        <div className="security-card__logs">
          {logs.slice(0, logs.length - 1).map((line, idx) => (
            <div key={idx} className="security-card__logline" aria-hidden="true">
              {line}
            </div>
          ))}
          <div className="security-card__logline security-card__logline--cursor" aria-hidden="true">
            {logs[logs.length - 1]}
          </div>
        </div>
      </div>
    </div>
  );
}
