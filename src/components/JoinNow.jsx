import React from 'react'
import './JoinNow.css'
import { Fade } from 'react-awesome-reveal'

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

const JoinNow = () => {
  return (
    <div className='join-main-div'>
      <Fade delay={500} direction='left' duration={1500}>
        <div className="image-part" data-scroll>
          <img data-scroll src="https://images.unsplash.com/photo-1682685797527-63b4e495938f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </Fade>
      <Fade delay={500} direction='right' duration={1500}>
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
    </div>
  )
}

export default JoinNow