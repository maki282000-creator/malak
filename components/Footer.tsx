import React from 'react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { translations } = useLanguage();
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-serif text-white mb-4">Noha Yahya</h3>
        <div className="flex justify-center space-x-6 rtl:space-x-reverse mb-8">
          <a href="#" className="hover:text-white transition-colors duration-300">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <TwitterIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Noha Yahya. {translations.footer.rights}
        </p>
         <p className="text-xs mt-2 text-gray-500">
          {translations.footer.credits}
        </p>
      </div>
    </footer>
  );
};

export default Footer;