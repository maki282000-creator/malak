
import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, className }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2">{title}</h2>
      <div className="w-20 h-1 bg-gray-800 mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;
