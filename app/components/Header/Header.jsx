"use client";

import Link from "next/link";
import "./style.css";
import { useEffect, useState } from "react";
import { navBar } from "@/app/data/navBar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark"); // default theme is 'dark'

  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      const currentMode = window.localStorage.getItem("currentMode") || "dark";
      setTheme(currentMode);
      document.documentElement.classList.add(currentMode);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      document.documentElement.classList.toggle("light", theme === "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    window.localStorage.setItem("currentMode", newTheme);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      onClick={() => {
        if (isMenuOpen) setIsMenuOpen(false);
      }}
      className="flex relative items-center justify-between sm:justify-around px-9 mt-5 pb-3"
    >
      <button
        onClick={handleMenuToggle}
        className={`icon-th-menu block z-50 sm:hidden active:scale-90 w-10 h-10 rounded-full border border-blue dark:border-opacityorange shadow-3xl duration-300 text-xl bg-bgHeaderlight dark:bg-bgHeader text-subtitle dark:text-sub-title-light hover:text-titlelight hover:border-blueElzero dark:hover:text-title dark:hover:border-orange ${
          isMenuOpen ? "icon-close fixed" : "icon-th-menu"
        }`}
      />

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`popupright bg-primarylight dark:bg-popupMenu backdrop-blur fixed overflow-hidden h-full w-1/2 top-0 left-0 z-40 duration-500 sm:hidden ${
          isMenuOpen ? "opacity-100 clip max-w-96" : "opacity-0 notclip w-1/2"
        }`}
      >
        <ul className="mt-20 pl-5">
          {navBar.map((item, i) => (
            <li
              key={i}
              className="border-b py-3 border-border dark:border-borderlight hover:pl-1 duration-300"
            >
              <Link
                href={item.url != "/" ? `/pages/${item.url}` : item.url}
                className="hover:text-blueElzero text-titlelight dark:text-title dark:hover:text-orange transition-all duration-300 text-xl w-full block"
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <nav className="py-3 px-6 rounded-full shadow-3xl hidden sm:block mr-2 bg-bgHeaderlight dark:bg-bgHeader">
        <ul className="flex gap-4">
          {navBar.map((item, i) => (
            <li key={i}>
              <Link
                href={item.url != "/" ? `/pages/${item.url}` : item.url}
                className="hover:text-blueElzero opacity-90 text-sm font-medium transition-all duration-300 text-titlelight dark:text-title dark:hover:text-orange"
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="icon-mode active:scale-90 text-xl w-10 h-10 rounded-full border shadow-3xl duration-300 bg-bgHeaderlight dark:bg-bgHeader dark:text-opacityorange dark:hover:text-orange dark:text-sub-title-light text-subtitle opacity-90 hover:opacity-100 border-blue hover:border-blueElzero hover:text-blueElzero dark:border-opacityorange dark:hover:border-orange"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <span className="icon-sun" />
        ) : (
          <span className="icon-moon-o" />
        )}
      </button>
    </header>
  );
}

export default Header;
