import React from 'react';
import SectionHeading from './SectionHeading';

export default function ExperienceSection({ experience, isVisible }) {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className={`max-w-6xl mx-auto w-full scroll-reveal ${isVisible ? 'revealed' : ''} relative z-10`}>
        <SectionHeading>
          Experience
        </SectionHeading>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card p-6 md:p-8 hover-lift scroll-reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-white/80">
                    {exp.company}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-full text-gray-300 text-sm whitespace-nowrap">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  {exp.period}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <span className="text-white mt-1 text-lg">→</span>
                    <span style={{lineHeight: '1.7'}}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
