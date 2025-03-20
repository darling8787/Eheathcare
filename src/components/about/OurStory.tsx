
import React from 'react';
import { Shield, Book, FlaskConical, HeartHandshake, Lightbulb, Clock, Database, Stethoscope } from 'lucide-react';

const OurStory = () => {
  const legacyFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Industry-Aligned Curriculum",
      description: "Preparing students to solve real-world challenges through practical learning"
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-primary" />,
      title: "Research Excellence",
      description: "Pioneering innovation in AI, cybersecurity, and healthcare IT"
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-primary" />,
      title: "Community Impact",
      description: "Driving initiatives that embody 'Technology for Social Good'"
    }
  ];
  const portalFeatures = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Automated Appointments",
      description: "Reduced clinic wait times through smart scheduling system"
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Digital Records",
      description: "Secure digitization of medical history for instant access"
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-primary" />,
      title: "Preventive Care",
      description: "Telehealth services and wellness resources promotion"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/10 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Institutional Legacy</h2>
          <p className="text-muted-foreground">
            Located on Kotappakonda Road, Yalamanda Village, Narasaraopet - 
            A beacon of technical education since 1998
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Legacy Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Book className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Autonomous Excellence</h3>
            </div>
            
            <div className="space-y-6">
              {legacyFeatures.map((feature, index) => (
                <div key={index} className="glass-card hover-lift p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portal Origin Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">E-Health Portal Genesis</h3>
            </div>
            
            <div className="mb-6 glass-card hover-lift p-6">
              <p className="text-muted-foreground">
                Born from a CSE (IT) Department project in 2023, developed by:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Faculty experts in healthcare IT</li>
                <li>Student developers from final year CSE</li>
                <li>College clinic collaboration</li>
              </ul>
            </div>

            <div className="space-y-6">
              {portalFeatures.map((feature, index) => (
                <div key={index} className="glass-card hover-lift p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-primary/10 rounded-xl text-center">
          <blockquote className="text-xl italic font-medium">
            "Technology for Social Good - Transforming campus healthcare through innovation"
          </blockquote>
        </div>
      </div>
    </section>
  );
};
export default OurStory;
