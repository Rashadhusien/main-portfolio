// import Image from "next/image";
// import "./skillsStyle.css";
// import { skillsData } from "@/app/data/skillsData";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";

const Skills = () => {
  // const halfLength = Math.ceil(skillsData.length / 2);
  // const leftSkills = skillsData.slice(0, halfLength);
  // const rightSkills = skillsData.slice(halfLength);

  // const calculateAnimationDelay = (index, total) =>
  //   `calc(30s / ${total} * (${total} - ${index + 1}) * -1)`;

  return (
    <>
      <SectionTitle title={"skills"} />

      {/*<div className="wrapper">
        {skillsData.slice(0, skillsData.length / 2).map((skill, i) => {
          const { id, name, url } = skill;
          return (
            <div
              key={id}
              className={`itemLeft item${i + 1} `}
              style={{
                animationDelay: `calc(30s / ${
                  leftSkills.length / 2
                } * (${halfLength} -  ${i + 1}) * -1)`,

                left: `max(calc(200px * ${leftSkills.length} )`,
              }}
            >
              <Image fill={true} src={url} alt={name} unoptimized={true} />
            </div>
          );
        })}
      </div>

      <div className="wrapper">
        {rightSkills.map((skill, i) => {
          const { id, name, url } = skill;
          return (
            <div
              key={id}
              className={`itemRight item${i + 1 + halfLength}`}
              style={{
                animationDelay: calculateAnimationDelay(i, rightSkills.length),
                right: `max(calc(300px * ${rightSkills.length}), calc(100% + 200px))`,
              }}
            >
              <Image width={500} height={500} src={url} alt={name} />
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Skills;
