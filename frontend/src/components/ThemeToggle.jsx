import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
    const [theme, toggleTheme] = useDarkMode();

    return (
        <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
    );
};

export default ThemeToggle;