import React from 'react';
import Section from '../ui/Section';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Senior Position",
    company: "Current Company",
    location: "City, Country",
    period: "Jan 2021 - Present",
    description: [
      "Key responsibility or achievement with measurable results",
      "Key responsibility or achievement with measurable results",
      "Key responsibility or achievement with measurable results"
    ],
    current: true
  },
  {
    title: "Mid-Level Position",
    company: "Previous Company",
    location: "City, Country",
    period: "Jan 2018 - Dec 2020",
    description: [
      "Key responsibility or achievement with measurable results",
      "Key responsibility or achievement with measurable results",
      "Key responsibility or achievement with measurable results"
    ]
  },
  {
    title: "Junior Position",
    company: "First Company",
    location: "City, Country",
    period: "Jan 2016 - Dec 2017",
    description: [
      "Key responsibility or achievement with measurable results",
      "Key responsibility or achievement with measurable results",
      "Key responsibility or achievement with measurable results"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <Section 
      id="experience" 
      title="Work Experience"
      subtitle="My professional journey"
      className="bg-gray-50"
    >
      <div className="max-w-3xl mx-auto">
        {experienceData.map((experience, index) => (
          <div 
            key={index} 
            className={`relative pl-8 pb-12 ${
              index === experienceData.length - 1 ? 'pb-0' : ''
            }`}
          >
            {/* Timeline line */}
            {index !== experienceData.length - 1 && (
              <div className="absolute left-[7px] top-[28px] bottom-0 w-0.5 bg-gray-300"></div>
            )}
            
            {/* Timeline dot */}
            <div className={`absolute left-0 top-[7px] w-[15px] h-[15px] rounded-full border-2 ${
              experience.current 
                ? 'bg-blue-600 border-blue-600' 
                : 'bg-white border-gray-400'
            }`}></div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                  <p className="text-blue-600 font-medium">{experience.company}</p>
                </div>
                
                <div className="flex flex-col mt-2 md:mt-0 md:items-end">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="mt-4 space-y-2">
                {experience.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;