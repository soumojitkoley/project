import React , { useEffect } from 'react'
import './Reviews.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Review from '../components/Review'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

const Reviews = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  

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
    <div className='reviews-main-div'>
      <Navbar/>
      <div className='about-video'>
        <video src="/video/about-hero.m4v" autoPlay muted loop />
        <div className='about-heading'>
          <h1 className='ap-h1' data-scroll data-scroll-speed='0.5' >
            <Fade direction='right' duration={2000} triggerOnce={true}>Reviews</Fade>
          </h1>
          <h2 className='ap-h2' data-scroll data-scroll-speed='0.3' triggerOnce={true}>
            <Fade direction='right' duration={2000} triggerOnce={true}>
              <div>Experience the magic of our</div>
              <div>photography through the eyes of our happy clients!</div>
            </Fade>
          </h2>
        </div>
        {isMobile ? (<div onClick={() => scrollToSection('about-target', 80)} className="scroll"></div>) : (<div onClick={() => scrollToSection('about-target')} className="mouse"></div>)}
      </div>
      <Review/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Reviews