import React, { useId } from 'react';
import './TbMonogram.css';

/**
 * TB Monogram rendered as SVG paths for consistent futuristic styling.
 * Metallic gradient fill + soft layered glow inspired by the reference.
 */
export default function TbMonogram({ size = 'hero', className = '' }) {
  const rawId = useId().replace(/:/g, '-');
  const metalId = `tbMetal-${rawId}`;
  const edgeId = `tbEdge-${rawId}`;
  const shineId = `tbShine-${rawId}`;
  const glowId = `tbGlow-${rawId}`;

  const strokeWidth = size === 'nav' ? 6 : 8;
  const variantClass = size === 'nav' ? 'tb-monogram--nav' : 'tb-monogram--hero';

  return (
    <svg
      viewBox="0 0 320 200"
      role="img"
      aria-label="TB monogram"
      className={`tb-monogram ${variantClass} ${className}`}
      preserveAspectRatio="xMidYMid meet"
      shapeRendering="geometricPrecision"
    >
      <defs>
        <linearGradient id={metalId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f6f8fa" />
          <stop offset="42%" stopColor="#dee2e6" />
          <stop offset="100%" stopColor="#aeb4bb" />
        </linearGradient>

        <linearGradient id={edgeId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
          <stop offset="55%" stopColor="#cfd5db" stopOpacity="0.78" />
          <stop offset="100%" stopColor="#7a838c" stopOpacity="0.7" />
        </linearGradient>

        <linearGradient id={shineId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
          <stop offset="20%" stopColor="rgba(255,255,255,0.38)" />
          <stop offset="48%" stopColor="rgba(255,255,255,0.12)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000000" floodOpacity="0.46" />
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#dce4ed" floodOpacity="0.35" />
          <feDropShadow dx="0" dy="0" stdDeviation="22" floodColor="#a8b6c2" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter={`url(#${glowId})`} transform="skewX(10)">
        {/* T shape */}
        <path
          d="M12 42 H178 L166 72 H124 L96 186 H46 L76 72 H6 Z"
          fill={`url(#${metalId})`}
          stroke={`url(#${edgeId})`}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* B shape with cutouts using even-odd fill */}
        <path
          d="M186 42 H304 L292 88 H238 L226 118 H292 L280 168 H230 L214 186 H156 Z M206 66 H270 L262 86 H214 Z M200 130 H258 L248 150 H206 Z"
          fill={`url(#${metalId})`}
          stroke={`url(#${edgeId})`}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          fillRule="evenodd"
        />
        {/* Top highlight sweep */}
        <path
          d="M18 44 H182 L170 70 H128 L100 180 H56 L82 70 H12 Z M192 44 H298 L288 86 H236 L224 116 H286 L276 164 H232 L216 182 H162 Z M210 68 H266 L258 86 H216 Z M204 132 H254 L244 150 H204 Z"
          fill={`url(#${shineId})`}
          fillRule="evenodd"
          opacity="0.55"
        />
      </g>
    </svg>
  );
}
