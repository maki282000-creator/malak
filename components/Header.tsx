import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { locale, setLocale, translations } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-serif text-gray-900">
          Noha Yahya
        </a>
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-8">
            {translations.header.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
          <button onClick={toggleLanguage} className="hidden md:block ms-8 text-gray-700 hover:text-gray-900 font-semibold">
            {translations.header.language}
          </button>
          <div className="md:hidden ms-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-sm`}>
        <nav className="flex flex-col items-center space-y-4 py-6">
          {translations.header.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-lg text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <button onClick={() => { toggleLanguage(); setIsOpen(false); }} className="mt-4 text-lg text-gray-700 hover:text-gray-900 font-semibold">
            {translations.header.language}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;