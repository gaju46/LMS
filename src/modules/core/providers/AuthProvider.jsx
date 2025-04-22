import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {
  signin as apiSignin,
  refresh as apiRefresh,
  getProfile as apiGetProfile
} from '../services/authService.js';


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);

  // On mount, try to refresh via cookie
  useEffect(() => {
    (async () => {
      try {
        const res = await apiRefresh();
        setAccessToken(res.data.accessToken);
      } catch {
        // no valid session
      }
    })();
  }, []);

  // When token changes, fetch profile
  useEffect(() => {
    if (!accessToken) return setUser(null);
    (async () => {
      try {
        const res = await apiGetProfile();
        setUser(res.data.data);
      } catch (err) {
        console.error('Failed to load profile', err);
      }
    })();
  }, [accessToken]);

  // expose login
  const signin = async ({ email, password }) => {
    const res = await apiSignin({ email, password });
    setAccessToken(res.data.accessToken);
    return res;
  };

  // expose logout
  const logout = async () => {
    // hit your logout endpoint to clear refresh cookie
    await axios.post('/auth/logout', {}, { withCredentials: true }).catch(() => {});
    setAccessToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// custom hook for convenience
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
