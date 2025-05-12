import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';

export default function Resume() {
  return (
    <motion.section
      className="min-h-screen px-4 py-10 bg-white dark:bg-gray-900 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-700 dark:text-blue-300 mb-6">
        My Resume
      </h2>

      <div className="w-full max-w-4xl bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <iframe
          src="Adesh_Resume.pdf"
          title="Resume"
          className="w-full h-[500px] rounded-lg border border-gray-300 dark:border-gray-600"
        />

        <a
          href="Adesh_Resume.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          <ArrowDownCircle className="w-5 h-5" />
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}
