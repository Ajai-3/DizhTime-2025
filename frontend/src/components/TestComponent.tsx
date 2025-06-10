//=================================================================================================================
// TEST COMPONENT
//=================================================================================================================
// This component displays DizhTime name for project testing
//=================================================================================================================

import React from 'react';

const TestComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
          DizhTime
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          🍕 Food Delivery Platform
        </p>
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
          <p className="text-sm">
            Built with ❤️ by DizhTime Team
          </p>
          <p className="text-xs mt-2">
            Lead: Ajai | Email: dizhtime@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
