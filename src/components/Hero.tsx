import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Brain } from 'lucide-react';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000000_100%)]" />
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.div 
            variants={textVariants}
            className="mb-6 inline-flex items-center space-x-4 bg-[#00ff9d]/10 px-6 py-2 rounded-full"
          >
            <Code2 className="w-5 h-5 text-[#00ff9d]" />
            <span className="text-[#00ff9d]">Full-Stack Developer</span>
            <span className="text-gray-400">|</span>
            <Brain className="w-5 h-5 text-[#00ff9d]" />
            <span className="text-[#00ff9d]">AI/ML Enthusiast</span>
          </motion.div>

          <motion.h1 
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold mb-6 neon-text"
          >
            Arpit Sarang
          </motion.h1>

          <motion.p 
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Building scalable web applications and intelligent solutions with modern technologies
          </motion.p>

          <motion.div variants={textVariants} className="space-x-6">
            <motion.a
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-[#00ff9d] text-black rounded-lg hover:bg-[#00ff9d]/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-[#00ff9d] text-[#00ff9d] rounded-lg hover:bg-[#00ff9d]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-400"
        >
          Scroll Down
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;