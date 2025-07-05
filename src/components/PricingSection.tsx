
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from 'lucide-react';

const PricingSection = () => {
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

  const plans = [
    {
      name: "Professional",
      price: "₹15,000",
      period: "/month",
      description: "Comprehensive tax solutions for growing businesses with complex needs in India.",
      features: [
        "GST filing and compliance",
        "Income tax planning & filing",
        "TDS/TCS management",
        "Quarterly tax reviews",
        "Multi-state registration support",
        "Dedicated tax specialist",
        "ROC compliance",
        "Tax optimization strategies"
      ],
      buttonText: "Start Professional",
      recommended: true
    },
    {
      name: "Enterprise",
      price: "₹35,000",
      period: "/month",
      description: "Advanced solutions for large organizations with complex Indian tax requirements.",
      features: [
        "Full-service tax management",
        "Custom entity structuring",
        "International taxation (DTAA)",
        "Transfer pricing compliance",
        "Dedicated account team",
        "24/7 priority support",
        "Advanced reporting & analytics",
        "FEMA compliance",
        "Executive tax advisory",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      recommended: false
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-blue-50/20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 mb-6">
            Pricing Plans
          </h2>
          <p className="text-xl text-slate-700 font-light max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. All plans include 
            our commitment to excellence and client satisfaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                plan.recommended ? 'ring-2 ring-blue-500 ring-opacity-50 scale-105' : ''
              } ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.recommended && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-5xl font-light text-slate-900">{plan.price}</span>
                    <span className="text-slate-700 font-light">{plan.period}</span>
                  </div>
                  <p className="text-slate-700 font-light leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700 font-light">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToContact}
                  className={`w-full py-6 text-lg font-light tracking-wide transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-white/80 border border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-700 font-light">
            All plans include a 30-day money-back guarantee. Need a custom solution? 
            <button 
              onClick={scrollToContact}
              className="text-blue-600 hover:text-blue-700 font-medium ml-1"
            >
              Contact us
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
