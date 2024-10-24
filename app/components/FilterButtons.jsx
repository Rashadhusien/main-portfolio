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

"use client";

import React, { useState, useCallback } from "react";
import { buttonsCategories } from "../data/btnCategories";
import { myProjects } from "../data/projects";
import "react-tabs-scrollable/dist/rts.css";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const FilterButtons = ({ setArr }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const ref = useRef(null);

  const { scrollXProgress } = useScroll({ container: ref });

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
    <motion.div
      cx="50"
      cy="50"
      r="30"
      pathLength="1"
      className="indicator btns-div  w-full flex overflow-x-scroll py-5 mx-auto"
      style={{ pathLength: scrollXProgress }}
    >
      <button
        onClick={() => handleClick("all")}
        aria-pressed={activeCategory === "all"}
        className={`duration-500 p-3 capitalize text-center sm:w-44 text-base rounded-xl border-2 text-primary dark:text-primarylight
          ${
            activeCategory === "all"
              ? "bg-blueElzero dark:bg-btnproject opacity-100 font-bold tracking-tight border-2 border-black p-4 dark:border-orange"
              : "bg-blueElzero dark:bg-btnproject opacity-50 hover:opacity-100"
          }`}
      >
        All Projects
      </button>
      {buttonsCategories.map((btn) => (
        <button
          key={btn.id}
          onClick={() => handleClick(btn.btnCategory)}
          aria-pressed={activeCategory === btn.btnCategory}
          className={`duration-500 p-3 capitalize text-center sm:w-44 text-base rounded-xl border-2 text-primary dark:text-primarylight
            ${
              activeCategory === btn.btnCategory
                ? "bg-blueElzero dark:bg-btnproject opacity-100 font-bold tracking-tight border-2 border-black p-4 dark:border-orange"
                : "bg-blueElzero dark:bg-btnproject opacity-50 hover:opacity-100"
            }`}
        >
          {btn.displayName}
        </button>
      ))}
    </motion.div>
  );
};

export default FilterButtons;
