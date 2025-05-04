"use client";
import "./filterButtons.css";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { buttonsCategories } from "../data/btnCategories";
import { myProjects } from "../data/projects";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
const FilterButtons = ({ setArr }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      updateScrollButtons();
      el.addEventListener("scroll", updateScrollButtons);
      return () => el.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleClick = useCallback(
    (category) => {
      setActiveCategory(category);
      const filteredProjects =
        category === "all"
          ? myProjects
          : myProjects.filter((project) => project.category.includes(category));
      setArr(filteredProjects);
    },
    [setArr]
  );

  return (
    <div className="relative w-full">
      {/* Left arrow */}
      {canScrollLeft && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-secondery dark:bg-white dark:bg-popupMenu rounded-full shadow-md"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="w-5 h-5 text-white dark:text-black" />
        </button>
      )}

      {/* Scrollable Button Container */}
      <motion.div
        ref={scrollRef}
        className="btns-div w-full flex overflow-x-auto   scroll-smooth no-scrollbar"
      >
        <button
          onClick={() => handleClick("all")}
          className={`duration-500 py-3 w-11 sm:p-3 capitalize sm:w-44 text-base rounded-xl border-2 hover:border-orange hover:text-orange  dark:hover:text-orange bg-blueElzero dark:bg-box
          ${
            activeCategory === "all"
              ? "  opacity-100 font-bold tracking-tight text-orange  border-orange"
              : "text-primary dark:text-white "
          }`}
        >
          All Projects
        </button>
        {buttonsCategories.map((btn) => (
          <button
            key={btn.id}
            onClick={() => handleClick(btn.btnCategory)}
            className={`duration-500 py-1 sm:p-3 capitalize w-32 sm:w-44 text-base rounded-xl border-2 hover:border-orange hover:text-orange bg-blueElzero  dark:hover:text-orange dark:bg-box 
            ${
              activeCategory === btn.btnCategory
                ? " opacity-100 font-bold tracking-tight border-orange text-orange "
                : "text-primary dark:text-white"
            }`}
          >
            {btn.displayName}
          </button>
        ))}
      </motion.div>

      {/* Right arrow */}
      {canScrollRight && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-secondery dark:bg-white dark:bg-popupMenu rounded-full shadow-md"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="w-5 h-5 text-white dark:text-primary" />
        </button>
      )}
    </div>
  );
};

export default FilterButtons;
