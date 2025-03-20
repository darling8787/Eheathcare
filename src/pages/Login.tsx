
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginCard from '@/components/login/LoginCard';

const Login = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/50 pt-24 pb-16 px-4">
        <LoginCard />
      </main>
      <Footer />
    </>
  );
};

export default Login;
