"use client";

import { useEffect, useRef } from "react";

import Found from "@/app/animation/404.json";
import Lottie from "lottie-react";

const NotFound = () => {
  const lottieRef = useRef();

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, []);

  return (
    <>
      <Lottie
        animationData={Found}
        className="w-full h-full "
        lottieRef={lottieRef}
      />
    </>
  );
};

export default NotFound;
