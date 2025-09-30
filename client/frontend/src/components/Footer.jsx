import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/CHIRANJEEVBHATT',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/chiranjeev-bhatt-89678430a',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://x.com/Chiranjeev26',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:chiranjeevbhatt18@gmail.com',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-max">
        <div className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Logo */}
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            
            {/* Description */}
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about creating amazing digital experiences through clean code and innovative solutions.
              Let's build something incredible together!
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © {currentYear} Made by Chiranjeev Bhatt. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
