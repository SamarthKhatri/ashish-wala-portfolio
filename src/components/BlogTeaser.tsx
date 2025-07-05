
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from 'lucide-react';

const BlogTeaser = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      title: "2024 Tax Law Changes: What Business Owners Need to Know",
      excerpt: "A comprehensive guide to the latest tax law updates and how they impact your business strategy.",
      date: "January 15, 2024",
      readTime: "8 min read"
    },
    {
      title: "Maximizing R&D Tax Credits for Tech Companies",
      excerpt: "Learn how technology businesses can leverage R&D tax credits to reduce liability and fund innovation.",
      date: "January 10, 2024",
      readTime: "6 min read"
    },
    {
      title: "Year-End Tax Planning Strategies for 2024",
      excerpt: "Essential tax planning moves to make before December 31st to optimize your business tax position.",
      date: "January 5, 2024",
      readTime: "10 min read"
    }
  ];

  return (
    <section 
      id="resources" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-white via-blue-50/20 to-slate-50"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 mb-6">
            Tax Insights & Resources
          </h2>
          <p className="text-xl text-slate-600/80 font-light max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest tax strategies, regulatory updates, 
            and business insights from our expert team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className={`bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center text-sm text-slate-600/80 font-light mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date} • {post.readTime}
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-slate-600/80 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 font-light p-0 h-auto"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-3 font-light tracking-wide"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
