import React from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { Fade, Zoom } from 'react-awesome-reveal'
import { GrUserExpert, GrVideo } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import './ContactUs.css'
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className='cu-main-div'>
      <Fade duration={1000}>
        <ParallaxBanner
          layers={[
            {
              image: 'https://images.pexels.com/photos/4552397/pexels-photo-4552397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              speed: 30
            }
          ]}
          className="cu-parallax-section"
        >
          <div className="cu-parallax-overlay">
            <div className='cu-header'>
              <Zoom direction='up' duration={2000} triggerOnce={true}>
                <h1 className='h1-cu'>Contact Us</h1>
              </Zoom>
              <Fade direction='down' delay={500} duration={1000}>
                <p className='p-cu'>Our versatile team is equipped to handle any projects. There's nothing we can't tackle, If you have a idea in mind that you'd like to collaborate on, don't hesitate to get in touch!</p>
              </Fade>
              <Zoom duration={2000}>
                <div className='cu-btn'>
                  <Link to='/contact' style={{ textDecoration: 'none' }}> 
                  <button class="animated-button" >
                    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                    </svg>
                    <span class="text">Contact Us</span>
                    <span class="circle"></span>
                    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      ></path>
                    </svg>
                  </button>
                  </Link>
                </div>
              </Zoom>
            </div>
            <div className="cu-service-list">
              <Fade direction='left' delay={500} duration={1500}>
                <div className="cu-list-item">
                  <GrUserExpert size={30} />
                  <p className='p-s-1'>Incredible talent</p>
                  <p className='p-s-2'>A dedicated, highly skilled IT & VFX team at your service.</p>
                </div>
              </Fade>
              <Fade direction='right' delay={500} duration={1500}>
                <div className="cu-list-item">
                  <GrVideo size={30} />
                  <p className='p-s-1'>Pristine Quality</p>
                  <p className='p-s-2'>We never compromise on quality, it's why our clients love us!</p>
                </div>
              </Fade>
              <Fade direction='left' delay={500} duration={1500}>
                <div className="cu-list-item">
                  <MdOutlineSecurity size={30} />
                  <p className='p-s-1'>Security</p>
                  <p className='p-s-2'>We are constantly maintaining and improving our Security.</p>
                </div>
              </Fade>
              <Fade direction='right' delay={500} duration={1500}>
                <div className="cu-list-item">
                  <FaRegHandshake size={30} />
                  <p className='p-s-1'>A guiding hand</p>
                  <p className='p-s-2'>We work closely with you to make sure your vision is realized.</p>
                </div>
              </Fade>
            </div>
          </div>
        </ParallaxBanner>
      </Fade>
    </div>
  )
}

export default ContactUs