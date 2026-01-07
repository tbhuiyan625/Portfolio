import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import SecurityDashboardCard from './SecurityDashboardCard';

export default function Hero({ scrollToSection }) {
  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      href: 'https://github.com/tbhuiyan625', 
      label: 'GitHub'
    },
    { 
      icon: <Linkedin size={20} />, 
      href: 'https://www.linkedin.com/in/taheembhuiyan/', 
      label: 'LinkedIn'
    },
    { 
      icon: <Mail size={20} />, 
      href: 'mailto:tbhuiyan625@gmail.com', 
      label: 'Email'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center px-6 lg:px-12 relative pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        {/* Split Layout: Avatar Left (Desktop), Content Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column (Desktop) / First on Mobile - Avatar */}
          <div className="flex justify-center lg:justify-start animate-fade-in-up order-1">
            <SecurityDashboardCard size="hero" />
          </div>

          {/* Right Column (Desktop) / Second on Mobile - Content */}
          <div className="space-y-8 animate-fade-in-up delay-200 order-2">
            {/* Overline */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-white/30"></div>
              <span className="text-sm font-medium text-white/60 tracking-widest uppercase">Portfolio</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-display-lg sm:text-display-xl font-bold text-white leading-tight tracking-tight lg:whitespace-nowrap">
                Taheem Bhuiyan
              </h1>
              
              {/* Role */}
              <p className="text-subtitle-sm sm:text-subtitle font-semibold text-white/80 tracking-wide">
                Cybersecurity Engineer
              </p>
            </div>

            {/* Description */}
            <p className="text-body-lg text-white/70 max-w-[55ch] leading-relaxed">
              Building secure systems and innovative solutions with a focus on threat detection and secure software development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Let's Connect
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <span className="inline-block group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
