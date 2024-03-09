import React from 'react'
import './HeroVideo.css'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Link } from 'react-scroll';

// import { ScrollLink } from 'react-scroll';




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

  const scrollToSection = (sectionId) => {
    locomotiveScroll.scrollTo(`#${sectionId}`);
  };
  

  return (
    <div className='hero-video-div' ref={ref}>
      <video src="https://player.vimeo.com/progressive_redirect/playback/819940214/rendition/1080p/file.mp4?loc=external&signature=95920a1e74f71bb6bfcde53c30e8a8c932b331b0048822e31c190f853b1eb22c" type="video/mp4" autoPlay muted loop />
      {/* <video src="/video/mov.mp4" autoPlay muted loop /> */}
      <h1 className={`hv-h1 ${showHeading ? 'show' : ''}`}>
        <Fade delay={500} triggerOnce={true}>
          <span>Welcome to</span>
          <span className='gold'>IT & VFX</span>
        </Fade>
      </h1>
      {isMobile ? (<div onClick={() => scrollToSection('targetElementm')} className="scroll"></div>) : (<div onClick={() => scrollToSection('target')} className="mouse"></div>)}
    </div>
  )
}

export default HeroVideo