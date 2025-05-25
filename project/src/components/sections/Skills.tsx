import React from 'react';
import Section from '../ui/Section';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 1-100
  }[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Technical Skills",
    skills: [
      { name: "Skill 1", level: 90 },
      { name: "Skill 2", level: 85 },
      { name: "Skill 3", level: 75 },
      { name: "Skill 4", level: 80 },
    ]
  },
  {
    title: "Design Skills",
    skills: [
      { name: "Skill 5", level: 70 },
      { name: "Skill 6", level: 75 },
      { name: "Skill 7", level: 60 },
      { name: "Skill 8", level: 80 },
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Skill 9", level: 95 },
      { name: "Skill 10", level: 85 },
      { name: "Skill 11", level: 90 },
      { name: "Skill 12", level: 80 },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <Section 
      id="skills" 
      title="My Skills"
      subtitle="What I bring to the table"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow animate-fadeIn" 
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-xl font-bold mb-6 text-center pb-2 border-b border-gray-200">
              {category.title}
            </h3>
            
            <div className="space-y-6">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full animate-growWidth" 
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${(index * 0.2) + (i * 0.1)}s` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 animate-fadeInLeft">
          <h3 className="text-xl font-bold mb-6 text-center">Languages</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span>Language 1</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-5 h-5 ${star <= 5 ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Language 2</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>Language 3</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-5 h-5 ${star <= 3 ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 animate-fadeInRight">
          <h3 className="text-xl font-bold mb-6 text-center">Certifications</h3>
          <ul className="space-y-4">
            {["Certification 1", "Certification 2", "Certification 3"].map((cert, i) => (
              <li key={i} className="flex items-start">
                <svg 
                  className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">{cert}</p>
                  <p className="text-sm text-gray-600">Issuing organization • Year</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Skills;