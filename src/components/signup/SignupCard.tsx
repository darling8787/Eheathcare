
import { UserPlus, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import RoleSelector from './RoleSelector';
import SignupForm from './SignupForm';
import { ChangeEvent, useState } from 'react';
import { useAuth } from '@/contexts/Authcontext';
import { useNavigate } from 'react-router-dom';

interface SignupCardProps {
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  id: string;
  password: string;
  confirmPassword: string;
  role: 'student' | 'teacher' | 'admin';
  agreeTerms: boolean;
}

const SignupCard = ({ className }: SignupCardProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    id: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    agreeTerms: false
  });
  const { signup } = useAuth();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: FormData['role']) => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeTerms: checked }));
  };

  // Add in handleSubmit before the signup call
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      return setError(
        'Password must contain at least 8 characters, including one letter and one number'
      );
    }
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }

    if (formData.id.length !== 10) {
      return setError(formData.id.length > 10 ? 'Id length is too long':'Id length is too low');
    }

    if (!formData.agreeTerms) {
      return setError('You must agree to the terms and conditions');
    }

    try {
      setLoading(true);
      await signup({
        email: formData.email,
        password: formData.password,
        displayName: formData.name,
        role: formData.role,
        rid:formData.id 
      });
      navigate('/dashboard'); // Redirect after successful signup
    } catch (err) {
      handleAuthError(err);
    } finally {
      setLoading(false);
    }
  };
  const handleAuthError = (error: unknown) => {
    if (error instanceof Error) {
      switch (error.message) {
        case 'Firebase: Error (auth/email-already-in-use).':
          setError('Email already in use');
          break;
        case 'Firebase: Error (auth/invalid-email).':
          setError('Invalid email address');
          break;
        case 'Firebase: Error (auth/weak-password).':
          setError('Password should be at least 6 characters');
          break;
        default:
          setError('Failed to create account');
          console.error(error);
      }
    }
  };
  return (
    <div className={`max-w-lg w-full animate-fade-in-up ${className}`}>
      <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
      </Link>
      
      <Card className="w-full shadow-lg border-t-4 border-t-primary">
        <CardHeader className="space-y-1">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <UserPlus className="w-5 h-5" />
            </div>
          </div>
          <CardDescription>
            Sign up for your campus health portal account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-3 text-sm text-destructive bg-destructive/15 rounded-lg">
              {error}
            </div>
          )}
          
          <RoleSelector 
            role={formData.role} 
            onRoleChange={handleRoleChange} 
          />
          
          <SignupForm 
            formData={formData}
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </CardContent>
        <CardFooter className="border-t pt-6">
          <div className="w-full text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in here
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupCard;
