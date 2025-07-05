
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: "123 Business District, Suite 456\nNew York, NY 10001"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@taxwisesolution.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600/80 font-light max-w-3xl mx-auto leading-relaxed">
            Ready to optimize your business taxes? Contact us for a free consultation 
            and discover how we can help you achieve your financial goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className={`bg-white/70 backdrop-blur-sm border border-white/50 shadow-xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-6">
                Book Your Free Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 font-light">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-white/50 border-white/50 focus:border-blue-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-light">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-white/50 border-white/50 focus:border-blue-300"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-slate-700 font-light">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1 bg-white/50 border-white/50 focus:border-blue-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-slate-700 font-light">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 bg-white/50 border-white/50 focus:border-blue-300"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-slate-700 font-light">
                    How can we help you?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 bg-white/50 border-white/50 focus:border-blue-300"
                    placeholder="Tell us about your business and tax needs..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-6 text-lg font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Schedule Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className={`bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">
                          {info.title}
                        </h4>
                        <p className="text-slate-600/80 font-light text-sm whitespace-pre-line leading-relaxed">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className={`bg-white/70 backdrop-blur-sm border border-white/50 shadow-xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-slate-600 font-light">
                      Interactive Map Integration
                    </p>
                    <p className="text-sm text-slate-500 font-light mt-2">
                      Visit us at our New York office
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
