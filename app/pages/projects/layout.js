import React from "react";
import Projects from "./page";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { FolderKanban } from "lucide-react";

const layout = () => {
  return (
    <div className="bg-seconderylight dark:bg-secondery overflow-hidden">
      <div className=" container mx-auto ">
        <SectionTitle title={"Projects"} icon={<FolderKanban />} />
        <Projects />
      </div>
    </div>
  );
};

export default layout;
