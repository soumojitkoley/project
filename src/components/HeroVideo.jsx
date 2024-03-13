import React, { useEffect, useState } from 'react';
import { Fade, Flip } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import './HeroVideo.css'

const HeroVideo = () => {
  const isMobile = useMediaQuery({ maxWidth: 1025 });
  const [showHeading, setShowHeading] = useState(false);
  const [scrollButtonVisible, setScrollButtonVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowHeading(true);
        setScrollButtonVisible(true)
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
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

  const renderFlipComponent = () => {
    if (showHeading) {
      return (
        <Flip duration={2000} triggerOnce={true}>
          <span className='gold'>X</span>
        </Flip>
      );
    }
  };

  return (
    <div className='hero-video-div' ref={ref}>
      <Fade direction='up' delay={100} duration={3000} className='hero-video-div' triggerOnce={true}>
        <video src="https://player.vimeo.com/progressive_redirect/playback/819940214/rendition/1080p/file.mp4?loc=external&signature=95920a1e74f71bb6bfcde53c30e8a8c932b331b0048822e31c190f853b1eb22c" type="video/mp4" autoPlay muted loop />
      </Fade>
      {isMobile ? (
        <h1 className={`hv-h1 ${showHeading ? 'show' : ''}`}>
          <span data-scroll data-scroll-speed='0.8'>Welcome to </span>
          <div className="part-1" data-scroll data-scroll-speed='0.4'>
            <span className='gold'>IT & VF</span>
            {renderFlipComponent()}
          </div>
        </h1>
      ) : (
        <h1 className={`hv-h1 ${showHeading ? 'show' : ''}`}>
          <span data-scroll data-scroll-speed='0.8'>Welcome to</span>
          <div className="part-2" data-scroll data-scroll-speed='0.4'>
            <span className='gold'>IT & VF</span>
            {renderFlipComponent()}
          </div>
        </h1>
      )}
      {isMobile && scrollButtonVisible ? (<div onClick={() => scrollToSection('targetElementm', 80)} className="scroll"></div>) : (scrollButtonVisible ? (<div onClick={() => scrollToSection('target')} className="mouse"></div>) : (<></>))}
    </div>
  )
}

export default HeroVideo