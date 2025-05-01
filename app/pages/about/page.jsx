"use client";
import Lottie from "lottie-react";
import developer from "../../animation/developer.json";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  const lottieRef = useRef();

  // State for job title animation and profile image popup
  const [imgpopup, setImgpopup] = useState(false);
  const [jobTitle, setJobTitle] = useState("");

  // Image source
  const profile = "/profile.png";

  // Set job title after component mounts to prevent hydration issues
  useEffect(() => {
    setJobTitle("Freelancer , Front End Developer");
  }, []);

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
      className="hero flex mt-12 items-center"
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
          <motion.h1
            initial={{ opacity: 0 }}
            className="title text-5xl leading-[70px] font-extrabold my-6 text-primary dark:text-primarylight max-w-[580px]"
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            {jobTitle.split("").map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: i / 5,
                }}
                key={i}
              >
                {el}
              </motion.span>
            ))}
          </motion.h1>
          <p className="sub-title mb-8 text-sub-title-light dark:text-subtitle font-bold">
            I’m Rashad Husein, a Front-End Developer and entrepreneur based in
            Cairo City. I’m a Front End Developer and Freelancer, where we
            develop technologies that empower regular people to explore space on
            their own terms.
          </p>
        </div>
        <ul className="icons-social flex gap-5 text-xl">
          <li>
            <a
              href="https://twitter.com/husein_ras77425"
              target="_blank"
              aria-label="Twitter Profile"
              className="duration-300 hover:text-xl text-lg text-icon-hover hover:text-icon-hover-light dark:hover:text-orange icon-twitter"
            />
          </li>
          <li>
            <a
              href="https://github.com/Rashadhusien"
              target="_blank"
              aria-label="GitHub Profile"
              className="duration-300 hover:text-xl text-lg text-icon-hover hover:text-icon-hover-light dark:hover:text-orange icon-github-alt"
            />
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rashad-husein-2770622aa/"
              target="_blank"
              aria-label="LinkedIn Profile"
              className="duration-300 hover:text-xl text-lg text-icon-hover hover:text-icon-hover-light dark:hover:text-orange icon-linkedin-square"
            />
          </li>
        </ul>
      </section>
      <section className="right-section animation w-full hidden sm:block">
        <Lottie
          animationData={developer}
          className="w-full h-full translate-x-14 translate-y-10"
          lottieRef={lottieRef}
        />
      </section>
    </section>
  );
}

export default About;
