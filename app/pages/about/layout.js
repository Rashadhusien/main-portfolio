import React from "react";
import About from "./page";
import PageTitle from "@/app/components/PageTitle";
import { navTitle } from "@/app/data/navBar";

const layout = () => {
  return (
    <div className="bg-seconderylight dark:bg-secondery overflow-hidden">
      <PageTitle title={navTitle.about} />
      <div className=" container mx-auto px-16">
        <About />
      </div>
    </div>
  );
};

export default layout;
