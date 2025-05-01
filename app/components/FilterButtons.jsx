// "use client";
// import React from "react";
// import { useState } from "react";

// import { buttonsCategories } from "../data/btnCategories";

// import { myProjects } from "../data/projects";
// import { Tabs, Tab } from "react-tabs-scrollable";
// import "react-tabs-scrollable/dist/rts.css";

// const FilterButtons = ({ setArr }) => {
//   const [isActive, setIsActive] = useState("all");
//   const [activeTab, setActiveTab] = useState(1);

//   const handleClick = (category) => {
//     setIsActive(category);
//     const mycategory = myProjects.filter((project) =>
//       project.category.includes(category)
//     );
//     setArr(mycategory);
//   };

//   // define a onClick function to bind the value on tab click
//   const onTabClick = (e, index) => {
//     console.log(e);
//     setActiveTab(index);
//   };

//   return (
//     <Tabs activeTab={activeTab} onTabClick={onTabClick}>
//       <Tab
//         onTabClick={() => {
//           setIsActive("all");
//           setArr(myProjects);
//         }}
//         aria-pressed={isActive === "all"}
//         className={`duration-500 p-3 capitalize text-center sm:w-44 text-base rounded-xl border-2 text-primary dark:text-primarylight
//       ${
//         isActive === "all"
//           ? "bg-blueElzero dark:bg-btnproject opacity-100 font-bold tracking-tight border-2 border-black p-4 dark:border-orange"
//           : "bg-blueElzero dark:bg-btnproject opacity-50 hover:opacity-100 "
//       }
//     `}
//       >
//         All Projects
//       </Tab>
//       {buttonsCategories.map((btn) => (
//         <Tab
//           key={btn.id}
//           onTabClick={() => handleClick(btn.btnCategory)}
//           aria-pressed={isActive === btn.btnCategory}
//           className={`duration-500 p-3 capitalize text-center sm:w-44 text-base rounded-xl border-2  text-primary dark:text-primarylight
//         ${
//           isActive === btn.btnCategory
//             ? "bg-blueElzero dark:bg-btnproject opacity-100 font-bold tracking-tight border-2 border-black p-4 dark:border-orange"
//             : "bg-blueElzero dark:bg-btnproject opacity-50 hover:opacity-100 "
//         }
//       `}
//         >
//           {btn.displayName}
//         </Tab>
//       ))}
//     </Tabs>
//   );
// };

// export default FilterButtons;

// "use client";

// import React, { useState, useCallback } from "react";
// import { buttonsCategories } from "../data/btnCategories";
// import { myProjects } from "../data/projects";
// import "react-tabs-scrollable/dist/rts.css";

// import { motion, useScroll } from "framer-motion";
// import { useRef } from "react";

// const FilterButtons = ({ setArr }) => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const ref = useRef(null);

//   const { scrollXProgress } = useScroll({ container: ref });

//   const handleClick = useCallback(
//     (category) => {
//       setActiveCategory(category);
//       const filteredProjects =
//         category === "all"
//           ? myProjects
//           : myProjects.filter((project) => project.category.includes(category));
//       setArr(filteredProjects);
//     },
//     [setArr]
//   );

//   return (
//     <motion.div
//       cx="50"
//       cy="50"
//       r="30"
//       pathLength="1"
//       className="indicator btns-div  w-full flex overflow-x-scroll py-5 mx-auto"
//       style={{ pathLength: scrollXProgress }}
//     >
//       <button
//         onClick={() => handleClick("all")}
//         aria-pressed={activeCategory === "all"}
//         className={`duration-500 p-3 capitalize text-center sm:w-44 text-base rounded-xl border-2 text-primary dark:text-primarylight
//           ${
//             activeCategory === "all"
//               ? "bg-blueElzero dark:bg-btnproject opacity-100 font-bold tracking-tight border-2 border-black p-4 dark:border-orange"
//               : "bg-blueElzero dark:bg-btnproject opacity-50 hover:opacity-100"
//           }`}
//       >
//         All Projects
//       </button>
//       {buttonsCategories.map((btn) => (
//         <button
//           key={btn.id}
//           onClick={() => handleClick(btn.btnCategory)}
//           aria-pressed={activeCategory === btn.btnCategory}
//           className={`duration-500 p-3 capitalize text-center sm:w-44 text-base rounded-xl border-2 text-primary dark:text-primarylight
//             ${
//               activeCategory === btn.btnCategory
//                 ? "bg-blueElzero dark:bg-btnproject opacity-100 font-bold tracking-tight border-2 border-black p-4 dark:border-orange"
//                 : "bg-blueElzero dark:bg-btnproject opacity-50 hover:opacity-100"
//             }`}
//         >
//           {btn.displayName}
//         </button>
//       ))}
//     </motion.div>
//   );
// };

// export default FilterButtons;

"use client";
import "./filterButtons.css";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { buttonsCategories } from "../data/btnCategories";
import { myProjects } from "../data/projects";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // install lucide-react or use any icon

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
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-secondery dark:bg-popupMenu rounded-full shadow-md"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
      )}

      {/* Scrollable Button Container */}
      <motion.div
        ref={scrollRef}
        className="btns-div w-full flex overflow-x-auto py-5 px-10 space-x-4 scroll-smooth no-scrollbar"
      >
        <button
          onClick={() => handleClick("all")}
          className={`duration-500 p-3 capitalize sm:w-44 text-base rounded-xl border-2 text-primary dark:text-primarylight
          ${
            activeCategory === "all"
              ? "bg-blueElzero dark:bg-btnproject opacity-100 font-bold tracking-tight border-black dark:border-orange"
              : "bg-blueElzero dark:bg-btnproject opacity-50 hover:opacity-100"
          }`}
        >
          All Projects
        </button>
        {buttonsCategories.map((btn) => (
          <button
            key={btn.id}
            onClick={() => handleClick(btn.btnCategory)}
            className={`duration-500 p-3 capitalize sm:w-44 text-base rounded-xl border-2 text-primary dark:text-primarylight
            ${
              activeCategory === btn.btnCategory
                ? "bg-blueElzero dark:bg-btnproject opacity-100 font-bold tracking-tight border-black dark:border-orange"
                : "bg-blueElzero dark:bg-btnproject opacity-50 hover:opacity-100"
            }`}
          >
            {btn.displayName}
          </button>
        ))}
      </motion.div>

      {/* Right arrow */}
      {canScrollRight && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-secondery dark:bg-popupMenu rounded-full shadow-md"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  );
};

export default FilterButtons;
