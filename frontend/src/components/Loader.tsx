//=================================================================================================================
// LOADER COMPONENT
//=================================================================================================================
// Beautiful food delivery themed loader with main-color theme
//=================================================================================================================

import React from "react";

interface LoaderProps {
  message?: string;
  variant?: "delivery" | "cooking" | "ordering" | "default";
  size?: "small" | "medium" | "large";
}

const Loader: React.FC<LoaderProps> = ({
  message = "Loading...",
  variant = "default",
  size = "medium",
}) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-16 h-16",
    large: "w-24 h-24",
  };

  const containerSizes = {
    small: "p-4",
    medium: "p-6",
    large: "p-8",
  };

  const renderDeliveryLoader = () => (
    <div className="relative">
      {/* Delivery Bike Animation */}
      <div className="relative">
        {/* Road */}
        <div className="absolute bottom-0 w-full h-1 bg-gray-300 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400 to-main-color rounded-full animate-pulse"></div>
        </div>

        {/* Bike */}
        <div className="relative animate-bounce">
          <svg
            className={`${sizeClasses[size]} text-main-color`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
          </svg>

          {/* Delivery Box */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-main-color rounded-sm animate-pulse">
            <div className="w-full h-full bg-green-400 rounded-sm transform rotate-12"></div>
          </div>
        </div>

        {/* Speed Lines */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-0.5 bg-green-300 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCookingLoader = () => (
    <div className="relative">
      {/* Cooking Pot */}
      <div className="relative">
        <svg
          className={`${sizeClasses[size]} text-main-color`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.1 13.34L8.5 12.5C8.8 11.9 9.4 11.5 10 11.5S11.2 11.9 11.5 12.5L11.9 13.34C12.2 13.9 12.8 14.3 13.4 14.3H15C16.1 14.3 17 15.2 17 16.3V18C17 19.1 16.1 20 15 20H9C7.9 20 7 19.1 7 18V16.3C7 15.2 7.9 14.3 9 14.3H10.6C11.2 14.3 11.8 13.9 12.1 13.34Z" />
        </svg>

        {/* Steam Animation */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-6 bg-gradient-to-t from-green-200 to-transparent rounded-full animate-pulse opacity-70"
              style={{
                left: `${i * 8 - 8}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: "2s",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOrderingLoader = () => (
    <div className="relative">
      {/* Shopping Cart */}
      <div className="relative animate-pulse">
        <svg
          className={`${sizeClasses[size]} text-main-color`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5H5.21L4.27 3H1ZM17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" />
        </svg>

        {/* Items in cart */}
        <div className="absolute top-2 right-2">
          <div className="w-2 h-2 bg-main-color rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );

  const renderDefaultLoader = () => (
    <div className="relative">
      {/* Spinning Food */}
      <div className="relative">
        <svg
          className={`${sizeClasses[size]} text-main-color animate-spin`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            className="text-green-200"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="12"
            r="8"
            className="text-green-400"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="12"
            r="6"
            className="text-main-color"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            className="text-green-600"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="12"
            r="2"
            className="text-green-700"
            fill="currentColor"
          />
        </svg>

        {/* Food Items */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 bg-red-500 rounded-full absolute top-4 left-6 animate-pulse"></div>
          <div
            className="w-1 h-1 bg-green-500 rounded-full absolute top-6 right-5 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-1 h-1 bg-yellow-500 rounded-full absolute bottom-5 left-5 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case "delivery":
        return renderDeliveryLoader();
      case "cooking":
        return renderCookingLoader();
      case "ordering":
        return renderOrderingLoader();
      default:
        return renderDefaultLoader();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/90 dark:bg-black/90 backdrop-blur-lg flex items-center justify-center z-50">
      <div className={`text-center ${containerSizes[size]}`}>
        {/* Logo */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold  mb-2">
            <span className="text-main-color">Dizh </span>
            <span className="text-white">Time</span>
          </h1>
          <p className="text-gray-500 text-sm">🍽️ Food Delivery Platform</p>
        </div>

        {/* Animated Loader */}
        <div className="flex justify-center mb-6">{renderLoader()}</div>

        {/* Message */}
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            {message}
          </p>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-main-color rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Fun Food Facts */}
        <div className="mt-6 text-xs text-gray-400 max-w-xs mx-auto">
          <p className="animate-pulse">
            Hot meals. Delivered fast, no games. No cold bites, no delay.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
