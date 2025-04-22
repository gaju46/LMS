import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // send cookies on cross‑site requests
});

// Named exports for granular imports
export const signup = data =>
  api.post('/auth/signup', data);

export const signin = data =>
  api.post('/auth/signin', data);

export const verifyEmail = token =>
  api.post('/auth/verify', { token });

export const requestReset = email =>
  api.post('/auth/request-reset', { email });

export const resetWithToken = payload =>
  api.post('/auth/reset-with-token', payload);

export const refresh = () =>
  api.get('/auth/refresh');

export const getProfile = () =>
  api.get('/auth/profile');

// Default export if you want to pull in the entire service at once
const authService = {
  signup,
  signin,
  verifyEmail,
  requestReset,
  resetWithToken,
  refresh,
  getProfile,
};

export default authService;


