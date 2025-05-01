import Image from "next/image";
import "./style.css";
import { skillsData } from "@/app/data/skillsData";

// Optional: define level priority for sorting
const levelPriority = {
  Advanced: 1,
  Intermediate: 2,
  Beginner: 3,
};

// Group skills by category
const groupSkillsByCategory = (data) => {
  const grouped = {};
  data.forEach((skill) => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }
    grouped[skill.category].push(skill);
  });

  // Sort skills inside each category by level
  Object.keys(grouped).forEach((category) => {
    grouped[category].sort(
      (a, b) => levelPriority[a.level] - levelPriority[b.level]
    );
  });

  return grouped;
};

const Skills = () => {
  const groupedSkills = groupSkillsByCategory(skillsData);

  return (
    <div className="wrapper" id="skills">
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-bold mb-5 text-black dark:text-white capitalize">
            {category}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, i) => (
              <div key={skill.id} className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <Image
                    fill
                    src={skill.url}
                    alt={skill.name}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-black dark:text-white font-medium">
                  {skill.name}
                </p>
                {/* <p className="text-xs text-gray-500 dark:text-gray-400">
                  {skill.level}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
