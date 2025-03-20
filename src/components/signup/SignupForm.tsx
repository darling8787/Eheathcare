
import { UserPlus, Lock, Mail, User, Phone, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import { getRoleIcon } from './RoleSelector';
import ClipLoader from "react-spinners/ClipLoader";

interface FormData {
  name: string;
  email: string;
  phone: string;
  id: string;
  password: string;
  confirmPassword: string;
  role: string;
  agreeTerms: boolean;
}

interface SignupFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (checked: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

const SignupForm = ({ 
  formData, 
  handleChange, 
  handleCheckboxChange, 
  handleSubmit,
  loading
}: SignupFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="w-5 h-5 text-muted-foreground" />
            </div>
            <Input 
              type="text" 
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="w-5 h-5 text-muted-foreground" />
            </div>
            <Input 
              type="email" 
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className="pl-10"
              required
            />
          </div>
        </div>
      
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Phone className="w-5 h-5 text-muted-foreground" />
            </div>
            <Input 
              type="tel" 
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {getRoleIcon(formData.role)}
            </div>
            <Input 
              type="text" 
              name="id"
              placeholder={`${formData.role.charAt(0).toUpperCase() + formData.role.slice(1)} ID`}
              value={formData.id}
              onChange={handleChange}
              disabled={loading}
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="w-5 h-5 text-muted-foreground" />
            </div>
            <Input 
              type="password" 
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Check className="w-5 h-5 text-muted-foreground" />
            </div>
            <Input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={loading}
              className="pl-10"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 py-2">
        <Checkbox 
          id="terms" 
          checked={formData.agreeTerms}
          onCheckedChange={handleCheckboxChange}
          disabled={loading}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the{" "}
          <Link to="/terms" className="text-primary hover:underline">
            terms of service
          </Link>
          {" "}and{" "}
          <Link to="/privacy" className="text-primary hover:underline">
            privacy policy
          </Link>
        </label>
      </div>
      
      <Button 
        type="submit" 
        className="w-full rounded-lg" 
        disabled={!formData.agreeTerms && loading}
      >
        <UserPlus className="mr-2 w-4 h-4" /> {loading ? 'Creating Account...' : 'Create Account'} {loading && <ClipLoader color='white' size={20} />}
      </Button>
    </form>
  );
};

export default SignupForm;
