import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id="home" className="h-screen w-full flex items-center justify-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-5xl md:text-8xl font-serif tracking-tight">
          {translations.hero.title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light tracking-wider uppercase">
          {translations.hero.subtitle}
        </p>
        <a 
          href="#portfolio"
          className="mt-8 inline-block bg-white text-gray-900 font-semibold py-3 px-8 border border-white hover:bg-transparent hover:text-white transition-all duration-300 ease-in-out"
        >
          {translations.hero.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;