import "./style.css";

import letters from "@/app/data/lettersData";
const SectionTitle = (/** @type {any} */ title) => {
  const createTitle = ({ title }) => {
    const titleLetters = title
      .toLowerCase()
      .split("")
      .map((char, index) => {
        return letters[char] ? (
          <span key={index}>{letters[char]}</span>
        ) : (
          <span key={index}>{char}</span>
        );
      });
    return (
      <>
        <h1 className="w-[600px] text-nowrap md:flex justify-center items-center flex-nowrap  hidden  text-secondery dark:text-seconderylight">
          {titleLetters}
        </h1>
        <h1 className="w-[600px] text-nowrap flex justify-center items-center flex-nowrap absolute section-title text-secondery dark:text-seconderylight md:hidden">
          {title}
        </h1>
      </>
    );
  };
  return (
    <section className="relative flex justify-center items-center -z-50 left-0 h-[200px] text-center">
      {createTitle(title)}
    </section>
  );
};

export default SectionTitle;
