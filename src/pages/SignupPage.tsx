import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignupForm } from '../components/auth/SignupForm';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignupSuccess = () => {
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center p-4">
      <SignupForm onSuccess={handleSignupSuccess} />
    </div>
  );
};