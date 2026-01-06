import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function ContactSection({ isVisible }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/tbhuiyan625@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: <Github size={28} />,
      href: 'https://github.com/tbhuiyan625',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={28} />,
      href: 'https://www.linkedin.com/in/taheembhuiyan/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={28} />,
      href: 'mailto:tbhuiyan625@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className={`max-w-4xl mx-auto w-full scroll-reveal ${isVisible ? 'revealed' : ''} relative z-10`}>
        <SectionHeading
          subtitle="Let's build something amazing together"
        >
          Get In Touch
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Let's Connect
              </h3>
              <p className="text-white/70 mb-6" style={{lineHeight: '1.7', maxWidth: '60ch'}}>
                I'm currently pursuing my Bachelor's in Computer Science and actively seeking opportunities in cybersecurity and software development.
              </p>
            </div>

            {/* Direct Contact */}
            <div className="glass-card p-6 space-y-4">
              <a
                href="mailto:tbhuiyan625@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="text-white group-hover:scale-110 transition-transform" />
                <span>tbhuiyan625@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <span className="text-white">📱</span>
                <span>(646) 906-6967</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white/90">
                Find me on
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-button p-3 hover-lift hover:text-white transition-all`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="glass-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl text-white/90 placeholder-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 focus:bg-black/50 transition-all duration-300 hover:border-white/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl text-white/90 placeholder-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 focus:bg-black/50 transition-all duration-300 hover:border-white/20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl text-white/90 placeholder-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 focus:bg-black/50 transition-all duration-300 hover:border-white/20 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  } animate-fade-in`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-white text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-white/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={18} className={`transition-transform ${!isSubmitting ? 'group-hover:translate-x-1' : ''}`} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
