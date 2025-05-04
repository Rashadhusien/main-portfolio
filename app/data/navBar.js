import { Mail, User, CodeXml, FolderKanban } from "lucide-react";

export const navBar = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "about",
    name: "About",
  },

  {
    url: "skills",
    name: "skills",
  },
  {
    url: "projects",
    name: "projects",
  },

  {
    url: "contactus",
    name: "Contact",
  },
];
export const navTitle = {
  home: "Home",
  about: "About Us",
  contact: "Contact Us",
  projects: "projects",
  skills: "skills",
};

export const sectionTitleData = [
  {
    contactIcon: <Mail />,
    contact: "Contact Us",
  },
  {
    aboutIcon: <User />,
    about: "About Us",
  },

  {
    skillsIcon: <CodeXml />,
    skills: "About Us",
  },
  {
    projectIcon: <FolderKanban />,
    project: "Projects",
  },
];
