/* ============================================
   Animated Logo Mark - Hex Variant
   Premium cybersecurity hex badge
   ============================================ */

import React, { useState } from 'react';
import './AnimatedLogoMarkHex.css';

/**
 * AnimatedLogoMarkHex Component
 * Hexagon-shaped variant of AnimatedLogoMark
 * Same animations and performance optimizations
 * 
 * @param {string} size - 'hero' (large) or 'nav' (small icon)
 */
export default function AnimatedLogoMarkHex({ size = 'hero' }) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    hero: 'w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96',
    nav: 'w-12 h-12'
  };

  const textSizeClasses = {
    hero: 'text-7xl sm:text-8xl lg:text-9xl',
    nav: 'text-lg'
  };

  return (
    <div 
      className={`animated-logo-mark-hex-container ${sizeClasses[size]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-white/5 blur-[60px] scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>

      {/* Main Hex Badge Container */}
      <div className="relative w-full h-full p-[3px]" 
           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
        
        {/* Inner Badge */}
        <div 
          className={`w-full h-full flex items-center justify-center border border-white/10 relative overflow-hidden group`}
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), rgba(255,255,255,0.05) 50%, rgba(10,10,13,1))',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Premium Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* SVG Animated Elements */}
          <svg 
            className={`absolute w-full h-full ${isHovered ? 'hover-active' : ''}`}
            viewBox="0 0 400 400"
            style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))' }}
          >
            {/* === HEX BORDER RINGS === */}
            <polygon
              points="200,30 370,115 370,285 200,370 30,285 30,115"
              fill="none"
              stroke="url(#scanGradientHex)"
              strokeWidth={size === 'hero' ? '2' : '0.6'}
              className="hex-ring"
              opacity="0.6"
            />

            {/* === SWEEP HIGHLIGHT === */}
            <polygon
              points="200,30 370,115 370,285 200,370 30,285 30,115"
              fill="none"
              stroke="url(#sweepGradientHex)"
              strokeWidth={size === 'hero' ? '3' : '1'}
              className="sweep-highlight-hex"
              opacity="0.4"
            />

            {/* === GRADIENTS === */}
            <defs>
              <linearGradient id="scanGradientHex" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>

              <linearGradient id="sweepGradientHex" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
          </svg>

          {/* === CORNER BRACKETS (HEX VERSION) === */}
          {size === 'hero' && (
            <svg 
              className="absolute w-full h-full pointer-events-none"
              viewBox="0 0 400 400"
              style={{ zIndex: 5 }}
            >
              <defs>
                <style>{`
                  .bracket-hex { fill: none; stroke: rgba(255,255,255,0.5); stroke-width: 2.5; }
                  @media (prefers-reduced-motion: no-preference) {
                    .bracket-hex-group { animation: bracket-hex-pulse 3s cubic-bezier(0.4, 0.0, 0.6, 1.0) infinite; }
                  }
                `}</style>
              </defs>

              {/* Top Bracket */}
              <g className="bracket-hex-group" style={{ '--delay': '0s' }}>
                <polyline className="bracket-hex" points="150,40 200,40 220,55" />
              </g>

              {/* Top-Right Bracket */}
              <g className="bracket-hex-group" style={{ '--delay': '0.5s' }}>
                <polyline className="bracket-hex" points="340,110 360,130 360,180" />
              </g>

              {/* Bottom-Right Bracket */}
              <g className="bracket-hex-group" style={{ '--delay': '1s' }}>
                <polyline className="bracket-hex" points="360,220 360,270 340,290" />
              </g>

              {/* Bottom Bracket */}
              <g className="bracket-hex-group" style={{ '--delay': '1.5s' }}>
                <polyline className="bracket-hex" points="220,345 200,360 150,360" />
              </g>

              {/* Bottom-Left Bracket */}
              <g className="bracket-hex-group" style={{ '--delay': '2s' }}>
                <polyline className="bracket-hex" points="60,270 40,290 40,240" />
              </g>

              {/* Top-Left Bracket */}
              <g className="bracket-hex-group" style={{ '--delay': '2.5s' }}>
                <polyline className="bracket-hex" points="40,130 40,180 60,110" />
              </g>
            </svg>
          )}

          {/* TB Text - Futuristic Monogram */}
          <span 
            className={`${textSizeClasses[size]} font-monogram text-white relative z-10 select-none`}
          >
            TB
          </span>
        </div>
      </div>
    </div>
  );
}
