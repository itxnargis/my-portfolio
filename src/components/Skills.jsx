import React from "react";
import { skillsData } from "../utils/data/skill";
import { skillsImage } from "../utils/skill-image";

const Skills = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <span className="hidden sm:block w-24 h-[2px] bg-amber-600"></span>
          <h2 className="text-3xl sm:text-4xl font-bold mx-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Skills
          </h2>
          <span className="hidden sm:block w-24 h-[2px] bg-amber-600"></span>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
    </section>
  );
};

const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105">
    <img
      src={skillsImage(skill)}
      alt={skill}
      className="w-16 h-16 mb-4 object-contain"
    />
    <p className="text-center text-sm font-medium text-gray-300">{skill}</p>
  </div>
);

export default Skills;
