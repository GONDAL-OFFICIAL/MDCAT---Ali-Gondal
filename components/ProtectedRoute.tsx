
import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';

interface ProtectedRouteProps {
  children: ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useQuiz();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
