"use client";
import React from "react";
import ContactUs from "./page";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { Mail } from "lucide-react";

const layout = () => {
  return (
    <div className="bg-seconderylight dark:bg-secondery overflow-hidden">
      <div className=" container mx-auto my-12 ">
        <SectionTitle title={"Conatact Us"} icon={<Mail />} />
        <ContactUs />
      </div>
    </div>
  );
};

export default layout;
