
import React from 'react';
import { 
  Stethoscope, Brain, Tablet, Syringe, Shield, 
  ArrowRight, BadgeCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon: Icon, color, delay }: ServiceCardProps) => {
  return (
    <div 
      className="glass-card hover-lift group" 
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
        `bg-${color}/10 text-${color}`
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="ghost" size="sm" className="group/btn px-0">
        Learn more 
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </div>
  );
};

const services = [
  {
    title: "General Checkup",
    description: "Comprehensive health examination for students and faculty members.",
    icon: Stethoscope,
    color: "health-blue"
  },
  {
    title: "Mental Health",
    description: "Professional counseling services to support your mental wellbeing.",
    icon: Brain,
    color: "health-teal"
  },
  {
    title: "Dental Care",
    description: "Complete dental services from check-ups to treatments.",
    icon: Tablet,
    color: "primary"
  },
  {
    title: "Vaccinations",
    description: "Stay protected with all required and recommended vaccinations.",
    icon: Syringe,
    color: "health-green"
  },
  {
    title: "Emergency Support",
    description: "Immediate care and assistance for urgent health situations.",
    icon: Shield,
    color: "health-red"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-health-teal/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-health-blue/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <BadgeCheck className="w-4 h-4 mr-2" /> 
            Our Healthcare Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Health Services For Campus</h2>
          <p className="text-muted-foreground">
            Access a wide range of healthcare services designed specifically for students and faculty members, all in one place.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
