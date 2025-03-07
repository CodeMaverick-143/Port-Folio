import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Trophy, Terminal } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-[#00ff9d]" />,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies and best practices."
    },
    {
      icon: <Brain className="w-8 h-8 text-[#00ff9d]" />,
      title: "AI/ML Engineering",
      description: "Developing intelligent solutions using cutting-edge machine learning techniques."
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#00ff9d]" />,
      title: "Competitive Programming",
      description: "Solved 500+ problems across platforms. Specialist on CodeForces, 5⭐ on CodeChef."
    },
    {
      icon: <Terminal className="w-8 h-8 text-[#00ff9d]" />,
      title: "System Architecture",
      description: "Designing robust and scalable system architectures for complex applications."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="glass-effect rounded-lg p-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Full Stack Developer and AI enthusiast with 5+ years of experience
                  in building scalable web applications and implementing machine learning solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My expertise spans across modern web technologies, artificial intelligence, and
                  competitive programming, allowing me to tackle complex technical challenges and
                  deliver innovative solutions.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-effect rounded-lg p-6 hover:border-[#00ff9d] transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    {feature.icon}
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;