
import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  delay: number;
}

const Testimonial = ({ quote, name, role, delay }: TestimonialProps) => {
  return (
    <Card 
      className="glass-card hover-lift overflow-visible"
      style={{ animationDelay: `${delay * 150}ms` }}
    >
      <CardContent className="pt-6 relative">
        <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
          <Quote className="w-5 h-5" />
        </div>
        <div className="pt-4">
          <p className="text-lg mb-6">{quote}</p>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="font-bold">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const testimonials = [
  {
    quote: "Booking appointments through the portal saved me during midterms! Quick and hassle-free.",
    name: "Riya",
    role: "CS Final Year"
  },
  {
    quote: "The telehealth feature is a game-changer for busy educators. Highly recommended!",
    name: "Prof. Kumar",
    role: "Biology Dept."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-white dark:from-gray-800/50 dark:to-gray-900">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Users Say</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Hear from students and faculty about their experiences using our campus health portal.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
