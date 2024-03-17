import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JoinNow from '../components/JoinNow'
import Tools from '../components/Tools'
import People from '../components/People'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import './About.css'

const About = () => {

  useEffect(() => {
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
      <div className='our-story'>
        <div className='os-header'>
          <h1>Our Story</h1>
          <div className='underline-os'></div>
          <p className='p-os'>IT & VFX was founded in 2024 with a goal to put people at the centre of visual effects and create an environment for artists and filmmakers built around respect and integrity.<br /> <br /> IT & VFX is a full service visual effects and information technology(IT) company located in Kolkata. We offer our clients production work including Design, Editing, Animation, VFX for commercials, also we offer to design, develop websites and to make seamless software.</p>
        </div>
        <Fade delay={200} duration={3000}>
          <div className="os-image-part">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </Fade>
      </div>
      <People/>
      <Tools />
      <JoinNow />
      <Footer />
    </div>
  )
}

export default About