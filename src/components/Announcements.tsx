
import React, { useState, useEffect } from 'react';
import { AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const announcements = [
  {
    id: 1,
    text: "Flu Vaccination Camp: Oct 15–20 | Register Now!",
    link: "/vaccinations"
  },
  {
    id: 2,
    text: "Mental Health Workshop: Thrive During Exams – RSVP Today!",
    link: "/mental-health"
  },
  {
    id: 3,
    text: "Clinic Closed on November 24th for Thanksgiving Holiday",
    link: "/notices"
  }
];

const Announcements = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % announcements.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setActiveIndex((current) => (current + 1) % announcements.length);
  const prevSlide = () => setActiveIndex((current) => (current - 1 + announcements.length) % announcements.length);

  return (
    <section className="pt-6 pb-4">
      {/* Emergency Strip */}
      <div className="bg-destructive/10 text-destructive py-2 px-4 mb-4 flex items-center justify-center">
        <AlertTriangle className="w-5 h-5 mr-2" />
        <p className="text-sm font-medium">
          Emergency? Call Campus Security: ☎️ 1800-XXX-XXXX | Ambulance: 🚑 108
        </p>
      </div>
      
      {/* Announcements Carousel */}
      <div className="container-custom">
        <div className="relative bg-accent/10 rounded-xl p-4 overflow-hidden">
          <div className="flex items-center justify-between">
            <button 
              onClick={prevSlide}
              className="bg-white/80 dark:bg-gray-800/80 p-1 rounded-full shadow-sm z-10"
              aria-label="Previous announcement"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="relative overflow-hidden flex-1 mx-4">
              <div className="transition-all duration-500 ease-in-out flex">
                {announcements.map((announcement, index) => (
                  <div 
                    key={announcement.id}
                    className={cn(
                      "w-full flex-shrink-0 text-center transition-all duration-500 transform px-4",
                      index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 absolute"
                    )}
                  >
                    <p className="font-medium">
                      {announcement.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={nextSlide}
              className="bg-white/80 dark:bg-gray-800/80 p-1 rounded-full shadow-sm z-10"
              aria-label="Next announcement"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-3 space-x-2">
            {announcements.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === activeIndex ? "bg-primary w-4" : "bg-gray-300 dark:bg-gray-600"
                )}
                aria-label={`Go to announcement ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
