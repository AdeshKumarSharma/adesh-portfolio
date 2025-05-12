import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ toggleDark, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: 'Skills', path: '/skills' },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#f9fafb] dark:bg-gray-900 shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-indigo-700 dark:text-blue-300">
          Adesh Kumar Sharma
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-neutral-700 dark:text-gray-200">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="hover:text-indigo-600 dark:hover:text-blue-400 transition-colors"
            >
              {name}
            </Link>
          ))}
          <button
            onClick={toggleDark}
            className="ml-4 px-3 py-1 border rounded text-sm hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-neutral-700 dark:text-gray-200">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-neutral-700 dark:text-gray-200">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block hover:text-indigo-600 dark:hover:text-blue-400 transition-colors"
            >
              {name}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleDark();
              setIsOpen(false);
            }}
            className="mt-2 px-3 py-1 border rounded text-sm hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      )}
    </motion.nav>
  );
}
