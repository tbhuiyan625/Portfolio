import React from 'react';
import './TbMonogram.css';

// Futuristic TB using Orbitron font + subtle stencil cut and layered glow.
export default function TbMonogram({ size = 'hero', className = '' }) {
  const sizeClass = size === 'nav' ? 'tb-monogram--nav' : 'tb-monogram--hero';

  return (
    <span className={`tb-monogram ${sizeClass} ${className}`} aria-label="TB monogram">
      <span className="tb-monogram__glyph">TB</span>
    </span>
  );
}
