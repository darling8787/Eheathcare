
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Announcements from '@/components/Announcements';
import QuickActionCards from '@/components/QuickActionCards';
import FeaturesShowcase from '@/components/FeaturesShowcase';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Announcements />
      <QuickActionCards />
      <FeaturesShowcase />
      <Testimonials />
      <HowItWorks />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
