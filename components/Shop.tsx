import React from 'react';
import SectionTitle from './SectionTitle';
import { Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const productTranslations = {
  en: [
    { id: 1, name: 'The Midnight Bloom Gown', category: 'Evening Wear' },
    { id: 2, name: 'Ivory Silk Blouse', category: 'Tops' },
    { id: 3, name: 'The Urban Explorer Trench', category: 'Outerwear' },
    { id: 4, name: 'Azure Cocktail Dress', category: 'Dresses' },
  ],
  ar: [
    { id: 1, name: 'فستان زهرة منتصف الليل', category: 'ملابس سهرة' },
    { id: 2, name: 'بلوزة حرير عاجية', category: 'بلوزات' },
    { id: 3, name: 'معطف المستكشف الحضري', category: 'ملابس خارجية' },
    { id: 4, name: 'فستان كوكتيل أزرق', category: 'فساتين' },
  ]
};

const baseProductsData = [
  { id: 1, price: 1250, imageUrl: 'https://picsum.photos/seed/product1/500/700' },
  { id: 2, price: 450, imageUrl: 'https://picsum.photos/seed/product2/500/700' },
  { id: 3, price: 890, imageUrl: 'https://picsum.photos/seed/product3/500/700' },
  { id: 4, price: 720, imageUrl: 'https://picsum.photos/seed/product4/500/700' },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { translations } = useLanguage();
  return (
    <div className="bg-white text-center group">
      <div className="overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"/>
      </div>
      <div className="py-4">
        <p className="text-xs text-gray-500 uppercase">{product.category}</p>
        <h3 className="text-xl font-serif mt-1 text-gray-800">{product.name}</h3>
        <p className="font-semibold text-gray-700 mt-2">${product.price.toFixed(2)}</p>
        <button className="mt-4 bg-transparent text-gray-800 font-semibold py-2 px-6 border border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300">
          {translations.shop.addToCart}
        </button>
      </div>
    </div>
  );
};

const Shop: React.FC = () => {
  const { locale, translations } = useLanguage();
  
  const products = baseProductsData.map(product => {
    const translation = productTranslations[locale].find(t => t.id === product.id)!;
    return { ...product, ...translation };
  });

  return (
    <section id="shop" className="py-20 md:py-32 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle={translations.shop.subtitle} title={translations.shop.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;