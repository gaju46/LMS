import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './modules/core/providers/AuthProvider.jsx';
import { ProtectedRoute } from './modules/core/providers/ProtectedRoute.jsx';
import LoginPage from './pages/Login.jsx';
import SignupPage from './pages/Signup.jsx';
import VerifyPage from './pages/VerifyEmail.jsx';
import ResetPage from './pages/ResetPassword.jsx';
import ProfilePage from './pages/Profile.jsx';
import Landing from './pages/Landing.jsx';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Landing/>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          {/* Catch-all: redirect to login if no match */}
          {/* <Route path="*" element={<LoginPage />} /> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
