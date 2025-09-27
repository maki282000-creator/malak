import React from 'react';
import SectionTitle from './SectionTitle';
import { Course } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const courseTranslations = {
  en: [
    { id: 1, title: 'Intro to Fashion Sketching', description: 'Master the fundamentals of fashion illustration and bring your design ideas to life on paper.' },
    { id: 2, title: 'Advanced Draping Techniques', description: 'Learn the art of draping fabric directly on a mannequin to create stunning, organic designs.' },
    { id: 3, title: 'Digital Fashion Design with Procreate', description: 'Translate your creative vision into digital masterpieces using the latest tools and techniques.' },
  ],
  ar: [
    { id: 1, title: 'مقدمة في رسم الأزياء', description: 'أتقني أساسيات الرسم التوضيحي للأزياء وحولي أفكار تصميمك إلى حقيقة على الورق.' },
    { id: 2, title: 'تقنيات التشكيل المتقدمة على المانيكان', description: 'تعلمي فن تشكيل القماش مباشرة على المانيكان لإنشاء تصميمات عضوية مذهلة.' },
    { id: 3, title: 'تصميم الأزياء الرقمي باستخدام Procreate', description: 'ترجمي رؤيتك الإبداعية إلى روائع رقمية باستخدام أحدث الأدوات والتقنيات.' },
  ]
};

const baseCoursesData = [
  { id: 1, price: 199, imageUrl: 'https://picsum.photos/seed/course1/500/350' },
  { id: 2, price: 349, imageUrl: 'https://picsum.photos/seed/course2/500/350' },
  { id: 3, price: 299, imageUrl: 'https://picsum.photos/seed/course3/500/350' },
];


const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const { translations } = useLanguage();
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
      <img src={course.imageUrl} alt={course.title} className="w-full h-56 object-cover" />
      <div className="p-6 text-left rtl:text-right">
        <h3 className="text-2xl font-serif text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">${course.price}</span>
          <button className="bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-800 hover:bg-transparent hover:text-gray-800 transition-all duration-300">
            {translations.courses.enroll}
          </button>
        </div>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  const { locale, translations } = useLanguage();

  const courses = baseCoursesData.map(course => {
    const translation = courseTranslations[locale].find(t => t.id === course.id)!;
    return { ...course, ...translation };
  });

  return (
    <section id="courses" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle={translations.courses.subtitle} title={translations.courses.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;