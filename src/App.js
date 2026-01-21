import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Admissions from './Pages/Addmissions';
import Faculty from './Pages/Faculty';
import Academics from './Pages/Academics';
import Contact from './Pages/Contact';
import Tour from './Pages/Tour';

const App = () => {
  // Initialize state from localStorage or default to false (light mode)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Apply the 'dark' class to the HTML tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <Router> 
      <ScrollToTop />
      
      {/* Added transition-colors for smooth mode switching */}
      <div className="font-sans text-gray-900 bg-white dark:bg-slate-900 dark:text-gray-100 flex flex-col min-h-screen transition-colors duration-300">
        
        {/* Pass toggle props to Navbar */}
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="*" element={<div className="p-10 text-center dark:text-white"><h2>404 - Page Not Found</h2></div>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;