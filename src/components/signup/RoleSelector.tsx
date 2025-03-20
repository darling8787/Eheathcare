
import { Book, GraduationCap, ShieldCheck } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

interface RoleSelectorProps {
  role: string;
  onRoleChange: (value: string) => void;
}

const RoleSelector = ({ role, onRoleChange }: RoleSelectorProps) => {
  return (
    <Tabs defaultValue={role} className="w-full" onValueChange={onRoleChange}>
      <TabsList className="grid grid-cols-3 mb-6">
        <TabsTrigger value="student">Student</TabsTrigger>
        <TabsTrigger value="teacher">Teacher</TabsTrigger>
        <TabsTrigger value="admin">Admin</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export const getRoleIcon = (role: string) => {
  switch (role) {
    case 'student':
      return <Book className="w-5 h-5" />;
    case 'teacher':
      return <GraduationCap className="w-5 h-5" />;
    case 'admin':
      return <ShieldCheck className="w-5 h-5" />;
    case 'admin':
      return <ShieldCheck className="w-5 h-5" />;
    default:
      return <Book className="w-5 h-5" />;
  }
};

export default RoleSelector;
