import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projects, isVisible }) {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className={`max-w-6xl mx-auto w-full scroll-reveal ${isVisible ? 'revealed' : ''} relative z-10`}>
        <SectionHeading
          subtitle="Security tools and applications I've built"
        >
          Featured Projects
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
