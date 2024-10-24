import React from "react";
import Image from "next/image";

const PageTitle = ({ title }) => {
  return (
    <section className="page-title relative my-10 bg-white max-h-[250px]  overflow-hidden">
      <Image
        src={"/title.png"}
        alt="title"
        width={1000}
        height={1000}
        priority={true}
        className="w-full h-full object-cover"
      />

      <h1 className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000d1] text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-[900] w-full h-full text-center text-blueElzero dark:text-orange">
        {title}
      </h1>
    </section>
  );
};

export default PageTitle;
