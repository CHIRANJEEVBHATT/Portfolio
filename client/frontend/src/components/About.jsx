import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 75 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Python', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Linux', level: 75 },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with a love for creating innovative solutions
              and beautiful user experiences. With expertise in modern web technologies,
              I bring ideas to life through clean, efficient code.
            </p>
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I started my coding journey with curiosity about how websites work.
                Over the years, I've developed a deep understanding of both frontend
                and backend technologies, allowing me to build complete solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I believe in continuous learning and staying up-to-date with the latest
                technologies. When I'm not coding, you can find me exploring new
                frameworks, contributing to open-source projects, or sharing knowledge
                with the developer community.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                My goal is to create applications that not only look great but also
                provide exceptional user experiences while maintaining clean,
                maintainable code.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                What I Do
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Develop responsive web applications using modern frameworks
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Design and implement RESTful APIs and database schemas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Optimize applications for performance and scalability
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Collaborate with teams to deliver high-quality software solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white text-center mb-12">
              Skills & Technologies
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend Skills */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  Frontend
                </h4>
                <div className="space-y-4">
                  {skills.frontend.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-primary-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Backend Skills */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  Backend
                </h4>
                <div className="space-y-4">
                  {skills.backend.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: (index + 6) * 0.1 }}
                          className="bg-primary-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tools Skills */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  Tools & Others
                </h4>
                <div className="space-y-4">
                  {skills.tools.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: (index + 12) * 0.1 }}
                          className="bg-primary-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
