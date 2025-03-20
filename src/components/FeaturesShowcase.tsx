
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Secure, GDPR-compliant platform.",
  "Sync with your college ID for instant verification.",
  "Real-time appointment reminders via SMS/email."
];

const stats = [
  { value: "500+", label: "Appointments Handled Monthly" },
  { value: "98%", label: "User Satisfaction Rate" }
];

const FeaturesShowcase = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-health-blue/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-health-teal/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Platform?</h2>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-health-green mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Image/Screenshot */}
          <div className="relative">
            <div className="glass-panel p-6 rounded-2xl overflow-hidden shadow-glass">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                alt="Student using the health portal" 
                className="w-full h-auto rounded-xl hover-scale shadow-md"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-health-green/10 rounded-full filter blur-md -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-health-blue/10 rounded-full filter blur-md -z-10"></div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-dashed border-primary/20 rounded-full -z-10 animate-spin" style={{ animationDuration: '60s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
