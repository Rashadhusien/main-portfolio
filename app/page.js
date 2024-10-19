"use client";
import Hero from "./pages/about/page";

import { useEffect, useState } from "react";
import Main from "./pages/projects/page";
import Skills from "./pages/skills/page";
import Contact from "./pages/contactus/page";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 550) {
        setshowScrollBtn(true);
      } else {
        setshowScrollBtn(false);
      }
    });
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showScrollBtn, setshowScrollBtn] = useState(false);

  return (
    <>
      <motion.div
        className="progress-bar bg-blueElzero dark:bg-orange"
        style={{ scaleX }}
      />

      <Hero />
      <div className="border-b border-borderlight dark:border-border my-12 w-[200%] -ml-16" />
      <Skills />
      <div className="border-b border-borderlight dark:border-border my-12 w-[200%] -ml-16" />

      <Main />
      <div className="border-b border-borderlight dark:border-border my-12 w-[200%] -ml-16" />
      <Contact />
      <div className="border-b border-borderlight dark:border-border my-12 w-[200%] -ml-16" />
      {/* <Footer /> */}
      <a
        href="#up"
        className={`bg-scrolltop  border-scrolltopborder hover:bg-scrollhover dark:bg-amber-400 dark:hover:bg-orange duration-300 fixed bottom-10 right-[2%] rounded-full sm:w-10 sm:h-10 w-8 h-8 text-2xl sm:opacity-100 opacity-100  hover:opacity-100`}
        style={{ opacity: showScrollBtn ? 1 : 0 }}
      >
        <button className=" icon-keyboard_arrow_up w-full h-full " />
      </a>
    </>
  );
}
