
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

  const handleRedirectToGovSite = () => {
    window.open('https://www.incometax.gov.in/', '_blank');
  };

  const blogPosts = [
    {
      title: "2024 GST Updates: What Small Businesses Need to Know",
      excerpt: "Navigate the latest GST changes and ensure your business stays compliant with new regulations affecting Indian businesses.",
      date: "Dec 15, 2024",
      category: "GST Compliance",
      readTime: "5 min read"
    },
    {
      title: "Income Tax Planning Strategies for FY 2024-25",
      excerpt: "Maximize your tax savings with proven strategies tailored for Indian taxpayers and businesses under current tax laws.",
      date: "Dec 10, 2024",
      category: "Tax Planning",
      readTime: "7 min read"
    },
    {
      title: "Digital Compliance: Managing TDS in the Modern Era",
      excerpt: "Learn how to streamline your TDS processes with digital tools and stay ahead of compliance requirements.",
      date: "Dec 5, 2024",
      category: "Digital Tax",
      readTime: "6 min read"
    },
    {
      title: "Understanding FEMA Regulations for Indian Businesses",
      excerpt: "A comprehensive guide to Foreign Exchange Management Act compliance for businesses dealing with international transactions.",
      date: "Nov 28, 2024",
      category: "FEMA Compliance",
      readTime: "8 min read"
    }
  ];

  return (
    <section 
      id="resources"
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Badge className="bg-blue-100 text-blue-700 px-4 py-2 mb-4">
            Tax Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 mb-6">
            Latest Tax Insights
          </h2>
          <p className="text-xl text-slate-700 font-light max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest tax updates, strategies, and compliance 
            requirements that impact your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className={`bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group cursor-pointer ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={handleRedirectToGovSite}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs font-light text-slate-600 border-slate-300">
                    {post.category}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-700 font-light text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-slate-600 font-light mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <button
                  onClick={handleRedirectToGovSite}
                  className="text-blue-600 hover:text-blue-700 font-light text-sm flex items-center group-hover:translate-x-1 transition-transform"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleRedirectToGovSite}
            variant="outline" 
            className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 font-light tracking-wide"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
