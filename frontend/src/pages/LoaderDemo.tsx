//=================================================================================================================
// LOADER DEMO PAGE
//=================================================================================================================
// Showcase all different types of loaders for DizhTime with red theme and deep dark mode
//=================================================================================================================

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import Loader from "../components/Loader";
import FoodLoader from "../components/FoodLoader";

const LoaderDemo: React.FC = () => {
  const [activeLoader, setActiveLoader] = useState<string | null>(null);
  const { isDark } = useTheme();

  const showLoader = (type: string, duration = 4000) => {
    setActiveLoader(type);
    setTimeout(() => setActiveLoader(null), duration);
  };

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className={`text-5xl font-bold mb-4 ${
              isDark
                ? "bg-gradient-to-r from-main-color to-green-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-main-color to-green-600 bg-clip-text text-transparent"
            }`}
          >
            🎨 DizhTime Loaders
          </h1>
          <p
            className={`text-xl mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            Beautiful Food Delivery Themed Loading Animations
          </p>
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            Click any button to see the loader in action!
          </p>
        </div>

        {/* Loader Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Delivery Loader */}
          <div
            className={`rounded-xl shadow-lg p-6 border-2 transition-colors ${
              isDark
                ? "bg-gray-800 border-main-color hover:border-green-400"
                : "bg-white border-green-200 hover:border-main-color"
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3
                className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Delivery Loader
              </h3>
              <p
                className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Animated delivery truck with moving progress
              </p>
              <button
                onClick={() => showLoader("delivery")}
                className="w-full bg-main-color hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Show Delivery
              </button>
            </div>
          </div>

          {/* Cooking Loader */}
          <div
            className={`rounded-xl shadow-lg p-6 border-2 transition-colors ${
              isDark
                ? "bg-gray-800 border-green-600 hover:border-green-400"
                : "bg-white border-green-200 hover:border-green-400"
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3
                className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Cooking Loader
              </h3>
              <p
                className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Chef cooking with steam animation
              </p>
              <button
                onClick={() => showLoader("cooking")}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Show Cooking
              </button>
            </div>
          </div>

          {/* Ordering Loader */}
          <div
            className={`rounded-xl shadow-lg p-6 border-2 transition-colors ${
              isDark
                ? "bg-gray-800 border-blue-600 hover:border-blue-400"
                : "bg-white border-blue-200 hover:border-blue-400"
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🛒</div>
              <h3
                className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Ordering Loader
              </h3>
              <p
                className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Shopping cart with bouncing items
              </p>
              <button
                onClick={() => showLoader("ordering")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Show Ordering
              </button>
            </div>
          </div>

          {/* Pizza Spinner */}
          <div
            className={`rounded-xl shadow-lg p-6 border-2 transition-colors ${
              isDark
                ? "bg-gray-800 border-yellow-600 hover:border-yellow-400"
                : "bg-white border-yellow-200 hover:border-yellow-400"
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🍕</div>
              <h3
                className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Pizza Spinner
              </h3>
              <p
                className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Spinning pizza with toppings
              </p>
              <button
                onClick={() => showLoader("default")}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Show Pizza
              </button>
            </div>
          </div>

          {/* Advanced Food Loader */}
          <div
            className={`rounded-xl shadow-lg p-6 border-2 transition-colors ${
              isDark
                ? "bg-gray-800 border-purple-600 hover:border-purple-400"
                : "bg-white border-purple-200 hover:border-purple-400"
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3
                className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Advanced Loader
              </h3>
              <p
                className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Full experience with progress & steps
              </p>
              <button
                onClick={() => showLoader("advanced", 6000)}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Show Advanced
              </button>
            </div>
          </div>

          {/* Quick Loader */}
          <div
            className={`rounded-xl shadow-lg p-6 border-2 transition-colors ${
              isDark
                ? "bg-gray-800 border-pink-600 hover:border-pink-400"
                : "bg-white border-pink-200 hover:border-pink-400"
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3
                className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-800"}`}
              >
                Quick Loader
              </h3>
              <p
                className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Small & fast for quick actions
              </p>
              <button
                onClick={() => showLoader("small", 2000)}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Show Quick
              </button>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/"
            className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
              isDark
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-gray-800 text-white hover:bg-gray-900"
            }`}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Render Active Loaders */}
      {activeLoader === "delivery" && (
        <Loader
          message="Your food is on the way! 🚚"
          variant="delivery"
          size="large"
        />
      )}

      {activeLoader === "cooking" && (
        <Loader
          message="Chef is preparing your delicious meal! 👨‍🍳"
          variant="cooking"
          size="large"
        />
      )}

      {activeLoader === "ordering" && (
        <Loader
          message="Processing your order... 🛒"
          variant="ordering"
          size="large"
        />
      )}

      {activeLoader === "default" && (
        <Loader
          message="Making your perfect pizza! 🍕"
          variant="default"
          size="large"
        />
      )}

      {activeLoader === "small" && (
        <Loader message="Quick action..." variant="delivery" size="small" />
      )}

      {activeLoader === "advanced" && (
        <FoodLoader
          message="Complete food delivery experience!"
          showProgress={true}
          duration={6}
        />
      )}
    </div>
  );
};

export default LoaderDemo;
