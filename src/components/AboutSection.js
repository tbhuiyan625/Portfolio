import React from 'react';
import SectionHeading from './SectionHeading';

export default function AboutSection({ skills, certifications, isVisible }) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className={`max-w-6xl mx-auto scroll-reveal ${isVisible ? 'revealed' : ''} relative z-10`}>
        <SectionHeading>
          About Me
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Bio & Certifications */}
          <div className="space-y-6 scroll-reveal" style={{ transitionDelay: '100ms' }}>
            <p className="text-lg text-white/80 leading-relaxed" style={{lineHeight: '1.7', maxWidth: '65ch'}}>
              I'm a Computer Science student at Queens College, CUNY, with a passion for cybersecurity and secure software development. 
              My expertise lies in threat detection, incident response, and building security tools using Python.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed" style={{lineHeight: '1.7', maxWidth: '65ch'}}>
              I hold multiple cybersecurity certifications and have gained hands-on experience through internships in technical support, 
              information systems, and digital operations.
            </p>

            {/* Certifications Card */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-white to-gray-400 rounded-full" />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-white mt-1">✓</span>
                    <span className="text-white/80" style={{lineHeight: '1.6'}}>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-4">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="glass-card p-6 hover-lift scroll-reveal"
                style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-white to-gray-400 rounded-full" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="glass-pill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
