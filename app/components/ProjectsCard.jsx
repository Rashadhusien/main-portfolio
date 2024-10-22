"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import eye from "@/app/animation/eye.json";

import { CldImage } from "next-cloudinary";

import { useRef } from "react";
import Lottie from "lottie-react";
const ProjectsCard = ({ arr }) => {
  const lottieRef = useRef();

  return (
    <section className=" right-section relative grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-1 md:gap-10">
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
              hover:border-blueElzero dark:hover:border-orange  hover:scale-[1.01] 
              dark:bg-tograd bg-cardlight shadow-4xl "
            >
              <a href={item.moreUrl} target="_blank">
                <div className="group cursor-pointer  ">
                  <CldImage
                    width={1000}
                    height={1000}
                    src={item.imgUrl}
                    alt={item.altText || `Image of ${item.title}`}
                    className="flex-grow max-h-full relative object-cover scale-105 group-hover:scale-125 group-hover:brightness-75 duration-300"
                  />
                  <div className="bg-white shadow-md absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-lg hidden group-hover:block duration-300">
                    <Lottie
                      animationData={eye}
                      className=" absolute top-0 left-0 w-full h-full scale-[4] hidden group-hover:block duration-300   "
                      lottieRef={lottieRef}
                    />
                  </div>
                </div>
              </a>
            </motion.article>
          ))
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsCard;
