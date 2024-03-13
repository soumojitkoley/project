import React from 'react'
import './Footer.css'
import { FaLocationDot, FaHouse, FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName);
  };
  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className='footer-div'>
      <div className="footer-upper">
        <div className="part part1">
          <Fade direction='up'><p className='footer-heading'>About IT & VFX Solutions</p></Fade>
          <Fade direction='up' delay={400} duration={1000}><p className='footer-desc about-big-p'>
            IT & VFX is a full service visual effects and information technology(IT) company located in Kolkata. We offer our clients production work including Design, Editing, Animation, VFX for commercials, also we offer to design, develop websites and to make seamless software.
          </p></Fade>
        </div>
        <div className="part part2">
          <Fade direction='up'><p className='footer-heading'>Quick Links</p></Fade>
          <div className="quick-links">
            <Fade direction='up' delay={500}><p className='footer-desc'>Careers</p></Fade>
            <Fade direction='up' delay={500}><p className='footer-desc'>Crew</p></Fade>
            <Fade direction='up' delay={500}><p className='footer-desc'>Our Work</p></Fade>
            <Fade direction='up' delay={500}><p className='footer-desc'>Latest News</p></Fade>
            <Fade direction='up' delay={500}><p className='footer-desc'>Our Partners</p></Fade>
            <Fade direction='up' delay={500}><p className='footer-desc'>Contact Us</p></Fade>
          </div>
        </div>
        <div className="part part3">
          <Fade direction='up'><p className='footer-heading'>Contact Information</p></Fade>
          <div className="address">
            {!isMobile ? (
              <Fade direction='up' delay={500}>
                <FaHouse
                  onMouseEnter={() => handleMouseEnter('house')}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: hoveredIcon === 'house' ? '#fff' : '#777' }}
                  className={hoveredIcon === 'house' ? 'hovered' : ''}
                />
              </Fade>
            ) : (<></>)}
            <Fade direction='up' delay={500}><p className='footer-desc'>IT & VFX</p></Fade>
          </div>
          <div className="location">
            {!isMobile ? (
              <Fade direction='up' delay={500}>
                <FaLocationDot
                  onMouseEnter={() => handleMouseEnter('location')}
                  onMouseLeave={handleMouseLeave}
                  style={{ color: hoveredIcon === 'location' ? '#fff' : '#777' }}
                  className={hoveredIcon === 'location' ? 'hovered' : ''}
                />
              </Fade>
            ) : (<></>)}
            <Fade direction='up' delay={500}><p className='footer-desc'>Barrackpore, North 24 Parganas, West Bengal,<br /> Kolkata - 700123</p></Fade>
          </div>
        </div>
      </div>
      <div className="footer-lower">
        <Fade direction='up' delay={500}><p className='footer-desc'>© 2024 IT & VFX Solutions</p></Fade>
        <div className="social-links">
          <Fade direction='up' delay={500}>
            <FaFacebook
              onMouseEnter={() => handleMouseEnter('fb')}
              size={30}
              onMouseLeave={handleMouseLeave}
              style={{ color: hoveredIcon === 'fb' ? '#316FF6' : '#777' }}
              className={hoveredIcon === 'fb' ? 'hovered' : 'sl'}
            />
          </Fade>
          <Fade direction='up' delay={500}>
            <FaInstagram
              onMouseEnter={() => handleMouseEnter('insta')}
              size={30}
              onMouseLeave={handleMouseLeave}
              style={{ color: hoveredIcon === 'insta' ? 'rgb(255, 0, 85)' : '#777' }}
              className={hoveredIcon === 'insta' ? 'hovered insta' : 'sl'}
            />
          </Fade>
          <Fade direction='up' delay={500}>
            <FaXTwitter
              onMouseEnter={() => handleMouseEnter('x')}
              size={30}
              onMouseLeave={handleMouseLeave}
              style={{ color: hoveredIcon === 'x' ? '#141414' : '#777' }}
              className={hoveredIcon === 'x' ? 'hovered' : 'sl'}
            />
          </Fade>
          <Fade direction='up' delay={500}>
            <FaYoutube
              onMouseEnter={() => handleMouseEnter('yt')}
              size={30}
              onMouseLeave={handleMouseLeave}
              style={{ color: hoveredIcon === 'yt' ? 'red' : '#777' }}
              className={hoveredIcon === 'yt' ? 'hovered' : 'sl'}
            />
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Footer