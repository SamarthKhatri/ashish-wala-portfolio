
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesOverview from "@/components/ServicesOverview";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import MissionStatement from "@/components/MissionStatement";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import BlogTeaser from "@/components/BlogTeaser";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-inter transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <ServicesOverview />
        <TestimonialsSection />
        <HowItWorks />
        <FeaturesSection />
        <MissionStatement />
        <PricingSection />
        <FAQSection />
        <BlogTeaser />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
