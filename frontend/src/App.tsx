// ===============================================================================
// DizhTime Main App Component
// ===============================================================================
// Purpose: Main application component with routing and global providers
// Author: DizhTime Team <dizhtime@gmail.com>
// Lead: Ajai
// ===============================================================================

import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Theme
import { ThemeProvider } from "./contexts/ThemeContext";
import LoaderDemo from "./pages/LoaderDemo";

// Styles
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import HomeCustomer from "./features/customer/pages/HomeCustomer";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

        <Routes>
          {/* Test Routes */}
          <Route path="/" element={<HomeCustomer />} />
          <Route path="/loaders" element={<LoaderDemo />} />

          {/* Public Routes */}
          {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes with Layout */}
          {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          {/* </Route>  */}
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
          theme="colored"
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
