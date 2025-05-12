import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-700 dark:text-blue-400">Adesh Kumar Sharma</span>. All rights reserved.
        </p>
        <div className="flex justify-center flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/AdeshKumarSharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adesh-kumar-sharma-b09945141/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:2018adeshkumarsharma@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
