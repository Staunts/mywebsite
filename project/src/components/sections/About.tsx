import React from 'react';
import Section from '../ui/Section';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section 
      id="about" 
      title="About Me"
      subtitle="Get to know me better"
      className="bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative animate-fadeInLeft">
          <div className="w-full h-[400px] bg-gray-200 rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <p className="text-center">Your Image Here</p>
              <p className="text-sm">(Replace with a professional photo)</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-lg -z-10"></div>
        </div>
        
        <div className="space-y-6 animate-fadeInRight">
          <h3 className="text-2xl font-bold">Hello, I'm <span className="text-blue-600">Your Name</span></h3>
          
          <p className="text-gray-700">
            I am a [Your Profession] with [X years] of experience specializing in [Your Specialization]. 
            My journey in this field began when [brief story about how you started].
          </p>
          
          <p className="text-gray-700">
            Throughout my career, I've developed a deep understanding of [Your Industry/Field] and have 
            worked with [types of clients/companies] to deliver [types of solutions/projects].
          </p>
          
          <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
            "Your favorite quote that represents your philosophy or approach to your work."
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">What Drives Me</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Briefcase className="text-blue-600" size={20} />
                </div>
                <div>
                  <h5 className="font-medium">Professional</h5>
                  <p className="text-sm text-gray-600">What drives you professionally</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <GraduationCap className="text-blue-600" size={20} />
                </div>
                <div>
                  <h5 className="font-medium">Learning</h5>
                  <p className="text-sm text-gray-600">Your approach to continuous learning</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Heart className="text-blue-600" size={20} />
                </div>
                <div>
                  <h5 className="font-medium">Passion</h5>
                  <p className="text-sm text-gray-600">What you're passionate about</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h4 className="text-2xl font-semibold text-center mb-8">Personal Interests</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {['Interest 1', 'Interest 2', 'Interest 3', 'Interest 4'].map((interest, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors"
            >
              <h5 className="font-medium text-lg mb-2">{interest}</h5>
              <p className="text-gray-600 text-sm">
                Brief description of why you enjoy this interest and how it influences you.
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;