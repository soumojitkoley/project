import React from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { Fade, Slide } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive';
import './Service.css'

const Service = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className='service-main-div'>
      <Fade duration={1000}>
        <ParallaxBanner
          layers={[
            {
              image: 'https://images.unsplash.com/photo-1485700281629-290c5a704409?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              speed: 30
            }
          ]}
          className="parallax-section"
        >
          {/* <Parallax speed={20} className='service-video'>
          <video src="/video/hero-video.mp4" type="video/mp4" autoPlay muted loop />
          </Parallax> */}
          <div className="parallax-overlay">
            <Slide direction="right" dealy={200} duration={1500}>
              <h1 className='h1-s'>Our Services</h1>
            </Slide>
            <div className="service-list">
              <Fade direction='up' delay={500} duration={1500}>
                <div className="list-item">
                  <p className='p-s-1'>Animation & VFX</p>
                  <p className='p-s-2'>We specialize in creating stunning visual effects and animations that bring your ideas to life. From concept development to post-production, we deliver high-quality animation and VFX solutions for your projects.</p>
                </div>
              </Fade>
              <Fade direction='down' delay={500} duration={1500}>
                <div className="list-item">
                  <p className='p-s-1'>Graphic Design</p>
                  <p className='p-s-2'>Our graphic design services encompass a wide range of creative solutions, including logo design, branding, print materials, and digital graphics. We combine artistic vision with technical expertise to create visually appealing designs that effectively communicate your message.</p>
                </div>
              </Fade>
              <Fade direction='up' delay={500} duration={1500}>
                <div className="list-item">
                  <p className='p-s-1'>Web Developement</p>
                  <p className='p-s-2'>With expertise in a variety of programming languages and frameworks, we develop custom websites and web applications tailored to your specific needs. Whether you need an e-commerce platform, a content management system, or a custom web solution, we have the skills to make it happen.</p>
                </div>
              </Fade>
              <Fade direction='down' delay={500} duration={1500}>
                <div className="list-item">
                  <p className='p-s-1'>Web Design</p>
                  <p className='p-s-2'>Our web design services focus on creating user-friendly, aesthetically pleasing interfaces that enhance the overall user experience. We employ modern design principles and responsive techniques to ensure your website looks great and functions flawlessly across all devices.</p>
                </div>
              </Fade>
            </div>
          </div>
        </ParallaxBanner>
      </Fade>
    </div>
  )
}

export default Service


{/* <Parallax speed={20}>
            <Fade className='bg1' speed={500} cascade damping={0.1}>{"Thinking of you keeps me awake. Dreaming of you keeps me asleep.\nBeing with you keeps me alive."}</Fade>
          </Parallax> */}