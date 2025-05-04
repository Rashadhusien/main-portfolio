"use client";

import Link from "next/link";
import "./style.css";
import { useEffect, useState } from "react";
import { navBar } from "@/app/data/navBar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

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

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 160) {
      // Scrolling down
      setShow(false);
    } else {
      // Scrolling up
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      onClick={() => {
        if (isMenuOpen) setIsMenuOpen(false);
      }}
      className={` sticky top-0 left-0 w-full mx-auto z-20  bg-transparent duration-500  overflow-hidden flex  items-center  justify-between sm:justify-around px-9 pt-5 pb-3   ${
        show ? "-translate-y-[20] " : " -translate-y-96 "
      }`}
    >
      <button
        onClick={handleMenuToggle}
        className={`icon-th-menu block z-50 sm:hidden active:scale-90 w-10 h-10 rounded-full border border-blue dark:border-opacityorange shadow-3xl duration-300 text-xl bg-bgHeaderlight dark:bg-box text-subtitle dark:text-sub-title-light hover:text-titlelight hover:border-orange dark:hover:text-title dark:hover:border-orange ${
          isMenuOpen ? "icon-close fixed" : "icon-th-menu"
        }`}
      />
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`popupright bg-primarylight dark:bg-popupMenu backdrop-blur fixed overflow-hidden h-full w-1/2 top-0 left-0 z-40 duration-500 sm:hidden ${
          isMenuOpen ? "opacity-100 clip max-w-96" : "opacity-0 notclip w-1/2"
        }`}
      >
        <ul className="mt-20 pl-5  ">
          {navBar.map((item, i) => (
            <li
              key={i}
              className="border-b py-3 border-border dark:border-borderlight hover:pl-1 duration-300"
            >
              <Link
                href={item.url != "/" ? `/pages/${item.url}` : item.url}
                className=" hover:text-orange cursor-pointer text-titlelight dark:text-title dark:hover:text-orange transition-all duration-300 text-xl w-full block"
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <nav className="py-3 px-6 rounded-full shadow-3xl hidden sm:block mr-2 bg-bgHeaderlight dark:bg-box">
        <ul className="flex gap-4">
          {navBar.map((item, i) => (
            <li key={i}>
              <Link
                href={item.url != "/" ? `/pages/${item.url}` : item.url}
                className="hover:text-orange  cursor-pointer opacity-90 text-sm font-medium transition-all duration-300 text-titlelight dark:text-title dark:hover:text-orange"
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="icon-mode active:scale-90 text-xl w-10 h-10 rounded-full border shadow-3xl duration-300 bg-bgHeaderlight dark:bg-box dark:text-opacityorange dark:hover:text-orange  text-subtitle opacity-90 hover:opacity-100 border-blue hover:border-orange hover:text-orange dark:border-opacityorange dark:hover:border-orange"
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
