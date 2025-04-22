import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export function ProtectedRoute({ children }) {
  const { accessToken } = useAuth();

  if (!accessToken) {
    // not logged in → go to login
    return <Navigate to="/login" replace />;
  }

  return children;
}
