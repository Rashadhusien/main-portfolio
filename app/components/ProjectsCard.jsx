"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";
import Lottie from "lottie-react";

import whiteEye from "@/app/animation/white-eye.json";

const ProjectsCard = ({ arr }) => {
  const [view, setView] = useState(true);

  const handleViewMore = () => {
    setView(!view);
  };

  return (
    <>
      <section
        className={`right-section grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-full gap-1 md:gap-10 duration-500 transition-all overflow-hidden ${
          view ? "max-h-[600px]" : "max-h-max"
        }`}
      >
        <AnimatePresence>
          {arr.length === 0 ? (
            <p className="text-xl text-black text-center w-full dark:text-white">
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
                className="group duration-300 overflow-hidden rounded-md hover:scale-[1.01] shadow-sm"
              >
                <a href={item.moreUrl} target="_blank">
                  <section className="cursor-pointer relative flex justify-center items-center w-full overflow-hidden rounded-xl">
                    <CldImage
                      width={1000}
                      height={1000}
                      src={item.imgUrl}
                      alt={item.altText || `Image of ${item.title}`}
                      className="flex-grow max-h-full relative object-cover scale-105 group-hover:scale-125 group-hover:brightness-75 duration-300"
                    />
                    <div className="bg-popupMenu shadow-md absolute top-1/2 left-1/2 group-hover:w-16 group-hover:h-16 -translate-x-1/2 -translate-y-1/2 rounded-xl w-0 h-0 group-hover:block duration-300">
                      <Lottie
                        animationData={whiteEye}
                        className="group-hover:w-full h-full scale-[4] group-hover:block duration-300"
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

      {arr.length > 2 && (
        <div onClick={handleViewMore} className="mx-auto group">
          <span className="mx-auto bg-transparent border-2 cursor-pointer w-[30px] md:w-[40px] px-8 py-4 rounded-full flex justify-center items-center">
            {view ? (
              <span className="arrow-down border-2 border-white before:border-t-transparent before:border-l-transparent before:border-b-white before:border-r-white before:bottom-0"></span>
            ) : (
              <span className="arrow-down border-2 border-white before:border-b-transparent before:border-r-transparent before:border-t-white before:border-l-white"></span>
            )}
          </span>
          <p className="text-black dark:text-white text-xl opacity-10 group-hover:opacity-50 duration-300 pt-3 text-center">
            {view ? "View More" : "View Less"}
          </p>
        </div>
      )}
    </>
  );
};

export default ProjectsCard;
