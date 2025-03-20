
import React from 'react';

const AboutUsHero = () => {
  return (
    <section className="py-20 pt-32 bg-gradient-to-b from-primary/10 to-white dark:from-gray-800/50 dark:to-gray-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-glow">
           <span className='text-blue-500'>Narasaraopeta Engineering College</span>  (Autonomous)
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Providing our campus community with accessible healthcare solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
