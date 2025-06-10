//=================================================================================================================
// TEST PAGE
//=================================================================================================================
// This page is for testing various components and functionality
//=================================================================================================================

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import FoodLoader from "../components/FoodLoader";
import { useLoader, loaderConfigs } from "../hooks/useLoader";

const TestPage: React.FC = () => {
  const [showError, setShowError] = useState(false);
  const [showBasicLoader, setShowBasicLoader] = useState(false);
  const [showFoodLoader, setShowFoodLoader] = useState(false);
  const { isLoading, loaderOptions, showLoader, hideLoader } = useLoader();

  // Function to trigger an error for testing error boundary
  const triggerError = () => {
    setShowError(true);
  };

  // Loader test functions
  const testBasicLoader = () => {
    setShowBasicLoader(true);
    setTimeout(() => setShowBasicLoader(false), 3000);
  };

  const testFoodLoader = () => {
    setShowFoodLoader(true);
    setTimeout(() => setShowFoodLoader(false), 5000);
  };

  const testOrderingLoader = () => {
    showLoader(loaderConfigs.orderPlacing);
  };

  const testCookingLoader = () => {
    showLoader(loaderConfigs.cooking);
  };

  const testDeliveryLoader = () => {
    showLoader(loaderConfigs.delivery);
  };

  // This will cause an error when showError is true
  if (showError) {
    throw new Error("This is a test error to demonstrate the Error Boundary!");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🧪 DizhTime Test Page
          </h1>
          <p className="text-xl text-white/80">
            Testing components, error boundaries, and functionality
          </p>
        </div>

        {/* Test Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Error Boundary Test */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              🚨 Error Boundary Test
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Click to trigger an error and see the error boundary in action
            </p>
            <button
              onClick={triggerError}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Trigger Error
            </button>
          </div>

          {/* Navigation Test */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              🧭 Navigation Test
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Test routing between different pages
            </p>
            <div className="space-y-2">
              <Link
                to="/"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-center transition-colors"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="block bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-center transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded text-center transition-colors"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Loader Tests */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              ⏳ Loader Tests
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Test different loading animations
            </p>
            <div className="space-y-2">
              <button
                onClick={testBasicLoader}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded transition-colors text-sm"
              >
                Basic Loader
              </button>
              <button
                onClick={testFoodLoader}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded transition-colors text-sm"
              >
                Food Loader
              </button>
              <button
                onClick={testOrderingLoader}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded transition-colors text-sm"
              >
                Ordering
              </button>
              <button
                onClick={testCookingLoader}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded transition-colors text-sm"
              >
                Cooking
              </button>
              <button
                onClick={testDeliveryLoader}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded transition-colors text-sm"
              >
                Delivery
              </button>
            </div>
          </div>

          {/* API Test */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              🌐 API Test
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Test API connections and data fetching
            </p>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded transition-colors">
              Test API Call
            </button>
          </div>

          {/* Local Storage Test */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              💾 Storage Test
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Test local storage and session management
            </p>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded transition-colors">
              Test Storage
            </button>
          </div>

          {/* Toast Test */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              🍞 Toast Test
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Test notification toasts
            </p>
            <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded transition-colors">
              Show Toast
            </button>
          </div>
        </div>

        {/* System Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-4">
            ℹ️ System Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white/60">Environment:</p>
              <p className="text-white font-mono">{import.meta.env.MODE}</p>
            </div>
            <div>
              <p className="text-white/60">Base URL:</p>
              <p className="text-white font-mono">{window.location.origin}</p>
            </div>
            <div>
              <p className="text-white/60">User Agent:</p>
              <p className="text-white font-mono text-xs">
                {navigator.userAgent}
              </p>
            </div>
            <div>
              <p className="text-white/60">Timestamp:</p>
              <p className="text-white font-mono">{new Date().toISOString()}</p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-flex items-center bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
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

      {/* Render Loaders */}
      {showBasicLoader && (
        <Loader
          message="Testing basic loader..."
          variant="delivery"
          size="large"
        />
      )}

      {showFoodLoader && (
        <FoodLoader
          message="Testing advanced food loader..."
          showProgress={true}
          duration={5}
        />
      )}

      {isLoading && (
        <Loader
          message={loaderOptions.message}
          variant={loaderOptions.variant}
          size="large"
        />
      )}
    </div>
  );
};

export default TestPage;
