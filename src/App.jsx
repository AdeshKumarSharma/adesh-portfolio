import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Resume from './components/Resume'
import Skills from './components/Skills'

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDark = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className='bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen flex flex-col'>
      <Navbar toggleDark={toggleDark} darkMode={darkMode} />
      <main className='flex-grow'>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/adesh-portfolio' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/resume.pdf' element= {<Resume />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App