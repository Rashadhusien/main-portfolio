// import Image from "next/image";
// import "./skillsStyle.css";

// import { skillsData } from "@/app/data/skillsData";
// import SectionTitle from "@/app/components/SectionTitle/SectionTitle";

// const Skills = () => {
//   return (
//     <>
//       <SectionTitle title={"skills"} />
//       <div className="wrapper">
//         {skillsData.slice(0, skillsData.length / 2).map((skill, i) => {
//           const { id, name, url } = skill;
//           return (
//             <div
//               key={id}
//               className={`itemLeft item${i + 1} `}
//               style={{
//                 animationDelay: `calc(30s / ${
//                   skillsData.slice(0, skillsData.length / 2).length / 2
//                 } * (${skillsData.slice(0, skillsData.length / 2).length} -  ${
//                   i + 1
//                 }) * -1)`,
//                 left: `max(calc(200px * ${
//                   skillsData.slice(0, skillsData.length / 2).length
//                 } )`,
//               }}
//             >
//               <Image width={500} height={500} src={url} alt={name} />
//             </div>
//           );
//         })}
//       </div>

//       <div className="wrapper">
//         {skillsData.slice(skillsData.length / 2).map((skill, i) => {
//           const { id, name, url } = skill;
//           return (
//             <div
//               key={id}
//               className={`itemRight item${i + 1 + skillsData.length / 2} `}
//               style={{
//                 animationDelay: `calc(30s / ${skillsData.length / 2} * (${
//                   skillsData.length / 2
//                 } -  ${i + 1}) * -1)`,
//                 right: ` max(calc(300px * ${
//                   skillsData.length / 2
//                 }), calc(100% + 200px))`,
//               }}
//             >
//               <Image src={url} alt={name} width={500} height={500} />
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Skills;

import Image from "next/image";
import "./skillsStyle.css";
import { skillsData } from "@/app/data/skillsData";
import SectionTitle from "@/app/components/SectionTitle/SectionTitle";

const Skills = () => {
  const halfLength = Math.ceil(skillsData.length / 2); // Ensure proper handling of odd lengths
  const leftSkills = skillsData.slice(0, halfLength);
  const rightSkills = skillsData.slice(halfLength);

  const calculateAnimationDelay = (index, total) =>
    `calc(30s / ${total} * (${total} - ${index + 1}) * -1)`;

  // animationDelay: `calc(30s / ${leftSkills.length / 2} * (${halfLength} -  ${
  //   i + 1
  // }) * -1)`;

  return (
    <>
      <SectionTitle title={"skills"} />

      {/* <div className="wrapper">
        {leftSkills.map((skill, i) => {
          const { id, name, url } = skill;
          return (
            <div
              key={id}
              className={`itemLeft item${i + 1}`}
              style={{
                animationDelay: calculateAnimationDelay(i, leftSkills.length),
                left: `max(calc(200px * ${leftSkills.length}), 0)`,
              }}
            >
              <Image width={500} height={500} src={url} alt={name} />
            </div>
          );
        })}
      </div> */}
      <div className="wrapper">
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
              <Image width={500} height={500} src={url} alt={name} />
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
      </div>
    </>
  );
};

export default Skills;
