import React from 'react'
import './HeroVideo.css'
import { Fade, Flip } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

const HeroVideo = () => {
  const isMobile = useMediaQuery({ maxWidth: 1025 });
  const [showHeading, setShowHeading] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowHeading(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [inView]);
  
  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll();
  })

  // const scrollToSection = (sectionId) => {
  //   locomotiveScroll.scrollTo(`#${sectionId}`);
  // };

  const scrollToSection = (sectionId, customOffset) => {
    const defaultOffset = 80; // Default offset when navbar is not fixed
    const offset = customOffset || defaultOffset;
    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
          locomotiveScroll.scrollTo(sectionElement.offsetTop - offset);
      }
  }, delay);
};




  const renderFlipComponent = () => {
    if (showHeading) {
      return (
        <Flip delay={1000} duration={1500} triggerOnce={true}>
          <span className='gold'>X</span>
        </Flip>
      );
    }
    return null;
  };
  

  return (
    <div className='hero-video-div' ref={ref}>
      <video src="https://player.vimeo.com/progressive_redirect/playback/819940214/rendition/1080p/file.mp4?loc=external&signature=95920a1e74f71bb6bfcde53c30e8a8c932b331b0048822e31c190f853b1eb22c" type="video/mp4" autoPlay muted loop />
      {/* <video src="/video/mov.mp4" autoPlay muted loop /> */}
      {isMobile ? (
        <h1 className={`hv-h1 ${showHeading ? 'show' : ''}`}>
        <Fade delay={500} triggerOnce={true}>
          <span>Welcome to</span>
          <span className='gold'>IT & VFX</span>
        </Fade>
      </h1>
      ):(
        <h1 className={`hv-h1 ${showHeading ? 'show' : ''}`} data-scroll>
          <span data-scroll data-scroll-speed='0.8'>Welcome to</span>
          <div className="part-2" data-scroll data-scroll-speed='0.4'>
            <span className='gold'>IT & VF</span>
            {renderFlipComponent()}
          </div>
      </h1>
      )}
      
      {isMobile ? (<div onClick={() => scrollToSection('targetElementm', 80)} className="scroll"></div>) : (<div onClick={() => scrollToSection('target')} className="mouse"></div>)}
    </div>
  )
}

export default HeroVideo