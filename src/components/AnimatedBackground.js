import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Smooth, noise-free gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0a0c10 0%, #050607 100%)'
        }}
      />
    </div>
  );
}
