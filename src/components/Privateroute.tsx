import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/Authcontext';
import React from 'react';

const PrivateRoute: React.FC = () => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>; // Or your custom loader
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;