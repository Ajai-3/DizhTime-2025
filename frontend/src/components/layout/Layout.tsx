// ===============================================================================
// Layout Component
// ===============================================================================
// Purpose: Main layout wrapper with navigation and footer
// Author: DizhTime Team <dizhtime@gmail.com>
// Lead: Ajai
// ===============================================================================

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
