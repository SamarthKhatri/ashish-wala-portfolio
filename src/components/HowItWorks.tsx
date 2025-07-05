
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Settings, Zap } from 'lucide-react';

const HowItWorks = () => {
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

  const steps = [
    {
      icon: Users,
      title: "Connect Your Business",
      description: "Schedule a consultation to discuss your business needs, tax challenges, and growth objectives with our expert team.",
      image: "/lovable-uploads/d6380acc-fa8a-4914-a615-be1ebbf3aeed.png"
    },
    {
      icon: Settings,
      title: "Set Up Your Tax Plan",
      description: "We analyze your financial situation and create a customized tax strategy designed specifically for your business model and goals.",
      image: "/lovable-uploads/a5e41774-0cfd-4bd6-9351-1e44e84d333c.png"
    },
    {
      icon: Zap,
      title: "Automate Compliance",
      description: "Implement streamlined processes and ongoing monitoring to ensure continuous compliance while maximizing tax efficiency.",
      image: "/lovable-uploads/9439033c-2127-4b12-9380-1677ae2af91c.png"
    }
  ];

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-white via-indigo-50/20 to-blue-50/30"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600/80 font-light max-w-3xl mx-auto leading-relaxed">
            Our streamlined process ensures you get expert tax guidance 
            and compliance support from day one.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={`bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-xl mb-6 relative overflow-hidden"
                    style={{ backgroundImage: `url('${step.image}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                        <step.icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium text-sm mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-medium tracking-tight text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600/80 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
