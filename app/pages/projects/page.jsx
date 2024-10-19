"use client";
import Image from "next/image";
import { buttonsCategories } from "@/app/data/btnCategories";
import { myProjects } from "@/app/data/projects";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import Button from "@/app/ui/Button";

function Projects() {
  const [isActive, setIsActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (category) => {
    setIsActive(category);
    const mycategory = myProjects.filter((project) =>
      project.category.includes(category)
    );
    setArr(mycategory);
  };

  return (
    <>
      <SectionTitle title={"projects"} />
      <main
        className="flex gap-12 items-start flex-col sm:flex-row"
        id="project"
      >
        <section className="left-section grid gap-3 grid-cols-2 sm:flex w-full sm:w-auto flex-wrap justify-center items-center sm:flex-col">
          <button
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
          ))}
        </section>

        <section className="group right-section relative grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-1 md:gap-10">
          <AnimatePresence>
            {arr.length === 0 ? (
              <p className="text-5xl w-full absolute text-center h-full py-10">
                No projects available.
              </p>
            ) : (
              arr.map((item) => (
                <motion.article
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring", mass: 1 }}
                  key={item.id}
                  className="duration-300 overflow-hidden rounded-md border-2 border-bordercard dark:border-opacityorange 
                    hover:border-blueElzero dark:hover:border-orange hover:rotate-1 hover:scale-[1.01] 
                    dark:bg-tograd bg-cardlight shadow-4xl"
                >
                  <Image
                    src={item.imgUrl}
                    alt={item.altText || `Image of ${item.title}`}
                    width={500}
                    height={500}
                    className="flex-grow max-h-full object-cover"
                  />
                </motion.article>
              ))
            )}
          </AnimatePresence>
        </section>
      </main>
    </>
  );
}

export default Projects;
