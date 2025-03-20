
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUsHero from '@/components/about/AboutUsHero';
import MissionStatement from '@/components/about/MissionStatement';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import OurStory from '@/components/about/OurStory';
import MeetTheTeam from '@/components/about/MeetTheTeam';
import Partnerships from '@/components/about/Partnerships';
import ValuesCommitment from '@/components/about/ValuesCommitment';
import AboutFAQs from '@/components/about/AboutFAQs';
import AboutCTA from '@/components/about/AboutCTA';
import FloatingActionButton from '@/components/FloatingActionButton';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutUsHero />
      <MissionStatement />
      <WhyChooseUs />
      <OurStory />
      <MeetTheTeam />
      <Partnerships />
      <ValuesCommitment />
      <AboutFAQs />
      <AboutCTA />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default AboutUs;
