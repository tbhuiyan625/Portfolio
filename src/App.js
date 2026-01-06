import React, { useState, useEffect } from 'react';
import { Shield, Terminal } from 'lucide-react';

// Import styles
import './styles/tokens.css';
import './styles/animations.css';
import './styles/glassmorphism.css';

// Import components
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function Portfolio() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Scroll reveal for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, [visibleSections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Data
  const projects = [
    {
      title: "Python Threat Detection/Response Framework (TDRF)",
      description: "Security tool that analyzes system logs to detect brute-force attempts and repeated failed logins with event correlation logic",
      tech: ["Python", "Security", "Log Analysis", "CLI/GUI"],
      link: "https://github.com/tbhuiyan625",
      icon: <Shield className="w-8 h-8 text-white" />
    },
    {
      title: "PyMAS – Python Malware Analysis/Sandbox System",
      description: "Tool to inspect suspicious files by extracting metadata, hashes, and analyzing file behavior with risk scoring",
      tech: ["Python", "Malware Analysis", "Security", "File Analysis"],
      link: "https://github.com/tbhuiyan625",
      icon: <Terminal className="w-8 h-8 text-white" />
    }
  ];

  const skills = [
    {
      category: "Languages & Scripting",
      items: ["Python", "Java", "SQL", "JavaScript", "HTML/CSS", "React"]
    },
    {
      category: "Cybersecurity & IT",
      items: ["Threat Detection", "Incident Response", "Vulnerability Assessment", "Network Monitoring", "IT Consulting"]
    },
    {
      category: "Tools & Platforms",
      items: ["VS Code", "PyCharm", "IntelliJ", "Google Cloud Platform", "Git", "Tailwind CSS"]
    }
  ];

  const certifications = [
    "Cisco Certified Support Technician",
    "Google Cybersecurity Specialization",
    "IT Specialist – Cybersecurity (Certiport)"
  ];

  const experience = [
    {
      role: "Technical Intern",
      company: "Zentrition",
      period: "Dec 2022 – Jan 2023",
      highlights: [
        "Produced digital content using structured workflows and technical editing tools",
        "Applied problem-solving to improve UI/UX efficiency",
        "Coordinated multiple projects reducing operational risks"
      ]
    },
    {
      role: "Information Systems Intern",
      company: "VIPSocio",
      period: "Nov 2022 – Dec 2022",
      highlights: [
        "Increased user engagement by analyzing platform metrics",
        "Streamlined team operations by improving coordination tools",
        "Provided technical support and improved platform security"
      ]
    },
    {
      role: "Technical Support Intern",
      company: "Kidmoto Technologies",
      period: "Mar 2022 – Aug 2022",
      highlights: [
        "Executed data-driven digital outreach to support platform growth",
        "Collaborated with technical teams to optimize workflows",
        "Delivered customer support ensuring secure information handling"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* About Section */}
      <AboutSection
        skills={skills}
        certifications={certifications}
        isVisible={visibleSections.has('about')}
      />

      {/* Experience Section */}
      <ExperienceSection
        experience={experience}
        isVisible={visibleSections.has('experience')}
      />

      {/* Projects Section */}
      <ProjectsSection
        projects={projects}
        isVisible={visibleSections.has('projects')}
      />

      {/* Contact Section */}
      <ContactSection isVisible={visibleSections.has('contact')} />

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-gray-400 border-t border-white/10">
        <p className="text-sm">
          © {new Date().getFullYear()} Taheem Bhuiyan. Built with React.
        </p>
      </footer>
    </div>
  );
}
