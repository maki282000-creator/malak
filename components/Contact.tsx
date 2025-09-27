import React from 'react';
import SectionTitle from './SectionTitle';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle={translations.contact.subtitle} title={translations.contact.title} />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left rtl:text-right">
          <div>
            <h3 className="text-2xl font-serif mb-4">{translations.contact.form.heading}</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label htmlFor="name" className="sr-only">{translations.contact.form.name}</label>
                <input type="text" id="name" placeholder={translations.contact.form.name} className="w-full p-3 bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 focus:bg-white transition" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">{translations.contact.form.email}</label>
                <input type="email" id="email" placeholder={translations.contact.form.email} className="w-full p-3 bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 focus:bg-white transition" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="sr-only">{translations.contact.form.message}</label>
                <textarea id="message" rows={5} placeholder={translations.contact.form.message} className="w-full p-3 bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 focus:bg-white transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-800 text-white font-semibold py-3 px-6 border border-gray-800 hover:bg-gray-700 transition-all duration-300">
                {translations.contact.form.send}
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">{translations.contact.social.heading}</h3>
            <p className="text-gray-600 mb-6">{translations.contact.social.p1}</p>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <InstagramIcon className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <FacebookIcon className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <TwitterIcon className="w-8 h-8" />
              </a>
            </div>
             <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800">{translations.contact.social.email}</h4>
                <a href="mailto:contact@nohayahya.com" className="text-gray-600 hover:text-gray-900">contact@nohayahya.com</a>
            </div>
            <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800">{translations.contact.social.studio}</h4>
                <p className="text-gray-600">123 Fashion Ave, Design District, Dubai, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;