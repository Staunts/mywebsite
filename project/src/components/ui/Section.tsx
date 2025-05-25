import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '' 
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-20 ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;