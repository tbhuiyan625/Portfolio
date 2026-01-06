import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
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

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <>
      {/* Desktop & Tablet Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0B0B0D]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative h-20">
          {/* Center Navigation - Desktop (absolute centered) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                  ${
                    activeSection === item.id 
                      ? 'text-white bg-white/5' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }
                `}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-white rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Right Side - CTA + Menu (absolute right) */}
          <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-lg border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 group backdrop-blur-sm"
              aria-label="Get in touch"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              className="md:hidden p-2.5 hover:bg-white/5 rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide-Down Panel */}
      <div 
        className={`
          fixed top-20 left-0 right-0 z-40 md:hidden
          bg-black/95 backdrop-blur-2xl border-b border-white/10
          transition-all duration-500 ease-out
          ${isMenuOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-full opacity-0 pointer-events-none'
          }
        `}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-8">
          {/* Mobile Nav Items */}
          <div className="space-y-1 mb-8">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full text-left px-6 py-4 rounded-xl transition-all duration-300
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                  ${
                    activeSection === item.id 
                      ? 'bg-white/10 text-white border border-white/20' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
                style={{ 
                  transitionDelay: `${idx * 50}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Mobile CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black text-base font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 group"
            style={{ 
              transitionDelay: '150ms',
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
            }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
