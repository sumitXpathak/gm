import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import ScrollToTop
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
  return (
    /* Added basename to match the GitHub repository name */
    <Router> 
      <ScrollToTop />
      
      <div className="font-sans text-gray-900 bg-white dark:bg-slate-900 dark:text-white flex flex-col min-h-screen transition-colors duration-300">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tour" element={<Tour />} />
            {/* Added a catch-all for the friend's app too */}
            <Route path="*" element={<div className="p-10 text-center"><h2>404 - Page Not Found</h2></div>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;