import React, { useState, useEffect } from 'react';
import { EXPERT_DATA } from '../constants';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Tratamentos', href: '#tratamentos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      // Offset calculation for fixed header
      const headerOffset = 100; // Matches scroll-padding-top roughly
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <div className={`font-bold text-xl md:text-2xl tracking-tight transition-colors ${isScrolled ? 'text-stone-800' : 'text-stone-800 md:text-white'}`}>
            {EXPERT_DATA.name}
            <span className={`block text-xs font-normal tracking-wider uppercase ${isScrolled ? 'text-emerald-600' : 'text-emerald-600 md:text-emerald-300'}`}>Odontologia & Estética</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScrollToSection(e, link.href)}
              className={`text-sm font-medium hover:text-emerald-500 transition-colors cursor-pointer ${isScrolled ? 'text-stone-600' : 'text-stone-200'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-stone-800' : 'text-stone-800'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-100 shadow-xl p-4 flex flex-col space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-stone-800 font-medium py-2 px-4 rounded hover:bg-stone-50 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};