import React from 'react';
import TbMonogram from './TbMonogram';
import AnimatedLogoMark from './AnimatedLogoMark';

/**
 * Logo component
 * size: 'sm' (navbar square) | 'lg' (hero circular badge)
 */
export default function Logo({ size = 'lg' }) {
  if (size === 'sm') {
    return (
      <div
        className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#14161b] via-[#0d0f13] to-black border border-white/10 shadow-[0_8px_18px_rgba(0,0,0,0.45)] flex items-center justify-center"
        aria-label="TB logo small"
      >
        <TbMonogram size="nav" />
      </div>
    );
  }

  return (
    <div aria-label="TB logo large">
      <AnimatedLogoMark variant="circle" size="hero" />
    </div>
  );
}
