import React from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md transition"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
