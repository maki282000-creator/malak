import React from 'react';
import SectionTitle from './SectionTitle';
import { useLanguage } from '../contexts/LanguageContext';

const portfolioImages = [
  { id: 1, src: 'https://picsum.photos/seed/fashion1/600/800', alt: 'Elegant evening gown', alt_ar: 'فستان سهرة أنيق' },
  { id: 2, src: 'https://picsum.photos/seed/fashion2/600/800', alt: 'Modern streetwear design', alt_ar: 'تصميم أزياء شوارع عصري' },
  { id: 3, src: 'https://picsum.photos/seed/fashion3/600/800', alt: 'Chic business attire', alt_ar: 'ملابس عمل أنيقة' },
  { id: 4, src: 'https://picsum.photos/seed/fashion4/600/800', alt: 'Bridal couture dress', alt_ar: 'فستان زفاف راقي' },
  { id: 5, src: 'https://picsum.photos/seed/fashion5/600/800', alt: 'Summer collection piece', alt_ar: 'قطعة من مجموعة الصيف' },
  { id: 6, src: 'https://picsum.photos/seed/fashion6/600/800', alt: 'Avant-garde design', alt_ar: 'تصميم طليعي' },
];

const Portfolio: React.FC = () => {
  const { locale, translations } = useLanguage();

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle={translations.portfolio.subtitle} title={translations.portfolio.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {portfolioImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden shadow-lg cursor-pointer">
              <img 
                src={image.src} 
                alt={locale === 'ar' ? image.alt_ar : image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6 rtl:justify-end">
                <h3 className="text-white text-2xl font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{locale === 'ar' ? image.alt_ar : image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;