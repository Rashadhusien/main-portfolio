"use client";
import { myProjects } from "@/app/data/projects";
import { useState } from "react";
import FilterButtons from "@/app/components/FilterButtons";
import ProjectsCard from "@/app/components/ProjectsCard";

function Projects() {
  const [arr, setArr] = useState(myProjects);

  return (
    <>
      <main
        className="flex gap-12 items-start flex-col sm:flex-col"
        id="projects"
      >
        <FilterButtons setArr={setArr} />

        <ProjectsCard arr={arr} />
      </main>
    </>
  );
}

export default Projects;
