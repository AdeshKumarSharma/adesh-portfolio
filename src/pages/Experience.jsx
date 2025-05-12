import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: "Executive",
      company: "Blinkit (2024)",
      description:
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li> 	Managed procurement workflows using SAP Portal (Purchase Order creation, GRN processing, invoice reconciliation).</li>
        <li>Managed and resolved incidents through enterprise IT Ticketing Tools (e.g., SAP).</li>
        <li> 	Worked on ITSM ticketing tools to track and resolve supply chain system issues.</li>
        <li> 	Collaborated with the technical team for automation of logistics and order tracking.</li>
 	      <li>Handled incident and issue tracking through enterprise-level ticketing tools contributing to faster resolution cycles.</li>
 	      <li>Collaborated with cross-functional teams to ensure efficient ticket lifecycle management and improve service delivery metrics.</li>
      </ul>
    },
    {
      role: "Software Engineer",
      company: "BEL (Bharat Electronics Limited) (2021–2023)",
      description:
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>Performed end-to-end software testing using Python and Django-based automation tools and prepared detailed test reports and documentation.</li>
        <li>Conducted internal technical training sessions and created onboarding guides for team members.</li>
        <li>Led training sessions and knowledge transfer programs for junior team members on AI software tools and testing protocols.</li>
        <li>Participated in requirements analysis, debugging, and system integration testing.</li>
        <li>Contributed to the development and testing of AI-based defense software solutions for real-time data analytics and decision systems.</li>
        <li>Created detailed documentation and test cases for government project evaluations and audits.</li>
      </ul>
    },
    {
      role: "Software Tester",
      company: "Hi-touch Technology",
      description:
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>Executed Manual testing on ERP systems and generated QA reports.</li>
        <li>Contributed to daily scrum meetings and created test cases using real-time user scenarios.</li>
        <li>Tested ERP software and day-to-day working planning.</li>
        <li>Talk to the client on call, email etc. and resolve their complaints with developer team</li>
      </ul>
    },
    {
      role: "Mobile App Developer",
      company: "Nifty Online",
      description: 
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>Worked on frontend development of mobile apps using Java.</li>
 	      <li>Implemented UI components, maintained Git version control, and debugged layout/logic issues.</li>  
      </ul>
    },
  ];

  return (
    <motion.section
      className="px-6 py-10 bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-300 mb-10">Experience</h2>
      <ul className="grid gap-6 max-w-5xl mx-auto md:grid-cols-2">
        {experiences.map((exp, index) => (
          <motion.li
            key={index}
            className="bg-white dark:bg-gray-900 border-l-4 border-blue-600 dark:border-blue-400 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{exp.role}</p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">{exp.company}</p>
            <p className="text-gray-700 dark:text-gray-400 mt-4">{exp.description}</p>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

