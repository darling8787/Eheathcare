
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Heart 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl">Campus HealthHub</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Providing comprehensive healthcare services for students and faculty members, making campus health accessible to all.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Health Services</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services/general" className="text-muted-foreground hover:text-primary text-sm inline-block">
                  General Checkup
                </Link>
              </li>
              <li>
                <Link to="/services/mental-health" className="text-muted-foreground hover:text-primary text-sm inline-block">
                  Mental Health Counseling
                </Link>
              </li>
              <li>
                <Link to="/services/dental" className="text-muted-foreground hover:text-primary text-sm inline-block">
                  Dental Care
                </Link>
              </li>
              <li>
                <Link to="/services/vaccinations" className="text-muted-foreground hover:text-primary text-sm inline-block">
                  Vaccinations
                </Link>
              </li>
              <li>
                <Link to="/services/emergency" className="text-muted-foreground hover:text-primary text-sm inline-block">
                  Emergency Support
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-muted-foreground hover:text-primary text-sm inline-block">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-muted-foreground hover:text-primary text-sm inline-block">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-muted-foreground hover:text-primary text-sm inline-block">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm inline-block">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                Narasaraopeta Engineering College (Autonomous)Kotappakonda Road, Yalamanda Village, Narasaraopet – 522601
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  (123) 456-7890
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  health@campushub.edu
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/emergency">
                <Button variant="destructive" size="sm" className="shadow-sm">
                  Emergency Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Campus HealthHub. All rights reserved by IT Department.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="w-4 h-4 text-health-red mx-1" /> for campus well-being
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
