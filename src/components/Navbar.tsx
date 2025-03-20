
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Search, AlertCircle, Home, Info, 
  PhoneCall, UserPlus, LogIn, Activity 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const services = [
  { id: 'general-checkup', name: 'General Checkup' },
  { id: 'mental-health', name: 'Mental Health' },
  { id: 'dental-care', name: 'Dental Care' },
  { id: 'vaccinations', name: 'Vaccinations' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo/Left Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl hidden sm:inline-block">
              Campus HealthHub
            </span>
          </Link>
        </div>

        {/* Middle Section - Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="nav-link flex items-center space-x-1">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="nav-link flex items-center space-x-1">
                <Activity className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48 rounded-xl p-2 bg-white/90 backdrop-blur-md">
                {services.map((service) => (
                  <DropdownMenuItem  key={service.id}>
                    <Link 
                      to={`/services/${service.id}`}
                      className="block py-1.5"
                    >
                      {service.name}
                    </Link>
                    </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/about" className="nav-link flex items-center space-x-1">
            <Info className="w-4 h-4" />
            <span>About Us</span>
          </Link>
          
          <Link to="/contact" className="nav-link flex items-center space-x-1">
            <PhoneCall className="w-4 h-4" />
            <span>Contact</span>
          </Link>
        </nav>
        
        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Emergency Help Button */}
          <Link to="/emergency" className="animate-pulse">
            <Button variant="destructive" size="sm" className="shadow-sm flex items-center">
              <AlertCircle className="mr-1 w-4 h-4" />
              Emergency Help
            </Button>
          </Link>
          
          {/* Login/Signup */}
          <div className="flex items-center space-x-2">
            <Link to="/login">
              <Button variant="outline" size="sm" className="shadow-sm flex items-center">
                <LogIn className="mr-1 w-4 h-4" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="shadow-sm flex items-center">
                <UserPlus className="mr-1 w-4 h-4" />
                Signup
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg lg:hidden animate-fade-in-up">
          <div className="container-custom py-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-primary/10 rounded-lg" onClick={toggleMenu}>
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 p-2">
                  <Activity className="w-5 h-5" />
                  <span>Services</span>
                </div>
                <div className="ml-7 space-y-1 border-l-2 border-primary/20 pl-2 hover:cursor-pointer">
                  <Link to="/services/general" className="block py-1.5 hover:text-primary hover:cursor-pointer" onClick={toggleMenu}>General Checkup</Link>
                  <Link to="/services/mental-health" className="block py-1.5 hover:text-primary hover:cursor-pointer" onClick={toggleMenu}>Mental Health</Link>
                  <Link to="/services/dental" className="block py-1.5 hover:text-primary hover:cursor-pointer" onClick={toggleMenu}>Dental Care</Link>
                  <Link to="/services/vaccinations" className="block py-1.5 hover:text-primary hover:cursor-pointer" onClick={toggleMenu}>Vaccinations</Link>
                  <Link to="/services/emergency" className="block py-1.5 hover:text-primary hover:cursor-pointer" onClick={toggleMenu}>Emergency Support</Link>
                </div>
              </div>
              
              <Link to="/about" className="flex items-center space-x-2 p-2 hover:bg-primary/10 rounded-lg" onClick={toggleMenu}>
                <Info className="w-5 h-5" />
                <span>About Us</span>
              </Link>
              
              <Link to="/contact" className="flex items-center space-x-2 p-2 hover:bg-primary/10 rounded-lg" onClick={toggleMenu}>
                <PhoneCall className="w-5 h-5" />
                <span>Contact</span>
              </Link>
            </nav>
            
            <div className="flex flex-col space-y-3">
              <Link to="/login" className="w-full" onClick={toggleMenu}>
                <Button variant="outline" className="w-full justify-start">
                  <LogIn className="mr-2 w-5 h-5" /> Login
                </Button>
              </Link>
              <Link to="/signup" className="w-full" onClick={toggleMenu}>
                <Button className="w-full justify-start">
                  <UserPlus className="mr-2 w-5 h-5" /> Signup
                </Button>
              </Link>
            </div>
            
            <Link to="/emergency" className="block" onClick={toggleMenu}>
              <Button variant="destructive" className="w-full justify-start animate-pulse">
                <AlertCircle className="mr-2 w-5 h-5" /> Emergency Help
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
