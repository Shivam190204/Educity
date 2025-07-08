import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About= ({setplayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => {setplayState(true)}} />
      </div>
      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nuturing Tomarrow's Leaders Today</h2>
        <p>A prestigious university known for its commitment to academic excellence and innovation, it offers a diverse range of programmes across various disciplines. With a focus on research, practical learning, and holistic development, it equips students with the skills and knowledge needed to excel in their careers and contribute meaningfully to society. Its vibrant campus fosters intellectual growth, collaboration, and a strong sense of community.</p>
        <p>This institution emphasises fostering critical thinking, creativity, and a global perspective among its students. By combining rigorous academic curricula with experiential learning opportunities, it ensures that graduates are well-prepared to tackle real-world challenges and make meaningful contributions in their chosen fields.</p>
        <p>With a dedicated faculty, cutting-edge facilities, and an inclusive environment, the university promotes both personal and professional growth. It remains committed to nurturing leaders who are not only equipped with technical expertise but also possess strong ethical values and a sense of responsibility towards society.</p>
      </div>
      
    </div>
  )
}

export default About
