
import React from 'react';
import { Calendar, FileText, Video, BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
  color: string;
  delay: number;
}

const QuickActionCard = ({ title, description, icon, ctaText, color, delay }: QuickActionCardProps) => {
  return (
    <Card 
      className="glass-card hover-lift group"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <CardContent className="pt-6">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
          `bg-${color}/10 text-${color}`
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="ghost" size="sm" className="group/btn px-0">
          {ctaText}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

const quickActions = [
  {
    title: "Book an Appointment",
    description: "Schedule with doctors, dentists, or counselors in 3 clicks.",
    icon: <Calendar className="w-6 h-6" />,
    ctaText: "Get Started",
    color: "health-blue"
  },
  {
    title: "Access Medical Records",
    description: "View lab reports, prescriptions, and vaccination history instantly.",
    icon: <FileText className="w-6 h-6" />,
    ctaText: "Learn More",
    color: "primary"
  },
  {
    title: "24/7 Telehealth",
    description: "Virtual consultations with licensed professionals.",
    icon: <Video className="w-6 h-6" />,
    ctaText: "Talk Now",
    color: "health-green"
  },
  {
    title: "Health Resources",
    description: "Download wellness guides, FAQs, and self-care tips.",
    icon: <BookOpen className="w-6 h-6" />,
    ctaText: "Explore",
    color: "health-teal"
  }
];

const QuickActionCards = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary/20 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Actions</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
          {quickActions.map((action, index) => (
            <QuickActionCard 
              key={index}
              title={action.title}
              description={action.description}
              icon={action.icon}
              ctaText={action.ctaText}
              color={action.color}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActionCards;
