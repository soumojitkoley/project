import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './About.css'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive';

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


const About = () => {

  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll();
  })

  return (
    <div className='about-page-div'>
      <Navbar />
      <div className='about-video'>
        <video src="https://player.vimeo.com/progressive_redirect/playback/588787431/rendition/1080p/file.mp4?loc=external&signature=059702aabd8078a0496532d9e4e21de00e50008dbed408a7a58d939c5942226c" autoPlay muted loop />
        <h1 className='ap-h1' data-scroll data-scroll-speed='0.5' >
          <Fade direction='left' duration={2000} triggerOnce={true}>About</Fade>
        </h1>
        <h2 className='ap-h2' data-scroll data-scroll-speed='0.3' triggerOnce={true}>
          <Fade direction='left' duration={2000} triggerOnce={true}>
            <div>IT & VFX Solutions exists</div>
            <div>to make IT and VFX a positive experience.</div>
          </Fade>
        </h2> 
      </div>
      <Footer/>
    </div>
  )
}

export default About