import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface NavLinkProps {
  href: string;
  text: string;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, onClick }) => {
  return (
    <a 
      href={href} 
      className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 font-medium"
      onClick={(e) => {
        e.preventDefault();
        onClick();
        document.querySelector(href)?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }}
    >
      {text}
    </a>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-gray-800">
          <span className="text-blue-600">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink href="#about" text="About" onClick={closeMenu} />
          <NavLink href="#experience" text="Experience" onClick={closeMenu} />
          <NavLink href="#projects" text="Projects" onClick={closeMenu} />
          <NavLink href="#skills" text="Skills" onClick={closeMenu} />
          <NavLink href="#blog" text="Blog" onClick={closeMenu} />
          <NavLink href="#contact" text="Contact" onClick={closeMenu} />
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-blue-600 transition-colors">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <NavLink href="#about" text="About" onClick={closeMenu} />
          <NavLink href="#experience" text="Experience" onClick={closeMenu} />
          <NavLink href="#projects" text="Projects" onClick={closeMenu} />
          <NavLink href="#skills" text="Skills" onClick={closeMenu} />
          <NavLink href="#blog" text="Blog" onClick={closeMenu} />
          <NavLink href="#contact" text="Contact" onClick={closeMenu} />
          
          <div className="flex items-center space-x-4 pt-2 border-t border-gray-200">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;