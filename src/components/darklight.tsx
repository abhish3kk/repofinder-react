"use client"
import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react'

const Darklight = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  useEffect(() => { 
    if (darkMode) {
      localStorage.setItem("theme", "dark")
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light")
      document.documentElement.removeAttribute("data-theme")
    }
  }, [darkMode]);
  return (
    <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md"
      >
        {darkMode ? <SunIcon className="h-6 w-6 text-yellow-500" /> : <MoonIcon className="h-6 w-6 text-gray-800" />}
      </button>
  )
}

export default Darklight