import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Shield, Code, Terminal } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Create particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Python Threat Detection/Response Framework (TDRF)",
      description: "Security tool that analyzes system logs to detect brute-force attempts and repeated failed logins with event correlation logic",
      tech: ["Python", "Security", "Log Analysis", "CLI/GUI"],
      link: "https://github.com/tbhuiyan625",
      icon: <Shield className="w-6 h-6 mb-3 text-blue-400" />
    },
    {
      title: "PyMAS – Python Malware Analysis/Sandbox System",
      description: "Tool to inspect suspicious files by extracting metadata, hashes, and analyzing file behavior with risk scoring",
      tech: ["Python", "Malware Analysis", "Security", "File Analysis"],
      link: "https://github.com/tbhuiyan625",
      icon: <Terminal className="w-6 h-6 mb-3 text-cyan-400" />
    },
    {
      title: "Port Scanner & Service Detection",
      description: "Python port scanner with service banner grabbing to identify open ports and exposed services",
      tech: ["Python", "Network Security", "Port Scanning"],
      link: "https://github.com/tbhuiyan625",
      icon: <Code className="w-6 h-6 mb-3 text-blue-400" />
    }
  ];

  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            // Update active section when it becomes visible
            if (entry.intersectionRatio > 0.5) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { threshold: [0.3, 0.5, 0.7] }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

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
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" 
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * 0.015}px)`
          }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.01}px)`
          }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-transparent to-slate-950"></div>
      </div>
      <style>{`
        * {
          scroll-behavior: smooth;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes explode {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
              calc((var(--random-x, 0.5) - 0.5) * 200px),
              calc((var(--random-y, 0.5) - 0.5) * 200px)
            ) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes float-particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(30px, -30px) scale(1.2);
            opacity: 0.5;
          }
          50% {
            transform: translate(-20px, -60px) scale(0.8);
            opacity: 0.7;
          }
          75% {
            transform: translate(-40px, -30px) scale(1.1);
            opacity: 0.4;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes bounce-in {
          0% {
            transform: scale(0.8) translateY(30px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4),
                        0 0 40px rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8),
                        0 0 80px rgba(59, 130, 246, 0.4),
                        0 0 120px rgba(59, 130, 246, 0.2);
          }
        }
        
        @keyframes slide-rotate {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes animate-gradient-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        .animate-gradient-flow {
          background-size: 200% auto;
          animation: animate-gradient-flow 3s linear infinite;
        }
        
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(59, 130, 246, 0.3); }
          50% { border-color: rgba(6, 182, 212, 0.6); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #3B82F6, #06B6D4, #3B82F6, #06B6D4);
          background-size: 200% auto;
          animation: gradient-shift 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-text-bg {
          background: linear-gradient(90deg, #3B82F6, #06B6D4, #3B82F6, #06B6D4) !important;
          background-size: 200% auto !important;
          animation: gradient-shift 3s linear infinite !important;
        }
        
        .menu-active {
          background: linear-gradient(90deg, #3B82F6, #06B6D4) !important;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5) !important;
        }
        
        .card-glow {
          position: relative;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }
        
        .card-glow::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(45deg, #3B82F6, #06B6D4, #3B82F6);
          background-size: 200% 200%;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
          animation: gradient-shift 3s linear infinite;
        }
        
        .card-glow::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.2), transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
          pointer-events: none;
        }
        
        .card-glow:hover::before {
          opacity: 0.3;
        }
        
        .card-glow:hover::after {
          opacity: 1;
        }
        
        .card-glow:hover {
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
          transform: translateY(-5px);
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-600 { animation-delay: 0.6s; opacity: 0; }
        
        .scroll-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .scroll-animate.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .particle {
          position: fixed;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          animation: float-particle linear infinite;
        }
      `}</style>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
        <div className="w-full px-8 relative">
          <div className="flex justify-end items-center py-4">
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1 bg-slate-900/50 backdrop-blur-sm rounded-full px-2 py-2 border border-blue-500/20">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize px-4 py-2 rounded-full transition-all relative ${
                    activeSection === section 
                      ? 'text-white bg-gradient-to-r from-blue-500/60 to-cyan-500/60 shadow-lg shadow-blue-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-purple-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 gradient-text animate-fade-in-up">
              Taheem Bhuiyan
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-100">
              Cybersecurity Specialist & Python Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
              Computer Science student at Queens College, CUNY, specializing in cybersecurity, threat detection, and secure software development
            </p>
            <div className="flex justify-center space-x-4 mb-12 animate-fade-in-up delay-300">
              <a href="https://github.com/tbhuiyan625" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-500/10 hover:bg-blue-500/20 rounded-full transition-all hover:scale-110 animate-float border border-blue-500/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/50 group relative overflow-hidden">
                <Github size={24} className="relative z-10" />
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
              </a>
              <a href="https://www.linkedin.com/in/taheembhuiyan/" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-500/10 hover:bg-blue-500/20 rounded-full transition-all hover:scale-110 animate-float border border-blue-500/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/50 group relative overflow-hidden" style={{animationDelay: '0.5s'}}>
                <Linkedin size={24} className="relative z-10" />
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
              </a>
              <a href="mailto:tbhuiyan625@gmail.com" className="p-3 bg-blue-500/10 hover:bg-blue-500/20 rounded-full transition-all hover:scale-110 animate-float border border-blue-500/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/50 group relative overflow-hidden" style={{animationDelay: '1s'}}>
                <Mail size={24} className="relative z-10" />
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
              </a>
            </div>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 animate-fade-in-up delay-400 relative overflow-hidden group"
              style={{ animation: 'glow-pulse 2s ease-in-out infinite' }}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
            </button>
          </div>
          <div className="animate-bounce mt-12">
            <button onClick={() => scrollToSection('about')} className="cursor-pointer bg-transparent border-none">
              <ChevronDown size={32} className="mx-auto text-blue-400" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className={`max-w-6xl mx-auto scroll-animate ${visibleSections.has('about') ? 'visible' : ''} relative z-10`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Computer Science student at Queens College, CUNY, with a passion for cybersecurity and secure software development. 
                My expertise lies in threat detection, incident response, and building security tools using Python.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I hold multiple cybersecurity certifications including Cisco Certified Support Technician, Google Cybersecurity Specialization, 
                and IT Specialist in Cybersecurity. I've gained hands-on experience through internships in technical support, 
                information systems, and digital operations.
              </p>
              <div className="card-glow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Certifications</h3>
                <ul className="space-y-2">
                  {certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-400 mr-2">✓</span>
                      <span className="text-gray-300">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              {skills.map((skillGroup, idx) => (
                <div 
                  key={idx} 
                  className="card-glow rounded-lg p-6"
                  style={{
                    transitionDelay: `${idx * 100}ms`
                  }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm hover:bg-blue-500/30 transition-all hover:scale-105">
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

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className={`max-w-6xl mx-auto w-full scroll-animate ${visibleSections.has('experience') ? 'visible' : ''} relative z-10`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div 
                key={idx} 
                className="card-glow rounded-xl p-6"
                style={{
                  transitionDelay: `${idx * 100}ms`
                }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-cyan-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className={`max-w-6xl mx-auto w-full scroll-animate ${visibleSections.has('projects') ? 'visible' : ''} relative z-10`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center gradient-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="card-glow rounded-xl p-6 hover:scale-105 transition-all cursor-pointer"
                style={{
                  transitionDelay: `${idx * 150}ms`,
                  animation: `slide-rotate 0.6s ease-out ${idx * 0.1}s backwards`
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                }}
              >
                {project.icon}
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm text-cyan-300 hover:bg-cyan-500/30 transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                  View on GitHub <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className={`max-w-2xl mx-auto text-center scroll-animate ${visibleSections.has('contact') ? 'visible' : ''} relative z-10`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm currently pursuing my Bachelor's in Computer Science and actively seeking opportunities in cybersecurity and software development. Let's connect!
          </p>
          <div className="space-y-4">
            <a 
              href="mailto:tbhuiyan625@gmail.com" 
              className="block px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                animation: 'glow-pulse 2s ease-in-out infinite'
              }}
            >
              <span className="relative z-10">tbhuiyan625@gmail.com</span>
            </a>
            <p className="text-gray-400">📱 (646) 906-6967</p>
            <div className="flex justify-center space-x-6 pt-6">
              <a href="https://github.com/tbhuiyan625" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-125">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/taheembhuiyan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-125">
                <Linkedin size={28} />
              </a>
              <a href="mailto:tbhuiyan625@gmail.com" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-125">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}