
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
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

  const faqs = [
    {
      question: "How quickly can you help reduce our tax liability?",
      answer: "Most clients see immediate opportunities for tax savings within the first consultation. Our strategic planning typically results in 15-30% reduction in tax liability in the first year, with ongoing optimization providing sustained benefits."
    },
    {
      question: "Do you work with businesses in multiple states?",
      answer: "Yes, we specialize in multi-state tax compliance and have expertise across all 50 states. Our team understands the complexities of interstate business operations and can help you navigate varying state tax requirements efficiently."
    },
    {
      question: "What happens if we get audited?",
      answer: "All our Professional and Enterprise plans include audit defense protection. We'll represent you throughout the entire process, from initial notice to resolution, at no additional cost. Our audit success rate is over 95%."
    },
    {
      question: "How do you ensure data security?",
      answer: "We use bank-level encryption, secure cloud infrastructure, and maintain strict compliance with all data protection regulations. Our systems are regularly audited and we carry comprehensive cyber liability insurance."
    },
    {
      question: "Can you help with business entity restructuring?",
      answer: "Absolutely. Our team includes specialists in entity structuring and can help you optimize your business structure for tax efficiency, operational effectiveness, and future growth. We'll analyze your current situation and recommend the best path forward."
    },
    {
      question: "What's included in the free consultation?",
      answer: "During your free consultation, we'll review your current tax situation, identify immediate opportunities for savings, discuss your business goals, and provide a customized recommendation for ongoing tax strategy and compliance support."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20"
    >
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600/80 font-light max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our tax services and how we can help your business.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className={`bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-medium tracking-tight text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600/80 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
