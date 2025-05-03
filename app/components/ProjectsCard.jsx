"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CldImage } from "next-cloudinary";
import Lottie from "lottie-react";

import whiteEye from "@/app/animation/white-eye.json";

import "./ProjectCard.css";

const ProjectsCard = ({ arr }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const isAllVisible = visibleCount >= arr.length;

  const handleToggleView = () => {
    if (isAllVisible) {
      setVisibleCount(6);
    } else {
      setVisibleCount(arr.length);
    }
  };

  // Sort projects by pinned status (true first)
  const sortedProjects = [...arr].sort((a, b) => b.isPinned - a.isPinned);

  // Slice the sorted array to get visible projects
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                key={item.id}
                className={`${
                  item.isPenned ? "pinned-project" : ""
                }  group overflow-hidden rounded-md hover:scale-[1.01] shadow-md transition-transform duration-300`}
              >
                {item.isPinned && (
                  <span
                    className={`z-10 absolute top-[5px]  right-[5px] p-[5px] rounded-lg text-[10px] bg-blueElzero dark:bg-orange text-white`}
                  >
                    pinned
                  </span>
                )}
                <a
                  href={item.moreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <section className="relative flex justify-center items-center w-full overflow-hidden rounded-xl">
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
                  </section>
                  <section className="px-2">
                    <h3 className="text-xl text-black dark:text-white my-5">
                      {item.title}
                    </h3>
                  </section>
                </a>
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
              ▼
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectsCard;
