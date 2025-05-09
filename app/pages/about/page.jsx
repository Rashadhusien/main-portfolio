"use client";

import Lottie from "lottie-react";
import developer from "../../animation/developer.json";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { SparklesText } from "@/app/components/SparklesText";

const socials = [
  {
    url: "https://twitter.com/husein_ras77425",
    name: "twitter",
    icon: <Twitter />,
  },
  {
    url: "https://github.com/Rashadhusien",
    name: "github",
    icon: <Github />,
  },
  {
    url: "https://www.linkedin.com/in/rashad-husein-2770622aa/",
    name: "Linked In",
    icon: <Linkedin />,
  },
  {
    url: " https://wa.me/201110105367",
    name: "whatsapp",
    icon: <MessageCircle />,
  },
];

function About() {
  const lottieRef = useRef();

  // State for job title animation and profile image popup
  const [imgpopup, setImgpopup] = useState(false);
  // const [jobTitle, setJobTitle] = useState("");

  // Image source
  const profile = "/profile.png";

  // Set job title after component mounts to prevent hydration issues
  // useEffect(() => {
  //   setJobTitle("Front End Developer");
  // }, []);

  // Lottie animation speed control
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, [lottieRef]);

  // Animation settings for the profile picture
  const profileAnimation = useMemo(
    () => ({
      initial: { transform: "scale(0)" },
      animate: { transform: "scale(1.1)" },
      transition: { damping: 8, type: "spring", stiffness: 100 },
    }),
    []
  );

  return (
    <section
      className="hero flex mt-12 gap-5 items-center"
      id="about"
      onClick={() => {
        if (imgpopup) {
          setImgpopup(false);
        }
      }}
    >
      <section className="left-section grow">
        <div className="parent-avatar sm:hidden flex items-end gap-1 min-h-24">
          <Image
            {...profileAnimation}
            src={profile}
            alt="me-main-section"
            width={500}
            height={500}
            className="w-24  dark:bg-[#18181b] rounded-full p-0.5 border border-orange dark:border-orange shadow-inner cursor-pointer  duration-300 active:scale-150 hover:scale-150"
            onClick={() => {
              setImgpopup(true);
            }}
          />
          {imgpopup && (
            <div className="img-popup fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full h-full bg-popupMenu backdrop-blur duration-1000">
              <Image
                src={profile}
                alt="me-main-section"
                width={500}
                height={500}
                className="w-[80%] bg-white zoomed-image dark:bg-[#18181b] md:w-1/3 rounded-full p-0.5 border border-orange dark:border-orange shadow-inner cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
              />
            </div>
          )}
        </div>
        <div className="text">
          <h1 className="title text-3xl sm:text-5xl sm:leading-[70px] font-extrabold my-6 text-primary dark:text-primarylight w-full">
            <SparklesText className={"w-full"}> Rashad Hussein </SparklesText>
          </h1>

          <p className="sub-title max-w-[1200px] mb-8 text-[#333] dark:text-[#eee] font-bold">
            I&apos;m a{" "}
            <strong className="text-orange ">Front-end Developer</strong>{" "}
            skilled in HTML, CSS, JavaScript, React.js, and Next.js. I build{" "}
            responsive, user-friendly interfaces using Tailwind CSS and SCSS,
            turning Figma designs into clean, performant code. I work with React
            Hooks, Redux, Firebase, and Framer Motion to create fast,
            accessible, and visually engaging web experiences.
          </p>
        </div>
        <ul className="icons-social grid grid-cols-2 gap-5 text-xl">
          {socials.map((social, i) => {
            const { url, icon, name } = social;
            return (
              <li key={i} className="group rounded-md  overflow-hidden ">
                <a
                  href={url}
                  target="_blank"
                  aria-label={name}
                  className="flex  items-center gap-2 px-6 py-3 rounded-md  border-l-[10px] border-border dark:border-borderlight  text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 "
                >
                  <span className="min-w-[20px] min-h-[20px]">{icon}</span>{" "}
                  <span className="text-sm sm:text-lg">{name} </span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="right-section animation w-full hidden  sm:flex justify-center items-center">
        {/* <Lottie
          animationData={developer}
          className="w-full h-full translate-x-14 translate-y-10"
          lottieRef={lottieRef}
        /> */}
        <Image
          {...profileAnimation}
          src={profile}
          alt="me-main-section"
          width={500}
          height={500}
          className=" dark:bg-box animate-move  flex justify-center rounded-full max-h-[400px] max-w-[400px] items-center w-full p-0.5 border border-orange dark:border-orange shadow-inner   "
        />
      </section>
    </section>
  );
}

export default About;
