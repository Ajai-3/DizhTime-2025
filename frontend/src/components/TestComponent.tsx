//=================================================================================================================
// TEST COMPONENT
//=================================================================================================================
// This component displays DizhTime name for project testing
//=================================================================================================================

import React from "react";
import { useNavigate } from "react-router-dom";

const TestComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/loaders");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-9xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
          <span className="text-main-color">Dizh</span>
          <span>Time</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          🍽️ Food Delivery Platform
        </p>
        {/* Loader Demo Button */}
        <div className="mb-8">
          <button
            onClick={handleNavigate}
            className="bg-main-color hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            🎨 View Beautiful Loaders
          </button>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4">
            🚀 Project Status
          </h2>
          <div className="space-y-2 text-left">
            <div className="flex items-center justify-between">
              <span className="text-white">Frontend Setup:</span>
              <span className="text-green-300">✅ Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Monorepo Structure:</span>
              <span className="text-green-300">✅ Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Dependencies:</span>
              <span className="text-green-300">✅ Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Features Structure:</span>
              <span className="text-green-300">✅ Complete</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-white/80">
          <p className="text-sm">Built with ❤️ by DizhTime Team</p>
          <p className="text-xs mt-2">
            Lead: Ajai | Email: ajaipjayan@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
