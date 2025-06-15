//=================================================================================================================
// SIMPLE THEME SWITCHER
//=================================================================================================================
// Simple button to toggle dark/light theme - applies to ALL components
//=================================================================================================================

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';

const ThemeSwitcher: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-main-color text-white hover:bg-green-600 transition-all duration-300 shadow-lg hover:scale-110"
    >
      {isDark ? <BedtimeIcon /> : <BrightnessMediumIcon />}
    </button>
  );
};

export default ThemeSwitcher;
