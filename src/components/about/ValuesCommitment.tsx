
import React from 'react';
import { Globe, LightbulbIcon, Users } from 'lucide-react';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Value = ({ icon, title, description }: ValueProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const ValuesCommitment = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary/20 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-4 text-center">Values & Commitment</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          The core principles that guide our service and shape our future
        </p>
        
        <div className="glass-card p-8">
          <div className="flex flex-col space-y-10">
            <Value 
              icon={<Globe className="w-7 h-7 text-primary" />}
              title="Inclusivity"
              description="We serve all students, regardless of background, with support and accommodation for diverse needs."
            />
            
            <Value 
              icon={<LightbulbIcon className="w-7 h-7 text-primary" />}
              title="Innovation"
              description="Regular updates based on user feedback and emerging health trends to ensure our platform stays cutting-edge."
            />
            
            <Value 
              icon={<Users className="w-7 h-7 text-primary" />}
              title="Community"
              description="Free health workshops, vaccination drives, and wellness fairs for campus well-being and collective health education."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesCommitment;
