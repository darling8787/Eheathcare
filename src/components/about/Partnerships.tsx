
import React from 'react';

const Partnerships = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-4 text-center">Partnerships</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Working together with trusted organizations to deliver better healthcare
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card text-center hover-lift">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                <path d="M22 14a8 8 0 0 1-8 8"></path>
                <path d="M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
                <path d="M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"></path>
                <path d="M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"></path>
                <path d="M18 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Campus Clinic</h3>
            <p className="text-muted-foreground">
              Working hand-in-hand with University Health Center to deliver quality care.
            </p>
          </div>
          
          <div className="glass-card text-center hover-lift">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                <path d="M21.18 8.04C20.27 5.28 18.4 3.04 16 1.64"></path>
                <path d="M12 2v8"></path>
                <path d="M2.5 8H12"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Mental Health Allies</h3>
            <p className="text-muted-foreground">
              Supported by Campus Counseling Center for 24/7 crisis intervention.
            </p>
          </div>
          
          <div className="glass-card text-center hover-lift">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="M6 8h.01"></path>
                <path d="M10 8h.01"></path>
                <path d="M14 8h.01"></path>
                <path d="M18 8h.01"></path>
                <path d="M8 12h.01"></path>
                <path d="M12 12h.01"></path>
                <path d="M16 12h.01"></path>
                <path d="M7 16h10"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Tech Partners</h3>
            <p className="text-muted-foreground">
              Built on secure cloud infrastructure with industry-leading technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
