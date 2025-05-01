"use client";

import { useEffect, useRef } from "react";

import Found from "@/app/animation/404.json";
import Lottie from "lottie-react";
import Link from "next/link";
import Button from "./ui/Button";

const NotFound = () => {
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, []);

  return (
    <div className="  container min-h-[90vh] flex justify-center items-center flex-col-reverse">
      <Lottie
        animationData={Found}
        className="w-full h-full "
        lottieRef={lottieRef}
      />
      <Link href={"/"}>
        <Button>Back To Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
