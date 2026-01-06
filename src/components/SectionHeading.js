import React from 'react';

export default function SectionHeading({ children, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-display sm:text-h1 font-bold mb-4 text-white tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
