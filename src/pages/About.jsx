import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="p-6 md:p-10 max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-center md:text-left text-blue-700 dark:text-blue-300 mb-4">
            About Me
          </h2>
          <p className="text-gray-800 dark:text-gray-300 mb-6 text-lg text-center md:text-left">
            I'm a skilled full-stack developer with a strong foundation in modern frontend and backend technologies. My academic and professional background supports strong contributions in enterprise-grade applications.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Education</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>M.Tech (CS) - Dayalbagh Educational Institute, Agra (2023)</li>
                <li>M.Sc (CS) - IET Khandari Campus, Agra (2019)</li>
                <li>B.Tech (ECE) - FET Agra College, Agra (2017)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Certificates</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>509 Army Base Workshop Training</li>
                <li>LabVIEW Training, IoT Workshop</li>
                <li>Web Development Workshops</li>
                <li>IC-Techniology Training</li>
                <li>Digital Watermarking, C Programming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
