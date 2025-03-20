// src/components/service-template.tsx
'use client';

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  HeartPulse,
  Stethoscope,
  AlertTriangle,
  Clock
} from "lucide-react";

const serviceContent = {
  'general-checkup': {
    title: "General Checkup",
    icon: <HeartPulse className="w-6 h-6" />,
    features: [
      "Comprehensive physical examinations",
      "Vital signs monitoring",
      "Chronic disease management"
    ],
    process: [
      { step: 1, title: "Book Appointment", description: "Select date/time" },
      { step: 2, title: "Health Assessment", description: "Complete pre-checkup form" },
      { step: 3, title: "Clinic Visit", description: "In-person examination" }
    ]
  },
  'mental-health': {
    title: "Mental Health Counseling",
    icon: <Stethoscope className="w-6 h-6" />,
    features: [
      "Confidential sessions",
      "Stress management",
      "Crisis intervention"
    ],
    process: [
      { step: 1, title: "Initial Screening", description: "Brief intake form" },
      { step: 2, title: "Session Booking", description: "Choose specialist" },
      { step: 3, title: "Consultation", description: "Virtual/in-person" }
    ]
  },
  // Add other services following the same structure
};

export const ServiceTemplate = ({ service }: { service: string }) => {
  const content = serviceContent[service as keyof typeof serviceContent];

  if (!content) return <div>Service not found</div>;

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <Badge variant="secondary">
          <Clock className="mr-2 h-4 w-4" />
          Available Now
        </Badge>
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
          {content.icon}
          {content.title}
        </h1>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-medium">{feature}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Process Accordion */}
      <Accordion type="single" collapsible>
        {content.process.map((item) => (
          <AccordionItem key={item.step} value={`item-${item.step}`}>
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <Badge variant="outline">{item.step}</Badge>
                <h3 className="text-lg">{item.title}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{item.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* CTA Section */}
      <div className="text-center">
        <Button size="lg">Book {content.title}</Button>
      </div>
    </div>
  );
};