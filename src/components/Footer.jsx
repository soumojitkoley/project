import React from 'react'
import './Footer.css'
import { FaLocationDot, FaHouse } from "react-icons/fa6";
import { useState } from 'react';


const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };
  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className='footer-div'>
      <div className="footer-upper">
        <div className="part part1">
          <div className="footer-about">
            <p className='footer-heading'>About IT & VFX</p>
            <p className='footer-desc about-big-p'>
            IT & VFX is a full service visual effects and information technology(IT) company located in Kolkata. We offer our clients production work including Design, Editing, Animation, VFX for commercials, also we offer to design, develop websites and to make software
            </p>
          </div>
          <div className="footer-contact">
            <p className='footer-heading'>Contact Information</p>
            <div className="address">
              <FaHouse
                onMouseEnter={() => handleMouseEnter('house')}
                onMouseLeave={handleMouseLeave}
                style={{ color: hoveredIcon === 'house' ? 'red' : '#777' }}
                className={hoveredIcon === 'house' ? 'hovered' : ''}
              />
              <p className='footer-desc'>IT & VFX</p>
            </div>
            <div className="location">
              <FaLocationDot
                onMouseEnter={() => handleMouseEnter('location')}
                onMouseLeave={handleMouseLeave}
                style={{ color: hoveredIcon === 'location' ? 'blue' : '#777' }}
                className={hoveredIcon === 'location' ? 'hovered' : ''}
              />
              <p className='footer-desc'>Barrackpore, North 24 Parganas, West Bengal</p>
            </div>
          </div>
        </div>
        <div className="part part2">
          <p className='footer-heading'>Quick Links</p>
          <div className="quick-links">
            <p className='footer-desc'>Careers</p>
            <p className='footer-desc'>Crew</p>
            <p className='footer-desc'>Our Work</p>
            <p className='footer-desc'>Latest News</p>
            <p className='footer-desc'>Our Partners</p>
            <p className='footer-desc'>Contact Us</p>
          </div>
        </div>
        <div className="part part3">
          <div className="news-letter">

          </div>
        </div>
        <div className="part part4">
          <div className="latest-news">

          </div>
        </div>
      </div>
      <div className="footer-lower">

      </div>
    </div>
  )
}

export default Footer