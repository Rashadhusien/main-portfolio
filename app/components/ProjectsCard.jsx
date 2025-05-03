"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CldImage } from "next-cloudinary";
import Lottie from "lottie-react";
import { ChevronDown, ChevronRight, Github, Pin } from "lucide-react";
import whiteEye from "@/app/animation/white-eye.json";
import "./ProjectCard.css";

const ProjectsCard = ({ arr }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const isAllVisible = visibleCount >= arr.length;

  const handleToggleView = () => {
    setVisibleCount(isAllVisible ? 6 : arr.length);
  };

  const sortedProjects = [...arr].sort((a, b) => b.isPinned - a.isPinned);
  const visibleProjects = sortedProjects.slice(0, visibleCount);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-10 transition-all duration-500">
        <AnimatePresence>
          {arr.length === 0 ? (
            <p className="text-xl text-center text-black dark:text-white col-span-full">
              No projects available.
            </p>
          ) : (
            visibleProjects.map((item) => (
              <motion.article
                layout
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                key={item.id}
                className="group p-3 dark:bg-popupMenu bg-slate-200 flex flex-col items-center justify-between overflow-hidden rounded-xl hover:scale-[1.01] shadow-sm transition-transform duration-300"
              >
                {item.isPinned && (
                  <Pin className="absolute top-[5px] right-[5px] z-10 rotate-[30deg] p-[2px] rounded-md text-[10px] w-[25px] h-[25px] text-orange" />
                )}
                <section className="relative flex justify-center items-center w-full overflow-hidden rounded-xl">
                  <a
                    href={item.moreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <CldImage
                      width={1000}
                      height={1000}
                      src={item.imgUrl}
                      alt={item.altText || `Image of ${item.title}`}
                      className="object-cover scale-105 group-hover:scale-125 group-hover:brightness-75 transition duration-300"
                    />
                    <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-xl bg-popupMenu shadow-md -translate-x-1/2 -translate-y-1/2 group-hover:w-16 group-hover:h-16 transition-all duration-300 flex justify-center items-center">
                      <Lottie
                        animationData={whiteEye}
                        className="w-full h-full scale-[4] transition-all duration-300"
                      />
                    </div>
                  </a>
                </section>

                <section className="px-2">
                  <h3 className="text-xl text-black dark:text-white my-5">
                    {item.title}
                  </h3>
                  <p className="text-md font-[300] text-[#333] dark:text-primarylight my-5">
                    {item.paragraph}
                  </p>
                </section>

                <section className="mt-2 border-t border-t-orange w-full px-2">
                  <div className="text-md flex items-center justify-between font-[300] text-[#333] dark:text-primarylight mt-3">
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      className="flex items-center gap-1 hover:text-orange duration-300"
                      rel="noopener noreferrer"
                    >
                      <Github /> github
                    </a>
                    <a
                      href={item.moreUrl}
                      target="_blank"
                      className="flex items-center hover:text-orange duration-300"
                      rel="noopener noreferrer"
                    >
                      preview <ChevronRight />
                    </a>
                  </div>
                </section>
              </motion.article>
            ))
          )}
        </AnimatePresence>
      </section>

      {arr.length > 6 && (
        <div className="mt-8 flex flex-col items-center justify-center w-full">
          <button
            onClick={handleToggleView}
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            {isAllVisible ? "View Less" : "View More"}
            <span
              className={`inline-block transition-transform duration-300 ${
                isAllVisible ? "-rotate-180" : "rotate-0"
              }`}
            >
              <ChevronDown />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectsCard;
