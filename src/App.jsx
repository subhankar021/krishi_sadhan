import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import react-router-dom
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Content from './components/Content/Content';
import Services from './components/Services/Services'; // Services page component
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <Navbar />

        {/* Define Routes */}
        <Routes>
          {/* Home page: Includes Hero, Content, and Footer */}
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Content />
                <Footer />
              </>
            } 
          />

          {/* Services page */}
          <Route path="/services" element={<Services />} />
        </Routes>

        {/* Keep Footer outside of routes if you want it on all pages */}
      </div>
    </Router>
  );
};

export default App;
