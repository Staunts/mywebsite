import React from 'react';
import { ArrowDown } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium animate-fadeIn">
              Welcome to my portfolio
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeInUp">
              Hi, I'm <span className="text-blue-600">Your Name</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 animate-fadeInUp animation-delay-200">
              I'm a passionate [Your Profession] with expertise in [Your Key Skills]. 
              I create [what you create] that [the impact of your work].
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeInUp animation-delay-300">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative w-full h-[400px] rounded-lg bg-gradient-to-br from-blue-200 to-teal-100 shadow-xl animate-fadeIn animation-delay-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <p className="text-center">Your Profile Image</p>
                <p className="text-sm">(Replace with your photo)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-gray-600 mb-2">Scroll Down</span>
        <ArrowDown className="text-blue-600" />
      </button>
    </section>
  );
};

export default Hero;