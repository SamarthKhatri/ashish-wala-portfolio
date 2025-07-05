
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Users, Award } from 'lucide-react';

const WhyChooseUs = () => {
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
      icon: Shield,
      title: "Proven Expertise",
      description: "Over 15 years of combined experience in tax planning and compliance across diverse industries."
    },
    {
      icon: TrendingUp,
      title: "Strategic Growth",
      description: "We don't just handle your taxes—we strategically position your business for sustained growth and profitability."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Your dedicated tax specialist works exclusively with your business, understanding your unique needs and challenges."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning tax solutions trusted by over 500+ businesses, from startups to enterprise corporations."
    }
  ];

  return (
    <section 
      id="why-choose-us" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 mb-6">
            Why Choose Taxwise Solution?
          </h2>
          <p className="text-xl text-slate-600/80 font-light max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with personalized service to deliver 
            tax solutions that drive real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
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

export default WhyChooseUs;
