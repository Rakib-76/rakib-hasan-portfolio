import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiPostman } from 'react-icons/si';

const skillsData = [
  // Frontend
  { name: 'HTML', level: 90, category: 'Frontend', icon: <FaHtml5 size={24} className="text-orange-500" /> },
  { name: 'CSS', level: 85, category: 'Frontend', icon: <FaCss3Alt size={24} className="text-blue-500" /> },
  { name: 'JavaScript', level: 80, category: 'Frontend', icon: <FaReact size={24} className="text-yellow-400" /> },
  { name: 'React', level: 80, category: 'Frontend', icon: <FaReact size={24} className="text-cyan-400" /> },
  { name: 'Tailwind CSS', level: 75, category: 'Frontend', icon: <SiTailwindcss size={24} className="text-teal-400" /> },

  // Backend
  { name: 'Node.js', level: 70, category: 'Backend', icon: <FaNodeJs size={24} className="text-green-500" /> },
  { name: 'Express.js', level: 70, category: 'Backend', icon: <SiExpress size={24} className="text-gray-400" /> },
  { name: 'MongoDB', level: 65, category: 'Backend', icon: <SiMongodb size={24} className="text-green-600" /> },

  // Tools
  { name: 'Git', level: 80, category: 'Tools', icon: <FaGitAlt size={24} className="text-red-500" /> },
  { name: 'Firebase', level: 60, category: 'Tools', icon: <SiFirebase size={24} className="text-yellow-400" /> },
];

const SkillBar = ({ skill }) => (
  <div className="flex items-center gap-3 mb-4">
    {skill.icon}
    <div className="w-full">
      <div className="flex justify-between mb-1 text-sm">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="bg-gray-700 h-4 ">
        <motion.div
          className="bg-[#422ad5] h-4"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  </div>
);

const SkillsSection = () => {
  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>

        {categories.map((cat) => (
          <div key={cat} className="mb-10">
            <h3 className="text-xl font-semibold mb-6 text-center md:text-left">{cat}</h3>
            {skillsData
              .filter((skill) => skill.category === cat)
              .map((skill, idx) => (
                <SkillBar key={idx} skill={skill} />
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
