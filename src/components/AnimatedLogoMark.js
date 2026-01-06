import React, { useState } from 'react';
import './AnimatedLogoMark.css';

/**
 * AnimatedLogoMark Component
 * A premium cybersecurity-themed animated logo featuring:
 * - Rotating scan ring
 * - Faint sweep highlight
 * - Pulsing corner brackets
 * - Smooth hover effects with increased glow
 * - Support for prefers-reduced-motion
 * 
 * @param {string} variant - 'circle' (default) or 'hex' for badge shape
 * @param {string} size - 'hero' (large) or 'nav' (small icon)
 */
export default function AnimatedLogoMark({ variant = 'circle', size = 'hero' }) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    hero: 'w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96',
    nav: 'w-12 h-12'
  };

  const textSizeClasses = {
    hero: 'text-7xl sm:text-8xl lg:text-9xl',
    nav: 'text-lg'
  };

  const ringRadiusClasses = {
    hero: 'r-175',
    nav: 'r-50'
  };

  return (
    <div 
      className={`animated-logo-mark-container ${sizeClasses[size]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-white/5 rounded-full blur-[60px] scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Main Badge Container */}
      <div className={`relative w-full h-full rounded-full bg-gradient-to-br from-white/20 via-white/10 to-white/5 p-[3px] ${
        variant === 'circle' ? 'rounded-full' : 'rounded-[30%]'
      }`}>
        
        {/* Inner Badge */}
        <div className={`w-full h-full flex items-center justify-center border border-white/10 relative overflow-hidden group ${
          variant === 'circle' ? 'rounded-full' : 'rounded-[27%]'
        } ${isHovered ? 'logo-badge-hover' : ''}`}
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), rgba(255,255,255,0.05) 50%, rgba(10,10,13,1))'
          }}
        >
          {/* Premium Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* SVG Animated Elements */}
          <svg 
            className={`absolute w-full h-full ${isHovered ? 'hover-active' : ''}`}
            viewBox="0 0 400 400"
            style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))' }}
          >
            {/* === SCAN RING === */}
            <circle
              cx="200"
              cy="200"
              r={size === 'hero' ? '175' : '50'}
              fill="none"
              stroke="url(#scanGradient)"
              strokeWidth={size === 'hero' ? '2' : '0.6'}
              className="scan-ring"
              opacity="0.6"
            />

            {/* === SWEEP HIGHLIGHT === */}
            <circle
              cx="200"
              cy="200"
              r={size === 'hero' ? '175' : '50'}
              fill="none"
              stroke="url(#sweepGradient)"
              strokeWidth={size === 'hero' ? '3' : '1'}
              className="sweep-highlight"
              opacity="0.4"
            />

            {/* === GRADIENTS === */}
            <defs>
              {/* Scan ring gradient */}
              <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
              </linearGradient>

              {/* Sweep highlight gradient */}
              <linearGradient id="sweepGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
          </svg>

          {/* === CORNER BRACKETS === */}
          {size === 'hero' && (
            <svg 
              className="absolute w-full h-full pointer-events-none"
              viewBox="0 0 400 400"
              style={{ zIndex: 5 }}
            >
              <defs>
                <style>{`
                  .bracket { fill: none; stroke: rgba(255,255,255,0.5); stroke-width: 2.5; }
                  @media (prefers-reduced-motion: no-preference) {
                    .bracket-group { animation: bracket-pulse 3s cubic-bezier(0.4, 0.0, 0.6, 1.0) infinite; }
                  }
                `}</style>
              </defs>

              {/* Top-Left Bracket */}
              <g className="bracket-group" style={{ '--delay': '0s' }}>
                <polyline className="bracket" points="60,60 60,90 90,90" />
              </g>

              {/* Top-Right Bracket */}
              <g className="bracket-group" style={{ '--delay': '0.5s' }}>
                <polyline className="bracket" points="340,60 340,90 310,90" />
              </g>

              {/* Bottom-Right Bracket */}
              <g className="bracket-group" style={{ '--delay': '1s' }}>
                <polyline className="bracket" points="340,340 340,310 310,310" />
              </g>

              {/* Bottom-Left Bracket */}
              <g className="bracket-group" style={{ '--delay': '1.5s' }}>
                <polyline className="bracket" points="60,340 60,310 90,310" />
              </g>
            </svg>
          )}

          {/* TB Text */}
          <span className={`${textSizeClasses[size]} font-bold text-white relative z-10 tracking-tight`}>
            TB
          </span>
        </div>
      </div>
    </div>
  );
}
