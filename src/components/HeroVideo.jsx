import React, { useEffect, useState, useRef } from 'react';
import './HeroVideo.css'
import { Fade, Flip } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

const HeroVideo = () => {
  const isMobile = useMediaQuery({ maxWidth: 1025 });
  const [showHeading, setShowHeading] = useState(false);
  const [showHeadingd, setShowHeadingd] = useState(false);
  const [scrollButtonVisible, setScrollButtonVisible] = useState(false);
  const { ref, inView } = useInView();
  const isFirstRender = useRef(true);
  let i = 0;

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowHeading(true);
        setScrollButtonVisible(true)
        i++;
      }, 6000);
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
  
  if(showHeading == true) {
    i++;
  }

  useEffect(() => {
    console.log(i)
  },[i])

  const renderFlipComponent = () => {
    if (showHeading) {
      return (
        <Flip duration={2500} triggerOnce={true}>
          <span className='gold'>X</span>
        </Flip>
      );
    }
    return null;
  };

  return (
    <div className='hero-video-div' ref={ref}>
      <Fade direction='up' delay={ 5000} duration={2000} className='hero-video-div' triggerOnce={true}>
        <video src="https://player.vimeo.com/progressive_redirect/playback/819940214/rendition/1080p/file.mp4?loc=external&signature=95920a1e74f71bb6bfcde53c30e8a8c932b331b0048822e31c190f853b1eb22c" type="video/mp4" autoPlay muted loop />
      </Fade>
      {/* <video src="/video/mov.mp4" autoPlay muted loop /> */}
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