import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, ChevronLeft } from 'lucide-react';
import { useAuth } from '@/contexts/Authcontext';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import LoginForm from './LoginForm';
import RoleSelector from '../signup/RoleSelector';

interface LoginCardProps {
  className?: string;
}

const LoginCard = ({ className }: LoginCardProps) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email || !formData.password) {
      return setError('Please fill in all fields');
    }

    try {
      setLoading(true);
      await login(formData.email, formData.password);
      navigate('/dashboard');
    } catch (error) {
      handleLoginError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginError = (error: unknown) => {
    if (error instanceof Error) {
      switch (error.message) {
        case 'Firebase: Error (auth/invalid-credential).':
          setError('Invalid email or password');
          break;
        case 'Firebase: Error (auth/user-disabled).':
          setError('Account disabled');
          break;
        case 'Firebase: Error (auth/too-many-requests).':
          setError('Too many attempts, try again later');
          break;
        default:
          setError('Failed to login');
          console.error(error);
      }
    }
  };

  return (
    <div className={`max-w-md w-full animate-fade-in-up ${className}`}>
      <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
      </Link>
      
      <Card className="w-full shadow-lg border-t-4 border-t-primary">
        <CardHeader className="space-y-1">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <LogIn className="w-5 h-5" />
            </div>
          </div>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {error && (
            <div className="p-3 text-sm text-destructive bg-destructive/15 rounded-lg">
              {error}
            </div>
          )}

          <RoleSelector role={formData.role} onRoleChange={handleRoleChange} />
          
          <LoginForm 
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </CardContent>

        <CardFooter className="border-t pt-6">
          <div className="w-full text-center text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-medium hover:underline">
              Sign up for free
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginCard;