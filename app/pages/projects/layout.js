import PageTitle from "@/app/components/PageTitle";
import { navTitle } from "@/app/data/navBar";
import React from "react";
import Projects from "./page";

const layout = () => {
  return (
    <div className="bg-seconderylight dark:bg-secondery overflow-hidden">
      {/* <PageTitle title={navTitle.projects} /> */}
      <div className=" container mx-auto px-16">
        <Projects />
      </div>
    </div>
  );
};

export default layout;
