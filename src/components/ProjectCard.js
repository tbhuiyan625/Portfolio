import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <div
      className="glass-card glass-card-spotlight hover-lift p-6 cursor-pointer scroll-reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseMove={handleMouseMove}
    >
      {/* Icon */}
      <div className="mb-4 text-white">
        {project.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-3 text-white">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-white/75 mb-4" style={{lineHeight: '1.7'}}>
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="glass-pill text-white/80"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
          >
            <span>View on GitHub</span>
            <ExternalLink 
              size={16} 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span>Live Demo</span>
            <ExternalLink 
              size={16} 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </a>
        )}
      </div>
    </div>
  );
}
