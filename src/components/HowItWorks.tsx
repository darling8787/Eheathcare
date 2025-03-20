
import React from 'react';
import { UserPlus, Calendar, CheckCircle2 } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step = ({ number, title, description, icon }: StepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-xs">{description}</p>
    </div>
  );
};

const steps = [
  {
    title: "Sign Up",
    description: "Use your college email to create an account.",
    icon: <UserPlus className="w-7 h-7 text-primary" />
  },
  {
    title: "Book",
    description: "Choose a provider, date, and time.",
    icon: <Calendar className="w-7 h-7 text-primary" />
  },
  {
    title: "Visit",
    description: "Get reminders and walk in stress-free!",
    icon: <CheckCircle2 className="w-7 h-7 text-primary" />
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-health-green/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-health-blue/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Getting started with our campus health portal is simple and quick.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <Step 
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
          
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
