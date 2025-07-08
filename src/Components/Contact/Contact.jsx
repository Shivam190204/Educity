import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0d13107a-5826-4652-a645-8f6f226a72f2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };





  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={ msg_icon} alt="" /></h3>
        <p>"Have questions about our programmes, admissions, or campus life? Send us a message, and our team will be happy to assist you. We look forward to hearing from you and helping you take the next step towards your future!"</p>
        <ul>
            <li><img src={mail_icon} alt="" />shivamsonawane2468@gmail.com</li>
            <li> <img src={phone_icon} alt="" />+91   7709843928</li>
            <li> <img src={location_icon} alt="" />123 Elmwood Avenue, Springfield, London, AB12 3CD, United Kingdom</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter your name'  required/>
            <label >Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your Mob No'  required/>
            <label >Write your message here</label>
            <textarea name="message"   row="6" placeholder='Enter your message...' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
