// ===============================================================================
// DizhTime Main App Component
// ===============================================================================
// Purpose: Main application component with routing and global providers
// Author: DizhTime Team <dizhtime@gmail.com>
// Lead: Ajai
// ===============================================================================

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Layout Components
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Styles
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes with Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>

        {/* Global Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="mt-16"
        />
      </div>
    </Router>
  );
};

export default App;
