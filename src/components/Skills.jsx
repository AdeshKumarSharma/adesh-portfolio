import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillGroups = {
    "Frontend": ["HTML5", "CSS", "Bootstrap", "Tailwind CSS", "ReactJS", "JavaScript", "WordPress"],
    "Backend & DB": ["Full-stack Development", "SQLite", "Database", "MVVM Architecture"],
    "Programming": ["Python", "C", "Java"],
    "Tools": ["Git", "GitHub", "MS-Office"],
    "Hardware": ["Electronics", "Computer Hardware Assembling/Dissembling", "Microprocessor"],
    "Mobile Development": ["Android"],
  };

  return (
    <motion.section
      className="p-8 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-300 mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.entries(skillGroups).map(([category, skills], index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{category}</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
