import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://ecommerce-demo.vercel.app',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'Express.js', 'Socket.io', 'PostgreSQL', 'Material-UI'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://taskmanager-demo.netlify.app',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
      github: 'https://github.com/yourusername/weather-dashboard',
      live: 'https://weather-dashboard-demo.herokuapp.com',
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management dashboard with analytics, content scheduling, and multi-platform integration.',
      image: '/api/placeholder/600/400',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'Chart.js'],
      github: 'https://github.com/yourusername/social-dashboard',
      live: 'https://social-dashboard-demo.vercel.app',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, comment system, and SEO optimization. Features include dark mode and responsive design.',
      image: '/api/placeholder/600/400',
      tech: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel', 'Sanity CMS'],
      github: 'https://github.com/yourusername/blog-platform',
      live: 'https://blog-platform-demo.vercel.app',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects, skills, and contact information with smooth animations and modern design.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'EmailJS', 'Vercel'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourname-portfolio.vercel.app',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
              Each project represents a unique challenge and learning opportunity.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <p className="text-sm opacity-90">Project Preview</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Interested in seeing more of my work?
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              <Github size={20} />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
