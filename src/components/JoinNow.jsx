import React,{useState} from 'react'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import './JoinNow.css'

const JoinNow = () => {
  const isMobile = useMediaQuery({ maxWidth: 1025 });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [applyHovered, setApplyHovered] = useState(false);

  function handleFormSubmit() {
    const googleFormUrl = 'https://forms.gle/g12HTSPmAEjNuze87';
    const newTab = window.open(googleFormUrl, '_blank');
    setApplyHovered(true)
    setFormSubmitted(true);
  }

  return (
    <div className='join-main-div'>
      {!isMobile ? (<>
        <Fade delay={500} direction='left' duration={1500} >
          <div className="image-part" data-scroll>
            <img data-scroll src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </Fade>
        <Fade delay={500} direction='right' duration={1500} >
          <div className='apply-part'>
            <h1 className='h1-jn'>Join the team</h1>
            <button class={`swipe ${applyHovered ? 'apply-hovered' : ''}`} id="applyButton" onClick={handleFormSubmit} disabled={formSubmitted}>
            {formSubmitted ? 'SUBMITTED' : 'Apply Now'}
              <span class="container">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                </svg>
              </span>
            </button>
          </div>
        </Fade>
      </>) : (<></>)}
      {isMobile ? (
        <>
          <Fade delay={800} direction='down' duration={1500} >
            <div className="image-part" data-scroll>
              <img data-scroll src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          {/* </Fade>
          <Fade delay={100} direction='up' duration={1500} > */}
            <div className='apply-part'>
              <h1 className='h1-jn'>Join the team</h1>
              <button class={`swipe ${applyHovered ? 'apply-hovered' : ''}`} id="applyButton" onClick={handleFormSubmit} disabled={formSubmitted}>
              {formSubmitted ? 'SUBMITTED' : 'Apply Now'}
                <span class="container">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                  </svg>
                </span>
              </button>
            </div>
          </Fade>
        </>
      ) : (<></>)}
    </div>
  )
}

export default JoinNow