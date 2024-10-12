import React from 'react';
import { useUser } from '../context/UserContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useUser();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
