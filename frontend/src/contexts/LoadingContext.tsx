//=================================================================================================================
// LOADING CONTEXT
//=================================================================================================================
// Global loading state management for the entire application
//=================================================================================================================

import React, { createContext, useContext, useState, ReactNode } from 'react';
import FoodLoader from '../components/FoodLoader';

interface LoadingContextType {
  isLoading: boolean;
  message: string;
  showLoader: (message?: string) => void;
  hideLoader: () => void;
  showLoaderWithDelay: (message?: string, delay?: number) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('Loading...');

  const showLoader = (msg = 'Loading...') => {
    setMessage(msg);
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  const showLoaderWithDelay = (msg = 'Loading...', delay = 2000) => {
    showLoader(msg);
    setTimeout(() => {
      hideLoader();
    }, delay);
  };

  return (
    <LoadingContext.Provider value={{
      isLoading,
      message,
      showLoader,
      hideLoader,
      showLoaderWithDelay
    }}>
      {children}
      {isLoading && (
        <FoodLoader 
          message={message}
          showProgress={true}
          duration={3}
        />
      )}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
