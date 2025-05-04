"use client";
import Hero from "./pages/about/page";

import { useEffect, useState } from "react";
import Contact from "./pages/contactus/page";
import Skills from "./pages/skills/page";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import { motion, useScroll, useSpring } from "framer-motion";
import { navTitle } from "./data/navBar";

import Projects from "./pages/projects/page";
import { Book, CodeXml, FolderKanban, Mail } from "lucide-react";
import MarqueeDemo from "./components/Testemonials";

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
    <div className="container  mx-auto main-container relative z-10 overflow-hidden    ">
      <motion.div className="progress-bar bg-orange" style={{ scaleX }} />

      <Hero />
      <div className="border-b border-borderlight dark:border-border my-12 w-[200%] -ml-16" />

      <SectionTitle title={navTitle.skills} icon={<CodeXml />} />
      <Skills />

      <div className="border-b border-borderlight dark:border-border my-12 w-[200%] -ml-16" />

      <SectionTitle title={navTitle.projects} icon={<FolderKanban />} />

      <Projects />

      <div className="border-b border-borderlight dark:border-border my-12 w-[200%] -ml-16" />
      <SectionTitle title={"Testimonials"} icon={<Book />} />
      <MarqueeDemo />
      <div className="border-b border-borderlight dark:border-border my-12 w-[200%] -ml-16" />
      <SectionTitle title={navTitle.contact} icon={<Mail />} />
      <Contact />
      <div className="border-b border-borderlight dark:border-border my-6 w-[200%] -ml-16" />
      <a
        href="#up"
        className={`  border-scrolltopborder  bg-orange duration-300 fixed bottom-10 right-[2%] rounded-full sm:w-10 sm:h-10 w-8 h-8 text-2xl sm:opacity-100 opacity-100  hover:opacity-100`}
        style={{ opacity: showScrollBtn ? 1 : 0 }}
      >
        <button className=" icon-keyboard_arrow_up w-full h-full " />
      </a>
    </div>
  );
}
