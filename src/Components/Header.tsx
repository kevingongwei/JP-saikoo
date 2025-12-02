import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg viewBox="0 0 240 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon Part: Stylized S with sun rays */}
    <path d="M45 10 L45 35 L15 35 L15 50 L55 50 L60 40 L60 10 Z" fill="#F59E0B" />
    <path d="M15 10 L35 10 L35 25 L15 25 Z" fill="#F59E0B" />
    {/* Sun rays */}
    <path d="M5 10 L12 10" stroke="#F59E0B" strokeWidth="2" />
    <path d="M5 16 L12 14" stroke="#F59E0B" strokeWidth="2" />
    <path d="M8 22 L14 18" stroke="#F59E0B" strokeWidth="2" />

    {/* Text Part: Saikoo */}
    <path d="M75 50 L85 20 L105 20 L105 28 L95 28 L90 42 L105 42 L102 50 Z" fill="#0056b3" />
    <path d="M110 50 L113 40 L125 40 L122 50 Z M116 35 L128 35 L131 25 L119 25 Z" fill="#0056b3" />
    <path d="M130 50 L138 25 L148 25 L140 50 Z" fill="#0056b3" />
    <path d="M150 50 L153 20 L163 20 L161 35 L170 20 L182 20 L170 36 L180 50 L168 50 L160 38 L158 50 Z" fill="#0056b3" />
    <path d="M185 38 A 10 10 0 1 1 205 38 A 10 10 0 1 1 185 38 M190 38 A 5 5 0 1 0 200 38 A 5 5 0 1 0 190 38" fill="#0056b3" />
    <path d="M210 38 A 10 10 0 1 1 230 38 A 10 10 0 1 1 210 38 M215 38 A 5 5 0 1 0 225 38 A 5 5 0 1 0 215 38" fill="#0056b3" />
  </svg>
);

const Logo2: React.FC = () => {
  return (
    <div>
      <img src="images/logo192.png" alt="log" style={{height:'40px'}} />
    </div>
  );
};


export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ホーム', href: '#home' },
    { name: '会社概要', href: '#about' },
    { name: '事業内容', href: '#services' },
    { name: '弊社の強み', href: '#strengths' },
    { name: '代表紹介', href: '#ceo' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-white/50 backdrop-blur-sm py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Representation */}
        <a href="#home" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, '#home')}>
          {/* <Logo className="h-10 w-auto" /> */}
          <Logo2></Logo2>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-slate-700 font-medium tracking-wide hover:text-brand-blue transition-colors text-sm"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-slate-700 font-medium hover:text-brand-blue"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};