import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JoinNow from '../components/JoinNow'
import Tools from '../components/Tools'
import People from '../components/People'
import ContactUs from '../components/ContactUs'
import JobForm from '../forms/JobForm'
import ContactForm from '../forms/ContactForm'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import './Contact.css'

const Contact = () => {

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
        <video src="/video/hero-video.mp4" autoPlay muted loop />
        <div className='about-heading'>
          <h1 className='ap-h1' data-scroll data-scroll-speed='0.5' >
            <Fade direction='down' duration={2000}>Contact</Fade>
          </h1>
          <h2 className='ap-h2' data-scroll data-scroll-speed='0.3'>
            <Fade direction='down' duration={2000}>
              <div>Get in touch with us</div>
              <div>let's connect and create together</div>
            </Fade>
          </h2>
        </div>
        {isMobile ? (<div onClick={() => scrollToSection('about-target', 80)} className="scroll"></div>) : (<div onClick={() => scrollToSection('about-target')} className="mouse"></div>)}
      </div>
      <div className='our-story' id='about-target'>
        <div className='os-header'>
          <h1>Contact Us</h1>
          <div className='contact-underline-os'></div>
          <p className='p-os'>If you are interested in starting a production or have something you think we could help you with, please contact one of our team and we will get in touch with you shortly. Stay safe!<br /> <br /> IT & VFX is a full service visual effects and information technology(IT) company located in Kolkata. We offer our clients production work including Design, Editing, Animation, VFX for commercials, also we offer to design, develop websites and to make seamless software.</p>
        </div>
        <Fade delay={200} duration={3000}>
          <div className="os-image-part">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </Fade>
      </div>
      <People />
      <Tools />
      <ContactForm/>
      <JoinNow />
      <Footer />
    </div>
  )
}

export default Contact