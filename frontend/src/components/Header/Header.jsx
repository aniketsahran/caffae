import React from 'react';
import './Header.css';
import image2 from '../../assets/group20.png';
import image1 from '../../assets/ellipse1.png';
import image3 from '../../assets/caffaeraw-031.png';
import image4 from '../../assets/caffaeraw-041.png';
const Header = () => {
  return (
    <div className="header-container">
    <div className='header-left_desc-text'>
    <div className='header-desc_text-container'>
      <div className='header-logo'>
    <img src={image4} className='header-logo-top' />  
    <img src={image3} className='header-caffae-top' />
      </div>
      <div className='header-title'>
      Discover, Learn, Connect
      The <span className='header-other'>caffae</span> way! 
      </div>
      <div className='header-desc'>
      Caffae is a transformative platform connecting seekers with experienced Gurus. Gain valuable advice, personalized guidance, and inspiration from those who have triumphed on the same path. Tap into a wealth of firsthand experiences, practical advice, and tailored guidance from our esteemed Gurus.Let Caffae bridge the gap between aspiration and achievement. Join us today!
      </div>
     <a href="#container"><button className='header-button'>Join our community</button></a> 
    </div>
    </div>
    <div className='header-left_desc-image'>
      <img src={image1} className='header-left_desc-bg_ellipse' />
      <img src={image2} className='header-left_desc-top_image' />
    </div>
  </div>
  )
}

export default Header;