
import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

const Testimonial = ({ quote, name, role }: TestimonialProps) => {
  return (
    <Card className="glass-card hover-lift overflow-visible">
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

const AboutTestimonials = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-4 text-center">Testimonials</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          What our campus community has to say about their experience
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Testimonial 
            quote="I used to dread clinic visits, but the portal made it so easy! The appointment reminders are a lifesaver during exam season."
            name="Rohan"
            role="Engineering Student"
          />
          <Testimonial 
            quote="As a teacher, the telehealth feature saves me hours! I can get quick consultations between classes without disrupting my schedule."
            name="Ms. Sharma"
            role="Chemistry Department"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
