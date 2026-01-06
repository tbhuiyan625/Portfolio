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
      items: ["Python", "Java", "SQL", "JavaScript", "HTML/CSS", "React", "Bash / Shell", "PowerShell (Basic)", "Linux CLI", "Regex", "REST APIs", "JSON", "YAML", "Automation Scripting"]
    },
    {
      category: "Cybersecurity & IT",
      items: ["Threat Detection", "Incident Response", "Vulnerability Assessment", "Network Monitoring", "IT Consulting", "Security Monitoring", "Log Analysis", "Detection Fundamentals", "Threat Hunting (Basic)", "Incident Triage", "Vulnerability Management", "OWASP Top 10", "Web Security Basics", "Firewall Concepts", "IAM / Least Privilege"]
    },
    {
      category: "Tools & Platforms",
      items: ["VS Code", "PyCharm", "IntelliJ", "Google Cloud Platform", "Git", "Tailwind CSS", "Linux", "Wireshark", "Nmap", "Burp Suite (Basics)", "GitHub", "Docker (Basics)", "Postman", "VirtualBox"]
    }
  ];

  const certifications = [
    "Cisco Certified Support Technician",
    "Google Cybersecurity Specialization",
    "IT Specialist – Cybersecurity (Certiport)"
  ];

  const experience = [
    {
      role: "Cybersecurity Engineer Intern",
      company: "Rise and Shine ABA",
      period: "Dec 2025 – Present",
      highlights: [
        "Developed security-focused features for a healthcare (ABA) web platform across frontend + backend, integrating AWS services with Supabase (Postgres) to support secure, scalable workflows.",
        "Implemented least-privilege authorization using RBAC + Supabase Row Level Security (RLS) to restrict access to sensitive records by role and tenant, reducing risk of unauthorized data exposure.",
        "Built an audit logging capability to capture key user/system actions (auth + CRUD events) to improve traceability and support incident investigation and compliance readiness."
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

      {/* Footer removed per request */}
    </div>
  );
}
