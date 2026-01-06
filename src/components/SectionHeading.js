import React from 'react';

export default function SectionHeading({ children, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
