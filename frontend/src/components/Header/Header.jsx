import React from 'react';
import './Header.css';
import image2 from '../../assets/group20.png';
import image1 from '../../assets/ellipse1.png';
const Header = () => {
  return (
    <div className="header-container">
    <div className='left_desc-text'>
    <div className='desc_text-container'>
      <div className='header-title'>
      Discover, Learn, Connect
      The <span className='other'>caffae</span> way! 
      </div>
      <br></br>
      <div className='header-desc'>
      Caffae is a transformative platform connecting seekers with experienced Gurus. Gain valuable advice, personalized guidance, and inspiration from those who have triumphed on the same path. Tap into a wealth of firsthand experiences, practical advice, and tailored guidance from our esteemed Gurus.Let Caffae bridge the gap between aspiration and achievement. Join us today!
      </div>
    </div>
    </div>
    <div className='left_desc-space'></div>
    <div className='left_desc-image'>
      <img src={image1} className='left_desc-bg_ellipse' />
      <img src={image2} className='left_desc-top_image' />
    </div>
  </div>
  )
}

export default Header;