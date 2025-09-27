import React from 'react';
import SectionTitle from './SectionTitle';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle={translations.about.subtitle} title={translations.about.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-80 h-96 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/noha/400/500" 
                alt="Noha Yahya"
                className="w-full h-full object-cover"
              />
              <div className="absolute -top-4 -left-4 rtl:-right-4 rtl:-left-auto w-full h-full border-4 border-gray-800 -z-10"></div>
            </div>
          </div>
          <div className="text-left rtl:text-right">
            <h3 className="text-3xl font-serif text-gray-800 mb-4">{translations.about.heading}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {translations.about.p1}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {translations.about.p2}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {translations.about.p3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;