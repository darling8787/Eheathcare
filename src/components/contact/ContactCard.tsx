import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Clock, CheckCircle2, ImagePlay } from 'lucide-react';

interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
  }
  
  const ContactCard = ({ icon, title, content }: ContactCardProps) => {
    return (
      <div className="glass-card hover-lift p-6 flex gap-4 items-start transition-all duration-300">
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
  
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <div className="text-muted-foreground space-y-1">
            {content.split('\n').map((line, index) => (
              <p key={index} className="leading-relaxed">
                {line.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

const ContactPage = () => {
  const [formData, setFormData] = useState({
    collegeId: '',
    queryType: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send to an API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      collegeId: '',
      queryType: '',
      message: ''
    });
  };
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   try {
  //     const response = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  
  //     if (response.ok) {
  //       setIsSubmitted(true);
  //       setFormData({
  //         collegeId: '',
  //         queryType: '',
  //         message: ''
  //       });
  //     }
  //   } catch (error) {
  //     console.error('Submission error:', error);
  //   }
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <section className="py-16 bg-gradient-to-b from-white to-secondary/10 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Campus Health Services</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            NAAC A+ Accredited Healthcare Support at Narasaraopeta Engineering College
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Existing ContactCards */}
            <ContactCard 
              icon={<MapPin className="w-6 h-6 text-primary" />}
              title="Visit Us"
              content="Narasaraopeta Engineering College (Autonomous)
                     Kotappakonda Road, Yalamanda Village
                     Narasaraopet, Andhra Pradesh 522601"
            />

            <ContactCard 
              icon={<Phone className="w-6 h-6 text-primary" />}
              title="Helpline"
              content="General Health Queries: +91-XXXXXXXXXX
                     Portal Technical Support: helpdesk@nec-health.in"
            />

            <ContactCard 
              icon={<Clock className="w-6 h-6 text-primary" />}
              title="Clinic Hours"
              content="Mon-Sat: 8AM - 8PM | Sun: Emergency Only
                     Telehealth: 24/7 Availability"
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="glass-card hover-lift p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <p className="text-green-600 dark:text-green-300">
                  Message sent successfully! We'll respond within 24 hours.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="collegeId"
                placeholder="RollNO"
                value={formData.collegeId}
                onChange={handleInputChange}
                required
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium">Query Type</label>
                <Select 
                  onValueChange={(value) => setFormData({...formData, queryType: value})}
                  value={formData.queryType}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select query type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="appointment">Appointment Rescheduling</SelectItem>
                    <SelectItem value="records">Medical Records Help</SelectItem>
                    <SelectItem value="technical">Technical Issue</SelectItem>
                    <SelectItem value="feedback">General Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                name="message"
                placeholder="Describe your concern..."
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Existing Map and Support Promise sections */}
      </div>
    </section>
    </>
  );
};

export default ContactPage;