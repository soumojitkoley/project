import React, { useEffect, useState } from 'react'
import './JoinNow.css'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

const JoinNow = () => {
  const isMobile = useMediaQuery({ maxWidth: 1025 });
  const [show, setShow] = useState(false);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShow(true)
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [inView]);


  return (
    <div className='join-main-div' ref={ref}>
      {show && !isMobile ? (<>
      <Fade delay={500} direction='left' duration={1500} >
        <div className="image-part" data-scroll>
          <img data-scroll src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </Fade>
        <Fade delay={500} direction='right' duration={1500} >
          <div className='apply-part'>
            <h1 className='h1-jn'>Join the team</h1>
            <a class="swipe">Apply today
              <span class="container">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                </svg>
              </span>
            </a>
          </div>
      </Fade>
        </>) : (<></>)}
      {show & isMobile ? (
        <>
        <div className="image-part" data-scroll>
        <img data-scroll src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
        <div className='apply-part'>
          <h1 className='h1-jn'>Join the team</h1>
          <a class="swipe">Apply today
            <span class="container">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
              </svg>
            </span>
          </a>
        </div>
        </>
      ) : (<></>)}
    </div>
  )
}

export default JoinNow