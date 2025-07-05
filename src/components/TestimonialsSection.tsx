
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Taxwise Solution transformed our approach to tax planning. Their strategic guidance helped us save over $150K in the first year while ensuring complete compliance.",
      result: "Saved $150K+ in first year",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "GreenScale Manufacturing",
      role: "CFO",
      content: "The team's expertise in multi-state tax compliance is unmatched. They streamlined our processes and reduced our compliance workload by 60%.",
      result: "60% reduction in compliance workload",
      rating: 5
    },
    {
      name: "Emily Watson",
      company: "Watson & Associates",
      role: "Managing Partner",
      content: "Professional, knowledgeable, and always responsive. Their audit defense services saved us significant time and stress during our IRS examination.",
      result: "Successful audit defense resolution",
      rating: 5
    },
    {
      name: "David Kim",
      company: "InnovateLab",
      role: "Founder",
      content: "From startup to scale-up, Taxwise Solution has been our trusted partner. Their entity restructuring advice optimized our tax position for growth.",
      result: "Optimized tax structure for 300% growth",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50/20 to-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-600/80 font-light max-w-3xl mx-auto leading-relaxed">
            Discover how businesses like yours have achieved remarkable results 
            with our tax and advisory services.
          </p>
        </div>

        <div className="relative">
          <Card className={`bg-white/70 backdrop-blur-sm border border-white/50 shadow-xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CardContent className="p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="mb-6">
                  <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Result: {testimonials[currentIndex].result}
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-slate-900 text-lg tracking-tight">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-slate-600/80 font-light">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-blue-200'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
