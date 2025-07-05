
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, FileText, TrendingUp, Shield, Building, Users } from 'lucide-react';

const ServicesOverview = () => {
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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Calculator,
      title: "Tax Planning & Strategy",
      description: "Comprehensive tax planning to minimize liability and maximize opportunities for your business growth.",
      features: ["Strategic Tax Planning", "Quarterly Reviews", "Tax Optimization"]
    },
    {
      icon: FileText,
      title: "Tax Compliance & Filing",
      description: "Accurate and timely tax preparation and filing for businesses of all sizes and complexities.",
      features: ["Corporate Tax Returns", "Multi-State Filing", "Amendment Services"]
    },
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Strategic business guidance to help you make informed decisions that impact your tax position.",
      features: ["Financial Analysis", "Growth Planning", "Risk Assessment"]
    },
    {
      icon: Shield,
      title: "Audit Defense",
      description: "Professional representation and support during tax audits and regulatory examinations.",
      features: ["IRS Representation", "Audit Preparation", "Resolution Services"]
    },
    {
      icon: Building,
      title: "Entity Structuring",
      description: "Optimize your business structure for tax efficiency and operational effectiveness.",
      features: ["Entity Selection", "Restructuring", "Succession Planning"]
    },
    {
      icon: Users,
      title: "Payroll & HR Compliance",
      description: "Complete payroll processing and HR compliance to keep your business running smoothly.",
      features: ["Payroll Processing", "Benefits Administration", "Compliance Monitoring"]
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-700 font-light max-w-3xl mx-auto leading-relaxed">
            Comprehensive tax and business advisory services designed to support 
            your success at every stage of growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 font-light tracking-wide"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
