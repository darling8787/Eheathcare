
// import React from 'react';
// import { Rocket, Lock, School, PhoneCall, Users } from 'lucide-react';

// interface FeatureProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

// const Feature = ({ icon, title, description }: FeatureProps) => {
//   return (
//     <div className="glass-card hover-lift p-6 flex flex-col items-start">
//       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//         {icon}
//       </div>
//       <h3 className="text-xl font-bold mb-2">{title}</h3>
//       <p className="text-muted-foreground">{description}</p>
//     </div>
//   );
// };

// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: <Rocket className="w-6 h-6 text-primary" />,
//       title: "Instant Appointments",
//       description: "Skip the queues – book in-person or virtual consultations in minutes."
//     },
//     {
//       icon: <Lock className="w-6 h-6 text-primary" />,
//       title: "Privacy First",
//       description: "End-to-end encryption and GDPR/HIPAA compliance for all health data."
//     },
//     {
//       icon: <School className="w-6 h-6 text-primary" />,
//       title: "Campus Integration",
//       description: "Synced with your college ID for hassle-free access."
//     },
//     {
//       icon: <PhoneCall className="w-6 h-6 text-primary" />,
//       title: "24/7 Accessibility",
//       description: "View records, download reports, or reschedule appointments anytime."
//     },
//     {
//       icon: <Users className="w-6 h-6 text-primary" />,
//       title: "Expert Care",
//       description: "Partnered with licensed campus doctors and mental health professionals."
//     }
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-b from-white to-secondary/20 dark:from-gray-900 dark:to-gray-800/50">
//       <div className="container-custom">
//         <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Us?</h2>
//         <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
//           Our platform is designed with students and staff in mind, offering these unique advantages
//         </p>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <Feature 
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
import React from 'react';
import { Award, ShieldCheck, Cpu, HeartPulse } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="glass-card hover-lift p-6 flex flex-col items-start">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Accredited Quality",
      description: "Built by an NBA Tier-1 Accredited department and an NAAC A+ Grade institution. Approved by AICTE and permanently affiliated to JNTUK, Kakinada."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Secure & Reliable",
      description: "GDPR-compliant platform with end-to-end encryption. Integrated with college ID systems for instant verification."
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "Tech-Driven Innovation",
      description: "Developed by CSE (IT) students and faculty, leveraging cutting-edge curriculum expertise in AI and cybersecurity."
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-primary" />,
      title: "Campus Health Integration",
      description: "Direct sync with college clinic for real-time appointment tracking and digital record management."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary/20 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our Portal?</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Leveraging our NAAC A+ accredited excellence and cutting-edge CSE (IT) innovation, we offer:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;