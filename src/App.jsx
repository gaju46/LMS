import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./modules/core/providers/AuthProvider.jsx";
import { ProtectedRoute } from "./modules/core/routes/ProtectedRoute.jsx";
import LoginPage from "./pages/Login.jsx";
import SignupPage from "./pages/Signup.jsx";
import VerifyPage from "./pages/VerifyEmail.jsx";
import ResetPage from "./pages/ResetPassword.jsx";
import ProfilePage from "./pages/Profile.jsx";
import Landing from "./pages/Landing.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";
// import CoursePage from "./pages/CoursePage.jsx";
import ProfileProvider from "./modules/core/providers/ProfileProvider.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <ProfileProvider data={null}>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/reset" element={<ResetPage />} />
          {/* <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <CoursePage/>
                <ProfilePage />
                <AdminDashboard />
              </ProtectedRoute>
            }
          /> */}
          {/* Catch-all: redirect to login if no match */}
          {/* <Route path="*" element={<LoginPage />} /> */}
        </Routes>
        </ProfileProvider>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;
