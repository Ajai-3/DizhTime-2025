//=================================================================================================================
// SIMPLE THEME SWITCHER
//=================================================================================================================
// Simple button to toggle dark/light theme - applies to ALL components
//=================================================================================================================

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-main-color text-white hover:bg-green-600 transition-all duration-300 shadow-lg hover:scale-110"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeSwitcher;
