import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Blobs - Subtle and Smooth */}
      <div className="absolute top-[-10%] left-[15%] w-[700px] h-[700px] bg-white/[0.02] rounded-full mix-blend-screen filter blur-[140px] animate-blob" />
      <div 
        className="absolute top-[20%] right-[10%] w-[800px] h-[800px] bg-white/[0.015] rounded-full mix-blend-screen filter blur-[140px] animate-blob"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute bottom-[-5%] left-[40%] w-[700px] h-[700px] bg-white/[0.02] rounded-full mix-blend-screen filter blur-[140px] animate-blob"
        style={{ animationDelay: '4s' }}
      />
      
      {/* Smooth Radial Gradient Overlay - No Harsh Bands */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.02)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.015)_0%,_transparent_50%)]" />
      
      {/* Subtle Noise Texture Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.4
        }}
      />
    </div>
  );
}
