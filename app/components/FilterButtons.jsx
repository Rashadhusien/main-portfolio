"use client";
import React from "react";
import { useState } from "react";

import { buttonsCategories } from "../data/btnCategories";

import { myProjects } from "../data/projects";

import { motion } from "framer-motion";

const FilterButtons = ({ setArr }) => {
  // const [isActive, setIsActive] = useState("all");

  // const handleClick = (category) => {
  //   setIsActive(category);
  //   const mycategory = myProjects.filter((project) =>
  //     project.category.includes(category)
  //   );
  //   setArr(mycategory);
  // };
  return (
    <section className="left-section grid gap-3 grid-cols-2 sm:flex w-full sm:w-auto flex-wrap justify-center items-center sm:flex-col">
      {/* <button
        onClick={() => {
          setIsActive("all");
          setArr(myProjects);
        }}
        aria-pressed={isActive === "all"}
        className={`duration-500 p-3 capitalize text-center sm:w-44 text-base rounded-xl border-2 text-primary dark:text-primarylight
      ${
        isActive === "all"
          ? "bg-blueElzero dark:bg-btnproject opacity-100 font-bold tracking-tight border-2 border-black p-4 dark:border-orange"
          : "bg-blueElzero dark:bg-btnproject opacity-50 hover:opacity-100 "
      }
    `}
      >
        All Projects
      </button>

      {buttonsCategories.map((btn) => (
        <button
          key={btn.id}
          onClick={() => handleClick(btn.btnCategory)}
          aria-pressed={isActive === btn.btnCategory}
          className={`duration-500 p-3 capitalize text-center sm:w-44 text-base rounded-xl border-2  text-primary dark:text-primarylight
        ${
          isActive === btn.btnCategory
            ? "bg-blueElzero dark:bg-btnproject opacity-100 font-bold tracking-tight border-2 border-black p-4 dark:border-orange"
            : "bg-blueElzero dark:bg-btnproject opacity-50 hover:opacity-100 "
        }
      `}
        >
          {btn.displayName}
        </button>
      ))} */}
    </section>
  );
};

export default FilterButtons;
