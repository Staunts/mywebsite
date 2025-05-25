import React, { useState } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of this project, what problem it solves, and your role in it.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Web", "Frontend"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of this project, what problem it solves, and your role in it.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Mobile", "App"],
    technologies: ["React Native", "Firebase"],
    liveLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of this project, what problem it solves, and your role in it.",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Backend", "API"],
    technologies: ["Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com"
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of this project, what problem it solves, and your role in it.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["Design", "UI/UX"],
    technologies: ["Figma", "Adobe XD"],
    liveLink: "https://example.com"
  }
];

// Extract unique categories
const allCategories = ["All", ...Array.from(new Set(projectsData.flatMap(project => project.category)))];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(activeCategory));

  return (
    <Section 
      id="projects" 
      title="My Projects"
      subtitle="Explore my recent work"
      className="bg-white"
    >
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${activeCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card>
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-4">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;