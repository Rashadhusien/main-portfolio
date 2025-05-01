import PageTitle from "@/app/components/PageTitle";
import { navTitle } from "@/app/data/navBar";
import React from "react";
import Skills from "./page";

const layout = () => {
  return (
    <div className="bg-seconderylight dark:bg-secondery overflow-hidden my-12">
      {/* <PageTitle title={navTitle.skills} /> */}

      <div className=" container mx-auto px-16 ">
        <Skills />
      </div>
    </div>
  );
};

export default layout;
