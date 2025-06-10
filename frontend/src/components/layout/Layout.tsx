//=================================================================================================================
// LAYOUT COMPONENT
//=================================================================================================================
// This component provides the main layout structure for the application
//=================================================================================================================

import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">DizhTime</h1>
            </div>
            <nav className="flex space-x-4">
              <a href="/" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/test" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">
                Test
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm">
              © 2024 DizhTime. Built with ❤️ by DizhTime Team
            </p>
            <p className="text-xs mt-2 text-gray-400">
              Lead: Ajai | Email: dizhtime@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
