import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CldImage } from "next-cloudinary";
const ProjectsCard = ({ arr }) => {
  return (
    <section className="group right-section relative grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-1 md:gap-10">
      {/* <AnimatePresence>
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
              <div>
                <CldImage
                  width={1000}
                  height={1000}
                  src={item.imgUrl}
                  alt={item.altText || `Image of ${item.title}`}
                  className="flex-grow max-h-full object-cover scale-150"
                />
                <span></span>
              </div>
            </motion.article>
          ))
        )}
      </AnimatePresence> */}
    </section>
  );
};

export default ProjectsCard;
