import { Navigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider.jsx';

export function ProtectedRoute({ children }) {
  const { accessToken } = useAuth();

  if (!accessToken) {
    // not logged in → go to login
    return <Navigate to="/login" replace />;
  }

  return children;
}
