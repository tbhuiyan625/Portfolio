import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layer 1: Base Radial Gradient - Very Subtle, Large Blur */}
      {/* This creates a gentle glow from top-left without visible circles */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 2000px 1500px at 20% 10%, rgba(255,255,255,0.008) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Layer 2: Secondary Radial Gradient - Bottom accent, very faint */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 2200px 1600px at 80% 100%, rgba(255,255,255,0.006) 0%, transparent 65%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Layer 3: Ultra-Subtle Animated Glow - Moves slightly for life */}
      <div 
        className="absolute inset-0 animate-blob opacity-40"
        style={{
          background: 'radial-gradient(ellipse 2500px 2000px at 50% 50%, rgba(255,255,255,0.004) 0%, transparent 60%)',
          filter: 'blur(150px)',
        }}
      />
      
      {/* Layer 4: Noise Texture - Adds micro-detail without visible patterns */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.005) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.005) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          opacity: 0.5
        }}
      />
      
      {/* Layer 5: Subtle perlin-like noise for organic feel (using pseudo-random SVG pattern) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="noiseFilter">
            <feTurbulence baseFrequency="0.01" numOctaves="4" type="fractalNoise" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="rgba(255,255,255,0.01)" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
