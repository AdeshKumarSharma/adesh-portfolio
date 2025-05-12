import React from 'react';
import { motion } from 'framer-motion';
import adeshHero from '../assets/adesh-hero.jpg'

export default function Home() {
  return (
    <motion.section
      className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[90vh] px-16 py-10 bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-blue-800 dark:text-blue-300"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Adesh Kumar Sharma
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          🚀 Full Stack Developer | React.js, Node.js, Python, Java <br />
          💼 4+ Years of IT Experience | Passionate about clean code & great UI
        </motion.p>
        <motion.div
          className="mt-4 flex justify-center md:justify-start space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="/contact"
            className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-lg transition"
          >
            Contact Me
          </a>
          <a
            href="/projects"
            className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-100 dark:hover:bg-gray-700 text-sm font-semibold transition"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <img
          src={adeshHero}
          alt="Developer"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-blue-300 dark:border-blue-500"
        />
      </motion.div>
    </motion.section>
  );
}




