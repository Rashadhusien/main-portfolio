import React from "react";
import Skills from "./page";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { CodeXml } from "lucide-react";

const layout = () => {
  return (
    <div className="bg-seconderylight dark:bg-secondery overflow-hidden my-12">
      <div className=" container mx-auto   ">
        <SectionTitle title={"Skills"} icon={<CodeXml />} />
        <Skills />
      </div>
    </div>
  );
};

export default layout;
