import React from 'react'
import './HeroVideo.css'
import { Zoom } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const HeroVideo = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showHeading, setShowHeading] = useState(false);
  const { ref, inView } = useInView(); // Initialize useInView hook

  // useEffect(() => {
    
  //   const timer = setTimeout(() => {
  //     setShowHeading(true);
  //   }, 1500); 
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowHeading(true);
      }, 1500); 
      return () => clearTimeout(timer);
    }
  }, [inView]);


  return (
    <div className='hero-video-div' ref={ref}>
      <video src="https://player.vimeo.com/progressive_redirect/playback/819940214/rendition/1080p/file.mp4?loc=external&signature=95920a1e74f71bb6bfcde53c30e8a8c932b331b0048822e31c190f853b1eb22c" type="video/mp4" autoPlay muted loop />
      <h1 className={`hv-h1 ${showHeading ? 'show' : ''}`}><Zoom direction={isMobile ? 'up' : ''} delay={500} >Welcome to IT & VFX</Zoom></h1>
      <div class="mouse"></div>
    </div>
  )
}

export default HeroVideo