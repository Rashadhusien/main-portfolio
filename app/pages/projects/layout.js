import React from "react";
import Projects from "./page";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { FolderKanban } from "lucide-react";

const layout = () => {
  return (
    <div className="bg-seconderylight dark:bg-secondery overflow-hidden">
      <div className=" container mx-auto my-12 ">
        <SectionTitle title={"Projects"} icon={<FolderKanban />} />
        <Projects />
      </div>
    </div>
  );
};

export default layout;
