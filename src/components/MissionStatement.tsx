
import React, { useEffect, useRef, useState } from 'react';
import { Card } from "@/components/ui/card";

const MissionStatement = () => {
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

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-blue-50/30 via-indigo-50/30 to-white"
    >
      <div className="container mx-auto max-w-6xl">
        <Card className={`bg-white/70 backdrop-blur-sm border border-white/50 shadow-xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 mb-8">
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic">
                "To empower businesses with strategic tax solutions that drive growth, 
                ensure compliance, and create lasting value."
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
              <p className="text-lg text-slate-600/80 font-light leading-relaxed">
                We built Taxwise Solution because we believe every business deserves access to 
                world-class tax expertise. Our team combines decades of experience with cutting-edge 
                technology to deliver personalized solutions that adapt to your unique needs. 
                From startups to established enterprises, we're committed to being your trusted 
                partner in navigating the complex world of tax compliance and strategic planning.
              </p>
              <p className="text-lg text-slate-600/80 font-light leading-relaxed">
                Our vision is simple: to transform how businesses approach tax management by making 
                expert guidance accessible, processes efficient, and results measurable. We don't 
                just handle your taxes—we help you build a foundation for sustainable success.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MissionStatement;
