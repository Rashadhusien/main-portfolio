"use client";
import Lottie from "lottie-react";
import developer from "../../animation/developer.json";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react";
import { TerminalDemo } from "@/app/components/Terminal";
import { FlipText } from "@/app/components/FlipText";

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
    name: "twitter",
    icon: <Linkedin />,
  },
  {
    url: " https://wa.me/01110105367",
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
        <div className="parent-avatar flex items-end gap-1 min-h-24">
          <motion.img
            {...profileAnimation}
            src={profile}
            alt="me-main-section"
            className="w-24 dark:bg-[#18181b] rounded-full p-0.5 border border-blueElzero dark:border-orange shadow-inner cursor-pointer active:scale-150 hover:scale-150"
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
                className="w-[80%] bg-white zoomed-image dark:bg-[#18181b] md:w-1/3 rounded-full p-0.5 border border-blueElzero dark:border-orange shadow-inner cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
              />
            </div>
          )}
        </div>
        <div className="text">
          <h1 className="title text-3xl sm:text-5xl sm:leading-[70px] font-extrabold my-6 text-primary dark:text-primarylight max-w-[580px]">
            <FlipText>Front-End Developer</FlipText>
          </h1>
          <p className="sub-title max-w-[1200px] mb-8 text-[#333] dark:text-[#eee] font-bold">
            I&apos;m <strong className="text-orange ">Rashad Hussein</strong>{" "}
            skilled in HTML, CSS, JavaScript, React.js, and Next.js. I build{" "}
            <strong className="text-orange ">
              responsive, user-friendly interfaces{" "}
            </strong>
            using Tailwind CSS and SCSS, turning Figma designs into clean,
            performant code. I work with React Hooks, Redux, Firebase, and
            Framer Motion to create{" "}
            <strong className="text-orange ">
              fast, accessible, and visually{" "}
            </strong>{" "}
            engaging web experiences.
          </p>
        </div>
        <ul className="icons-social flex gap-5 text-xl">
          {socials.map((social, i) => {
            const { url, icon, name } = social;
            return (
              <li key={i}>
                <a
                  href={url}
                  target="_blank"
                  aria-label={name}
                  className="duration-300 hover:text-xl text-lg text-black dark:text-white "
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="right-section animation w-full hidden sm:block">
        {/* <Lottie
          animationData={developer}
          className="w-full h-full translate-x-14 translate-y-10"
          lottieRef={lottieRef}
        /> */}
        <TerminalDemo />
      </section>
    </section>
  );
}

export default About;
