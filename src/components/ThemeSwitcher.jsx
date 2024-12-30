import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const themes = [
    "default",
    "light",
    "dark",
    "cupcake",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (e) => {
    setCurrentTheme(e.target.value);
  };

  return (
    <div className="flex items-center justify-center mt-6">
      <label className="mr-2 text-gray-700 dark:text-gray-200">Choose Theme:</label>
      <select
        value={currentTheme}
        onChange={handleThemeChange}
        className="select select-bordered w-full max-w-xs bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
      >
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcher;
