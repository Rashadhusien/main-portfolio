import React from "react";
import About from "./page";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import { sectionTitleData } from "@/app/data/navBar";
import { User } from "lucide-react";

const layout = () => {
  return (
    <div className="bg-seconderylight dark:bg-secondery overflow-hidden">
      <div className=" container mx-auto  my-12">
        <SectionTitle title={"About Us"} icon={<User />} />
        <About />
      </div>
    </div>
  );
};

export default layout;
