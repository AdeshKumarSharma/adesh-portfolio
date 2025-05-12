import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'MERN E-commerce Project',
    description:
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>Full-stack e-commerce site using MongoDB, Express.js, React.js, and Node.js. Includes cart, checkout, Razorpay, JWT auth, and Cloudinary image uploads.</li>
        <li>Implemented product management features: add/update/delete products, category filtering, and dynamic image upload using Cloudinary API.</li>
        <li> 	Built a shopping cart and checkout system with real-time item updates, price calculation, and delivery fee handling.</li>
        <li> 	Integrated Razorpay for online payments with real-time payment status tracking and order confirmation.</li>
        <li> 	Designed an admin dashboard for order management, product inventory tracking, and analytics visualization.</li>
      </ul>

  },
  {
    title: 'Portfolio Website',
    description:
      'Fully responsive personal portfolio using React.js, Tailwind CSS, and Framer Motion. Includes light/dark mode, animation, and routing.',
      
  },
];

export default function Projects() {
  return (
    <motion.section
      className="px-6 py-10 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-300 mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 hover:scale-[1.02] transition-transform border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-3">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
