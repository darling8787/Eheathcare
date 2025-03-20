
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutFAQs = () => {
  const faqs = [
    {
      question: "How does this portal align with our CSE (IT) curriculum?",
      answer: "It’s a live project showcasing skills in full-stack development, databases, and cybersecurity taught in our NBA-accredited program."
    },
    {
      question: "How do I sign up?",
      answer: "Use your college email ID for instant verification – no paperwork! Simply click on the Sign Up button, enter your college email, and follow the verification steps."
    },
    {
      question: "Can I access old medical records?",
      answer: "Yes! All records post-2021 are digitized and available for download through your secure patient portal after login."
    },
    {
      question: "What if I need urgent care?",
      answer: "Visit our Emergency Help section or call campus security at 1-800-CAMPUS-911 for immediate assistance."
    },
    {
      question: "Is my health data secure?",
      answer: "Absolutely. We use end-to-end encryption and comply with all privacy regulations to ensure your data remains confidential and secure."
    },
    {
      question: "Can faculty members use the portal too?",
      answer: "Yes, the portal is available to all students, faculty, and staff with valid university credentials."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-white dark:from-gray-800/50 dark:to-gray-900">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Get answers to common questions about our platform
        </p>
        
        <div className="max-w-3xl mx-auto glass-card">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AboutFAQs;
