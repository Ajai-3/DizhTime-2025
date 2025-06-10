//=================================================================================================================
// USE LOADER HOOK
//=================================================================================================================
// Custom hook for managing loader states across the application
//=================================================================================================================

import { useState, useEffect } from 'react';

interface LoaderOptions {
  message?: string;
  duration?: number;
  variant?: 'delivery' | 'cooking' | 'ordering' | 'default';
  showProgress?: boolean;
}

export const useLoader = (initialLoading = false) => {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [loaderOptions, setLoaderOptions] = useState<LoaderOptions>({});

  const showLoader = (options: LoaderOptions = {}) => {
    setLoaderOptions(options);
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  const showLoaderWithTimeout = (timeout: number, options: LoaderOptions = {}) => {
    showLoader(options);
    setTimeout(() => {
      hideLoader();
    }, timeout);
  };

  // Auto-hide loader after duration if specified
  useEffect(() => {
    if (isLoading && loaderOptions.duration) {
      const timer = setTimeout(() => {
        hideLoader();
      }, loaderOptions.duration * 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, loaderOptions.duration]);

  return {
    isLoading,
    loaderOptions,
    showLoader,
    hideLoader,
    showLoaderWithTimeout
  };
};

// Predefined loader configurations
export const loaderConfigs = {
  orderPlacing: {
    message: "Placing your order...",
    variant: 'ordering' as const,
    duration: 2
  },
  cooking: {
    message: "Chef is preparing your meal...",
    variant: 'cooking' as const,
    duration: 3
  },
  delivery: {
    message: "Your food is on the way!",
    variant: 'delivery' as const,
    duration: 4
  },
  pageLoad: {
    message: "Loading DizhTime...",
    variant: 'default' as const,
    duration: 1.5
  }
};
