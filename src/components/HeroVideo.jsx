import React from 'react'
import './HeroVideo.css'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Rotate } from 'react-awesome-reveal'
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
  },[])

  const scrollToSection = (sectionId) => {
    locomotiveScroll.scrollTo(`#${sectionId}`);
  };
  

  return (
    <div className='hero-video-div' ref={ref}>
      {/* <video src="https://player.vimeo.com/progressive_redirect/playback/819940214/rendition/1080p/file.mp4?loc=external&signature=95920a1e74f71bb6bfcde53c30e8a8c932b331b0048822e31c190f853b1eb22c" type="video/mp4" autoPlay muted loop /> */}
      <video src="/video/mov.mp4" autoPlay muted loop />
      {isMobile ? (
        <h1 className={`hv-h1 ${showHeading ? 'show' : ''}`}>
        <Fade delay={500} triggerOnce={true}>
          <span>Welcome to</span>
          <span className='gold'>IT & VFX</span>
        </Fade>
      </h1>
      ):(
        <h1 className={`hv-h1 ${showHeading ? 'show' : ''}`}>
          <div className="part-1">
          <span data-scroll data-scroll-speed="3.0">W</span>
          <span data-scroll data-scroll-speed="2.8">e</span>
          <span data-scroll data-scroll-speed="2.6">l</span>
          <span data-scroll data-scroll-speed="2.4">c</span>
          <span data-scroll data-scroll-speed="2.2">o</span>
          <span data-scroll data-scroll-speed="2">m</span>
          <span data-scroll data-scroll-speed="1.8">e</span>
          <span className='space1' data-scroll data-scroll-speed="1.6">t</span>
          <span data-scroll data-scroll-speed="1.4">o</span>
          </div>
          <div className="part-2">
            {/* <span className='gold' data-scroll data-scroll-speed="0.8">IT & VF</span> */}
            <span className={`gold`}  data-scroll data-scroll-speed="1.2">I</span>
            <span className={`gold`}  data-scroll data-scroll-speed="1">T</span>
            <span className={`gold space`}  data-scroll data-scroll-speed="0.8">&</span>
            <span className={`gold`}  data-scroll data-scroll-speed="0.6">V</span>
            <span className={`gold`}  data-scroll data-scroll-speed="0.4">F</span>
            <div data-scroll data-scroll-speed="0.2">
              <Flip delay={2000} triggerOnce={true}><span className={`gold`}  >X</span></Flip>
            </div>
            
          </div>
      </h1>
      )}
      
      {isMobile ? (<div onClick={() => scrollToSection('targetElementm')} className="scroll"></div>) : (<div onClick={() => scrollToSection('target')} className="mouse"></div>)}
    </div>
  )
}

export default HeroVideo