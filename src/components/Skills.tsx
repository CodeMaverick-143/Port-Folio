import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    fetch('/src/data/skills.json')
      .then((res) => res.json())
      .then((data) => setSkills(data.skills));
  }, []);

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 neon-text"
            variants={itemVariants}
          >
            Skills & Technologies
          </motion.h2>

          <motion.div 
            className="flex justify-center flex-wrap gap-4 mb-12"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-[#00ff9d] text-black'
                    : 'bg-transparent text-[#00ff9d] border border-[#00ff9d]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredSkills.map((skill, index) => {
              const Icon = LucideIcons[skill.icon as keyof typeof LucideIcons];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-effect rounded-lg p-6 hover:border-[#00ff9d] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex flex-col items-center text-center">
                    {Icon && <Icon className="w-12 h-12 text-[#00ff9d] mb-4" />}
                    <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div
                        className="bg-[#00ff9d] h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;