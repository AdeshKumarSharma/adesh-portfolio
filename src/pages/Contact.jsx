import { motion } from 'framer-motion';

export default function Contact() {

  return (
    <motion.section
      className="py-16 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-semibold text-blue-700 dark:text-blue-300">Contact Me</h2>

        <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
          <p><strong>Email:</strong> 2018adeshkumarsharma@gmail.com</p>
          <p><strong>Phone:</strong> +91-8791799154</p>
          <p>
            <strong>LinkedIn:</strong> 
            <a href="https://www.linkedin.com/in/adesh-kumar-sharma-b09945141/" className="text-blue-600 dark:text-blue-400 hover:underline">
              linkedin.com/in/adesh
            </a>
          </p>
          <p>
            <strong>GitHub:</strong> 
            <a href="https://github.com/AdeshKumarSharma/" className="text-blue-600 dark:text-blue-400 hover:underline">
              github.com/adesh
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
}

