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
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: "🛒", text: "Taking your order", color: "text-blue-500" },
    { icon: "👨‍🍳", text: "Chef is cooking", color: "text-green-500" },
    { icon: "📦", text: "Packing your food", color: "text-yellow-500" },
    { icon: "🚚", text: "Out for delivery", color: "text-main-color" },
    { icon: "🎉", text: "Almost there!", color: "text-purple-500" },
  ];

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

  useEffect(() => {
    const stepInterval = setInterval(
      () => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      },
      (duration * 1000) / steps.length
    );

    return () => clearInterval(stepInterval);
  }, [duration, steps.length]);

  return (
    <div className="fixed inset-0 bg-gray-900/90 dark:bg-black/90 backdrop-blur-lg flex items-center justify-center z-50">
      <div className="text-center p-8 max-w-md mx-auto">
        {/* DizhTime Logo */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-main-color to-green-600 bg-clip-text text-transparent mb-2">
            DizhTime
          </h1>
          <p className="text-green-600 text-sm font-medium">
            🍽️ Delicious Food, Fast Delivery
          </p>
        </div>

        {/* Main Animation Container */}
        <div className="relative mb-8">
          {/* Delivery Truck Animation */}
          <div className="relative h-24 mb-4">
            {/* Road */}
            <div className="absolute bottom-0 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-main-color rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Animated Truck */}
            <div
              className="absolute bottom-2 transition-all duration-1000 ease-in-out"
              style={{ left: `${Math.min(progress, 85)}%` }}
            >
              <div className="relative">
                {/* Truck Body */}
                <div className="w-12 h-8 bg-main-color rounded-lg relative animate-bounce">
                  {/* Truck Details */}
                  <div className="absolute top-1 left-1 w-2 h-2 bg-green-300 rounded"></div>
                  <div className="absolute bottom-1 left-1 w-1 h-1 bg-gray-800 rounded-full"></div>
                  <div className="absolute bottom-1 right-1 w-1 h-1 bg-gray-800 rounded-full"></div>

                  {/* Food Box */}
                  <div className="absolute -top-2 -right-1 w-3 h-3 bg-red-500 rounded-sm animate-pulse">
                    <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 rounded-sm"></div>
                  </div>
                </div>

                {/* Speed Lines */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-0.5 bg-green-300 rounded-full mb-1 animate-pulse"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        opacity: 0.7 - i * 0.2,
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

        {/* Current Step Indicator */}
        <div className="mb-6">
          <div
            className={`text-4xl mb-2 ${steps[currentStep].color} animate-pulse`}
          >
            {steps[currentStep].icon}
          </div>
          <p className="text-gray-700 font-medium text-lg">
            {steps[currentStep].text}
          </p>
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 via-main-color to-green-600 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {Math.round(progress)}% Complete
            </p>
          </div>
        )}

        {/* Custom Message */}
        <div className="mb-6">
          <p className="text-gray-600 font-medium">{message}</p>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-1 mt-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-main-color rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Fun Facts Carousel */}
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-green-200">
          <div className="text-xs text-gray-600">
            <p className="font-medium text-main-color mb-1">💡 Fun Fact:</p>
            <p className="animate-pulse">
              {currentStep === 0 &&
                "The first online food order was placed in 1994!"}
              {currentStep === 1 &&
                "Professional chefs can prepare 200+ meals per hour!"}
              {currentStep === 2 &&
                "Proper food packaging keeps meals hot for 45 minutes!"}
              {currentStep === 3 &&
                "Average delivery time has improved by 40% in recent years!"}
              {currentStep === 4 && "You're about to enjoy an amazing meal! 🎉"}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 text-green-200 text-6xl opacity-20 animate-spin-slow">
          🍽️
        </div>
        <div className="absolute bottom-4 right-4 text-green-200 text-4xl opacity-20 animate-bounce">
          🍔
        </div>
      </div>

      {/* Custom CSS for slow spin */}
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FoodLoader;
