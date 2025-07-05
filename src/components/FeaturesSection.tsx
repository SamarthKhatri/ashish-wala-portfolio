
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, TrendingUp, Headphones } from 'lucide-react';

const FeaturesSection = () => {
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

  const features = [
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Stay informed with instant notifications about tax law changes, deadlines, and opportunities that affect your business."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level security protocols and full compliance with all regulatory requirements ensure your data is always protected."
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused",
      description: "Strategic recommendations and proactive planning to support your business expansion and long-term success."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Access to tax professionals whenever you need guidance, with guaranteed response times for urgent matters."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 mb-6">
            Platform Features
          </h2>
          <p className="text-xl text-slate-600/80 font-light max-w-3xl mx-auto leading-relaxed">
            Advanced features designed to streamline your tax processes 
            and enhance your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group text-center ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600/80 font-light leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
