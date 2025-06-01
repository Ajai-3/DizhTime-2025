// ===============================================================================
// Home Page Component
// ===============================================================================
// Purpose: Landing page with hero section and featured restaurants
// Author: DizhTime Team <dizhtime@gmail.com>
// Lead: Ajai
// ===============================================================================

import React from "react";
import { Link } from "react-router-dom";
import {
  ClockIcon,
  TruckIcon,
  StarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">DIZH</span>
              <span>TIME</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your favorite food delivered fast, fresh, and right to your
              doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/restaurants"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Order Now
              </Link>
              <Link
                to="/register"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose DizhTime?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make food delivery simple, fast, and reliable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fast Delivery */}
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Get your food delivered in 30 minutes or less
              </p>
            </div>

            {/* Real-time Tracking */}
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Live Tracking
              </h3>
              <p className="text-gray-600">
                Track your order in real-time from kitchen to your door
              </p>
            </div>

            {/* Quality Food */}
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Food
              </h3>
              <p className="text-gray-600">
                Fresh ingredients from top-rated restaurants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Restaurants Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Restaurants
            </h2>
            <p className="text-lg text-gray-600">
              Discover amazing food from local favorites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restaurant Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Restaurant Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mario's Italian Kitchen
                </h3>
                <p className="text-gray-600 mb-4">
                  Authentic Italian cuisine with fresh ingredients
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      4.5 (120 reviews)
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">30-45 min</span>
                </div>
              </div>
            </div>

            {/* Restaurant Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Restaurant Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Spice Garden
                </h3>
                <p className="text-gray-600 mb-4">
                  Delicious Indian and Asian fusion dishes
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      4.7 (89 reviews)
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">25-40 min</span>
                </div>
              </div>
            </div>

            {/* Restaurant Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Restaurant Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Burger Palace
                </h3>
                <p className="text-gray-600 mb-4">
                  Gourmet burgers and crispy fries
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      4.3 (156 reviews)
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">20-35 min</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/restaurants"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              View All Restaurants
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to order?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers</p>
          <Link
            to="/register"
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
