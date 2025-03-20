
import React from 'react';
import { Calendar, LogIn, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-20 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-health-light-blue/20 rounded-full filter blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-health-teal/10 rounded-full filter blur-3xl -z-10 animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8 max-w-xl animate-fade-in-left">
          <div>
            <h4 className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Calendar className="w-4 h-4 mr-2" /> 
              Campus Healthcare Made Simple
            </h4>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Health, Our Priority – <span className="text-primary text-glow">Access Care Anytime, Anywhere!</span>
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Book appointments, view medical records, and connect with campus healthcare providers in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/login">
              <Button size="lg" className="rounded-xl shadow-md hover:shadow-lg transition-all">
                <LogIn className="mr-2 h-5 w-5" /> Login/Signup
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6 pt-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-health-blue/20 border-2 border-white flex items-center justify-center text-xs font-medium">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">500+</span> appointments handled monthly
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div className="relative animate-fade-in-right">
          <div className="relative z-10">
            <div className="glass-panel p-6 rounded-2xl overflow-hidden shadow-glass">
              <img 
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Campus Health Services" 
                className="w-full h-auto rounded-xl hover-scale shadow-md"
              />
              
              {/* Floating cards */}
              <div className="absolute -bottom-5 -left-5 glass-panel p-4 rounded-xl shadow-glass-sm animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-health-green/20 flex items-center justify-center text-health-green">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Next Available</p>
                    <p className="font-medium">Today, 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-10 -right-6 glass-panel p-4 rounded-xl shadow-glass-sm max-w-[180px] animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex flex-col space-y-2">
                  <div className="w-8 h-8 rounded-full bg-health-blue/20 flex items-center justify-center text-health-blue">
                    <span className="text-sm font-bold">98%</span>
                  </div>
                  <p className="text-xs">User Satisfaction Rate</p>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-health-green rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full -z-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-dashed border-primary/20 rounded-full -z-10 animate-spin" style={{ animationDuration: '40s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
