import React from 'react';
import './SecurityDashboardCard.css';

export default function SecurityDashboardCard({ size = 'hero' }) {
  const containerClass = size === 'hero' ? 'security-card security-card--hero' : 'security-card security-card--compact';

  const logs = [
    '[INFO] Initializing audit services...',
    '[AUTH] Least privilege policy loaded',
    '[MONITOR] Endpoint heartbeat ok',
    '[LOG] Session token rotated',
    '[RBAC] User scope: reader',
    '[ANALYTICS] 3 events correlated',
    '[ALERT] No anomalies detected',
    '[STREAM] Logs persisted > s3://secure-logs'
  ];

  return (
    <div className={containerClass} aria-label="Security dashboard">
      <div className="security-card__sweep" />
      <div className="security-card__inner">
        <div className="security-card__header">SECURITY DASHBOARD</div>

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

        <div className="security-card__chips" role="group" aria-label="status chips">
          <span className="security-chip">Monitoring</span>
          <span className="security-chip">Least Privilege</span>
          <span className="security-chip">Audit Logs</span>
        </div>
      </div>
    </div>
  );
}
