import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>WE ENSURE EDUCATION FOR BETTER WORLD!</h1>
      <p>A well-established institution dedicated to academic excellence and holistic development, it focuses on providing quality education and fostering innovation. With state-of-the-art infrastructure and a commitment to research, it prepares students for professional success and lifelong learning in their chosen fields.</p>
     <button className='btn'>Exlpore more <img src={dark_arrow} alt="" /></button>
    </div>
    </div>
  )
}

export default Hero
