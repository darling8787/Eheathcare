
import React, { useState } from 'react';
import { Plus, Calendar, AlertTriangle, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="fixed bottom-6 right-3 z-50 md:bottom-8 md:right-8">
      {/* Expanded Options */}
      <div className={cn(
        "flex flex-col items-end space-y-2 mb-2 transition-all duration-300",
        isOpen ? "opacity-100 transform translate-y-0" : "opacity-0 pointer-events-none transform translate-y-4"
      )}>
        <Button 
          variant="default" 
          size="sm" 
          className="rounded-full shadow-lg px-4"
        >
          <Calendar className="mr-2 w-4 h-4" />
          Book Appointment
        </Button>
        
        <Link to="/emergency" className="block" onClick={toggleMenu}>
              <Button variant="destructive" className="w-full justify-start animate-pulse">
                <AlertCircle className="mr-2 w-5 h-5" /> Emergency Help
              </Button>
        </Link>
      </div>
      
      {/* Main Button */}
      <Button 
        onClick={toggleOpen}
        size="icon" 
        className={cn(
          "w-12 h-12 rounded-full shadow-lg transition-transform",
          isOpen ? "bg-destructive hover:bg-destructive/90 rotate-45" : "bg-primary hover:bg-primary/90"
        )}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </Button>
    </div>
  );
};

export default FloatingActionButton;
