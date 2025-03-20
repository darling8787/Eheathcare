
import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getRoleIcon } from '../signup/RoleSelector';
import ClipLoader from "react-spinners/ClipLoader";

interface FormData {
  email: string;
  password: string;
  role: string;
}

interface LoginFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

const LoginForm = ({
  formData,
  handleChange,
  handleSubmit,
  loading
}: LoginFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="w-5 h-5 text-muted-foreground" />
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Email"
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
            <Lock className="w-5 h-5 text-muted-foreground" />
          </div>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            disabled={loading}
            className="pl-10"
            required
          />
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <div className="inline-flex items-center justify-center">
            {getRoleIcon(formData.role)}
            <span className="ml-1 text-muted-foreground">
              Logging in as {formData.role.charAt(0).toUpperCase() + formData.role.slice(1)}
            </span>
          </div>
        </div>
        <Link to="/forgot-password" className="text-primary hover:underline">
          Forgot Password?
        </Link>
      </div>
      
      <Button type="submit" className="w-full rounded-lg" disabled={loading}>
        <LogIn className="mr-2 w-4 h-4" /> {loading ? 'Logging in...' : 'Login'} {loading && <ClipLoader color='white' size={20} />}
      </Button>
    </form>
  );
};

export default LoginForm;
