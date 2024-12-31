// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import  SignUpPage  from './components/SignUpPage'; // Assuming LoginPage is the login component
import { ForgotPasswordPage } from './components/ForgotPasswordPage';
import ProtectedRoute from './ProtectedRoute';
import TaskMasterLanding from './components/TaskMasterLanding.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <TaskMasterLanding />
                        </ProtectedRoute>
                    }
                />
      </Routes>
    </Router>
  );
}

export default App;
