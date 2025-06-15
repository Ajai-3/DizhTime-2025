//=================================================================================================================
// FOOD LOADER COMPONENT
//=================================================================================================================
// Advanced food delivery themed loader with multiple animations
//=================================================================================================================

import React, { useState, useEffect } from "react";

interface FoodLoaderProps {
  message?: string;
  showProgress?: boolean;
  duration?: number; // in seconds
}

const FoodLoader: React.FC<FoodLoaderProps> = ({
  message = "Preparing your order...",
  showProgress = true,
  duration = 3,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!showProgress) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (duration * 10);
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, showProgress]);

  return (
    <div className="fixed inset-0 bg-gray-900/95 dark:bg-black/95 backdrop-blur-xl flex items-center justify-center z-50">
      <div className="text-center p-8 max-w-lg mx-auto">
        {/* DizhTime Logo with Animation */}
        <div className="mb-12">
          <div className="relative">
            <h1 className="text-5xl font-bold mb-3">
              <span className="text-main-color">Dizh</span>
              <span className="text-white">Time</span>
            </h1>
          </div>
          <p className="text-green-400 text-lg font-medium tracking-wide">
            🍽️ Premium Food Delivery Experience
          </p>
        </div>

        {/* Epic Animation Container */}
        <div className="relative mb-12">
          {/* 3D Delivery Animation */}
          <div className="relative h-32 mb-6">
            {/* Glowing Road */}
            <div className="absolute bottom-0 w-full h-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full overflow-hidden shadow-lg">
              <div
                className="h-full bg-gradient-to-r from-main-color via-green-400 to-green-500 rounded-full transition-all duration-100 ease-out shadow-lg"
                style={{
                  width: `${progress}%`,
                  boxShadow: "0 0 20px rgba(149, 188, 29, 0.6)",
                }}
              ></div>
              {/* Road shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>

            {/* Progress Percentage - Right Side Under Progress Bar */}
            <div className="absolute -bottom-6 right-0">
              <span className="text-lg font-bold text-main-color filter drop-shadow-lg">
                {Math.round(progress)}%
              </span>
            </div>

            {/* Epic 3D Truck */}
            <div
              className="absolute bottom-3 transition-all duration-100 ease-out transform"
              style={{
                left: `${progress * 0.85}%`,
                transform: `translateX(-50%)`,
              }}
            >
              <div className="relative">
                {/* Main Truck Body with 3D effect */}
                <div className="w-16 h-10 bg-gradient-to-br from-main-color to-green-600 rounded-xl relative shadow-2xl transform hover:scale-105 transition-transform">
                  {/* Truck cabin */}
                  <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-tl-xl rounded-br-lg"></div>
                  {/* Windshield */}
                  <div className="absolute top-1 left-1 w-4 h-3 bg-blue-200 rounded opacity-80"></div>
                  {/* Wheels with rotation */}
                  <div className="absolute bottom-0 left-1 w-2 h-2 bg-gray-800 rounded-full animate-spin"></div>
                  <div className="absolute bottom-0 right-1 w-2 h-2 bg-gray-800 rounded-full animate-spin"></div>

                  {/* Premium Food Box */}
                  <div className="absolute -top-3 -right-2 w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-lg animate-pulse shadow-lg">
                    <div className="absolute inset-0.5 bg-gradient-to-br from-red-300 to-red-500 rounded"></div>
                    <div className="absolute top-1 left-1 w-1 h-1 bg-yellow-300 rounded-full"></div>
                  </div>

                  {/* Exhaust smoke */}
                  <div className="absolute -left-2 top-2">
                    {[...Array(2)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-gray-400 rounded-full animate-ping opacity-60"
                        style={{
                          left: `${-i * 4}px`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: "1s",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Epic Speed Lines */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-0.5 bg-gradient-to-r from-main-color to-transparent rounded-full mb-1 animate-pulse"
                      style={{
                        animationDelay: `${i * 0.15}s`,
                        opacity: 0.8 - i * 0.15,
                        transform: `translateX(${-i * 2}px)`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Food Items */}
          <div className="absolute inset-0 pointer-events-none">
            {["🍽️", "🍔", "🍟", "🥤", "🍰"].map((emoji, index) => (
              <div
                key={index}
                className="absolute text-2xl animate-bounce"
                style={{
                  left: `${20 + index * 15}%`,
                  top: `${10 + (index % 2) * 20}%`,
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: "2s",
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>

        {/* Custom Message */}
        <div className="mb-6">
          <p className="text-gray-300 font-medium text-lg">{message}</p>
        </div>

        {/* Decorative Food Elements */}
        <div className="absolute top-4 left-4 text-green-200 text-6xl opacity-20 animate-bounce">
          🍽️
        </div>
        <div className="absolute bottom-4 right-4 text-green-200 text-4xl opacity-20 animate-bounce">
          🍔
        </div>
      </div>
    </div>
  );
};

export default FoodLoader;
