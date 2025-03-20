
// import React from 'react';

// interface TeamMemberProps {
//   name: string;
//   role: string;
//   quote: string;
//   imageUrl: string;
// }

// const TeamMember = ({ name, role, quote, imageUrl }: TeamMemberProps) => {
//   return (
//     <div className="glass-card hover-lift">
//       <div className="aspect-square rounded-xl overflow-hidden mb-4">
//         <img 
//           src={imageUrl} 
//           alt={name} 
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <h3 className="text-xl font-bold">{name}</h3>
//       <p className="text-primary font-medium mb-3">{role}</p>
//       <p className="italic text-muted-foreground">"{quote}"</p>
//     </div>
//   );
// };

// const MeetTheTeam = () => {
//   const teamMembers = [
//     {
//       name: "Dr. Anika Patel",
//       role: "Campus Chief Physician",
//       quote: "Our goal is to make healthcare as stress-free as your morning coffee.",
//       imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//     },
//     {
//       name: "Prof. Rajesh Verma",
//       role: "Lead Developer",
//       quote: "We prioritize security without compromising usability.",
//       imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//     },
//     {
//       name: "Priya Mehta",
//       role: "Student Representative",
//       quote: "This portal was designed BY students, FOR students.",
//       imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
//     }
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-b from-secondary/20 to-white dark:from-gray-800/50 dark:to-gray-900">
//       <div className="container-custom">
//         <h2 className="text-3xl font-bold mb-4 text-center">Meet The Team</h2>
//         <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
//           The dedicated people working behind the scenes to keep our campus healthy
//         </p>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <TeamMember 
//               key={index}
//               name={member.name}
//               role={member.role}
//               quote={member.quote}
//               imageUrl={member.imageUrl}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MeetTheTeam;
import React from 'react';
import { GraduationCap, Shield, Code2, Stethoscope, School, Users } from 'lucide-react';

interface TeamMember {
  type: string;
  name: string;
  role: string;
  quote: string;
  imageUrl?: string;
  icon?: React.ReactNode;
}

const TeamMember = ({ name, role, quote, imageUrl, icon, type }: TeamMember) => {
  return (
    <div className="glass-card hover-lift p-6 h-full flex flex-col">
      {type === 'individual' ? (
        <>
          <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-primary font-medium mb-3">{role}</p>
          <p className="italic text-muted-foreground">"{quote}"</p>
        </>
      ) : (
        <>
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-primary font-medium mb-3">{role}</p>
          <p className="text-muted-foreground">{quote}</p>
        </>
      )}
    </div>
  );
};

const MeetTheTeam = () => {
  const teamMembers = [
    {
      type: 'individual',
      name: "Dr. B. JHANSI VAZRAM,",
      role: "HOD, CSE (IT)",
      quote: "This portal merges classroom learning with societal impact",
      imageUrl: "/hod-placeholder.jpg"
    },
    {
      type: 'individual',
      name: "Prof. K. Ananya Reddy",
      role: "Lead Developer & Mentor",
      quote: "Security and usability were our top priorities in design",
      imageUrl: "/lead-dev-placeholder.jpg"
    },
    {
      type: 'organization',
      name: "Student Innovators",
      role: "CSE (IT) Final Year Team",
      quote: "Specializations: Full-stack Development, Cybersecurity, AI/ML",
      icon: <Users className="w-8 h-8 text-primary" />
    },
    {
      type: 'organization',
      name: "College Clinic",
      role: "Medical Partners",
      quote: "24/7 quality care with digital integration",
      icon: <Stethoscope className="w-8 h-8 text-primary" />
    },
    {
      type: 'organization',
      name: "JNTUK Collaborators",
      role: "Technical Advisors",
      quote: "Ensuring system scalability and compliance",
      icon: <School className="w-8 h-8 text-primary" />
    },
    {
      type: 'organization',
      name: "Curriculum Integration",
      role: "NBA-Accredited Program",
      quote: "Live project part of our Tier-1 curriculum",
      icon: <GraduationCap className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary/10 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pioneers of Digital Healthcare</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Bringing together NAAC A+ academic excellence and cutting-edge IT innovation from Narasaraopeta Engineering College
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              type={member.type}
              name={member.name}
              role={member.role}
              quote={member.quote}
              imageUrl={member.imageUrl}
              icon={member.icon}
            />
          ))}
        </div>

        <div className="mt-12 text-center bg-primary/5 p-6 rounded-xl">
          <Code2 className="w-12 h-12 mx-auto text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Tech Stack Highlights</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with React.js, Node.js, and PostgreSQL 
            {/* • AWS Cloud Infrastructure • 
            Implemented JNTUK Security Protocols • 100% Open Source Learning Resource */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;