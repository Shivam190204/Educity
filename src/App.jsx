import React, { useState } from 'react';
// Standardized import paths for consistency and Vercel compatibility
// Ensure your actual file/folder names on GitHub match this casing:
// e.g., src/components/Navbar/Navbar.jsx
//       src/components/Hero/Hero.jsx
//       src/components/Programs/Programs.jsx (folder 'Programs', not 'programs')
//       ...and so on for all components.

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs'; // Corrected folder casing
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus'; // Corrected folder casing
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Videoplayer from './components/Videoplayer/Videoplayer';


const App = () => {
  const [playState, setplayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Program' title='What we offer' />
        <Programs />
        <About setplayState={setplayState} />
        <Title subtitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subtitle='Testimonials' title='What a Student says..' />
        <Testimonials />
        <Title subtitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setplayState={setplayState} />
    </div>
  );
};

export default App;
