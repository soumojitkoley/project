import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JoinNow from '../components/JoinNow'
import Tools from '../components/Tools'
import People from '../components/People'
import ContactUs from '../components/ContactUs'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import './About.css'

const About = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])

  const scrollToSection = (sectionId, customOffset) => {
    const defaultOffset = 80;
    const offset = customOffset || defaultOffset;
    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        locomotiveScroll.scrollTo(sectionElement.offsetTop - offset);
      }
    }, 200);
  };


  const isMobile = useMediaQuery({ maxWidth: 1025 });

  return (
    <div className='about-page-div'>
      <Navbar />
      <div className='about-video'>
        <video src="/video/about-hero.m4v" autoPlay muted loop />
        <div className='about-heading'>
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
        {isMobile ? (<div onClick={() => scrollToSection('about-target', 80)} className="scroll"></div>) : (<div onClick={() => scrollToSection('about-target')} className="mouse"></div>)}
      </div>
      <div className='our-story' id='about-target'>
        <div className='os-header'>
          <h1>Our Story</h1>
          <div className='underline-os'></div>
          <p className='p-os'>IT & VFX was founded in 2024 with a goal to put people at the centre of visual effects and create an environment for artists and filmmakers built around respect and integrity.<br /> <br /> IT & VFX is a full service visual effects and information technology(IT) company located in Kolkata. We offer our clients production work including Design, Editing, Animation, VFX for commercials, also we offer to design, develop websites and to make seamless software.</p>
        </div>
        <Fade delay={200} duration={3000}>
          <div className="os-image-part">
            <img data-scroll data-scroll-speed='0.2' src="/images/about-bg1.jpg" alt="" />
            <img data-scroll data-scroll-speed='0.5' src="/images/about-bg2.jpg" alt="" />
          </div>
        </Fade>
      </div>
      <People />
      <Tools />
      <ContactUs/>
      <JoinNow />
      <Footer />
    </div>
  )
}

export default About