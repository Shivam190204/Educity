import React, { useState } from 'react';


import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs'; // Corrected folder casing
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/campus/Campus'; // Corrected folder casing
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Videoplayer from './Components/Videoplayer/Videoplayer';


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
