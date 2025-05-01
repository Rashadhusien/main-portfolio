import React from "react";
import ContactUs from "./page";
import PageTitle from "@/app/components/PageTitle";
import { navTitle } from "@/app/data/navBar";

const layout = () => {
  return (
    <div className="bg-seconderylight dark:bg-secondery overflow-hidden">
      {/* <PageTitle title={navTitle.contact} /> */}
      <div className=" container mx-auto px-16">
        <ContactUs />
      </div>
    </div>
  );
};

export default layout;
