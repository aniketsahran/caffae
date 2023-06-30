import React from 'react';
import './Footer.css';
import image1 from '../../assets/mention.png';
import image2 from '../../assets/linkedin.png';
import image3 from '../../assets/instagram.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className='footer-form_section'>
        <div className='footer-image'>
          <img src={image1} className='footer-sub_image' />
        </div>
        <div className='footer-space'></div>
        <div className='footer-form'>
          <form>
            <p>Your Name</p>
            <input type="text" class="footer-form-field"  placeholder="Your Name" />
            <p>Your E-Mail</p>
            <input type="email" class="footer-form-field" placeholder="Ex. yourname@example.com" />
            <p>Your Contact Number</p>
            <input type="text" class="footer-form-field"  placeholder="Ex. 9876543210" />
            <p>Write the Problem you want to ask our guru</p>
            <textarea type="text" class="footer-form-field textarea"  placeholder="Write your question." />
            <button type="submit" class="footer-form-btn">Submit</button>
          </form>
        </div>
      </div>
      <div className='footer-divider'></div>
      <div className='footer-social_section'>
        <div className='footer-social_section-header'>Follow Us!</div>
        <div className='footer-social_section-social_handles'>
          <a><img src={image2} /></a>
          <a><img src={image3} /></a>
        </div>
        <div className='footer-social_section-mail'>
          <p><b>Contact Us</b><br />
          <a href="mailto:caffaecare@gmail.com">caffaecare@gmail.com</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer;