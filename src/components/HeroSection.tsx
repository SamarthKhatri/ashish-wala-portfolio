
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/d6380acc-fa8a-4914-a615-be1ebbf3aeed.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-slate-900/40 to-indigo-900/60" />
      
      {/* Glassmorphic Card */}
      <Card className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-12 max-w-4xl mx-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-tight">
            Your Trusted Tax Partner
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              for Businesses
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
            Strategic tax planning and compliance solutions designed to maximize your business potential 
            while ensuring complete regulatory adherence.
          </p>
          
          <div className="pt-8">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 font-light tracking-wide hover:scale-105 hover:glow"
            >
              Book Your Free Consultation
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-400/20 rounded-full blur-xl animate-pulse delay-700" />
    </section>
  );
};

export default HeroSection;
