import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { CalendarDays, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Future Blog Post Title 1",
    excerpt: "This is where you'll share your thoughts and insights on relevant topics in your field. Replace with actual content when you have it.",
    date: "Coming Soon",
    author: "Your Name",
    category: "Category 1",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Future Blog Post Title 2",
    excerpt: "This is where you'll share your thoughts and insights on relevant topics in your field. Replace with actual content when you have it.",
    date: "Coming Soon",
    author: "Your Name",
    category: "Category 2",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Future Blog Post Title 3",
    excerpt: "This is where you'll share your thoughts and insights on relevant topics in your field. Replace with actual content when you have it.",
    date: "Coming Soon",
    author: "Your Name",
    category: "Category 3",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Blog: React.FC = () => {
  return (
    <Section 
      id="blog" 
      title="Blog"
      subtitle="My thoughts and insights (coming soon)"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((post, index) => (
          <div key={post.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card>
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <div className="flex items-center mr-4">
                    <CalendarDays size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <span className="mr-1">Read More</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl text-gray-700">
          <p className="font-medium mb-2">Blog Coming Soon!</p>
          <p className="text-sm">
            This section is a placeholder for your future blog posts. 
            Here you will share your thoughts, insights, and updates related to your field, 
            passions, or projects.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Blog;