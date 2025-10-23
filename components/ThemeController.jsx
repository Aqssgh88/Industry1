"use client"

import * as React from "react"
import { FiMoon, FiSun } from "react-icons/fi"  

export function ThemeController() {
    const [isDark, setIsDark] = React.useState(false);

    // Initialize theme immediately on first render
    React.useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            // Apply user preference
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
            setIsDark(savedTheme === "dark");
        } else {
            // Agar pehli dafa aa raha hai aur kuch save nahi hai, system preference check karo
            const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.classList.toggle("dark", isSystemDark);
            localStorage.setItem("theme", isSystemDark ? "dark" : "light");
            setIsDark(isSystemDark);
        }
    }, []);

    const controlTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
        setIsDark(newTheme === "dark");
    };

    return (
        <button 
            onClick={controlTheme} 
            className="text-2xl text-main-color hover:text-[#888] transition-colors duration-300 cursor-pointer"
        >
            {isDark ? <FiSun /> : <FiMoon />}
        </button>
    )
}
