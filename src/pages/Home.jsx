import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import HeroVideo from '../components/HeroVideo'
import Slider from '../components/Slider'
import JoinNow from '../components/JoinNow'
import Footer from '../components/Footer'
import Service from '../components/Service'
import ContactUs from '../components/ContactUs'
import { useMediaQuery } from 'react-responsive';
import { Fade } from 'react-awesome-reveal'
import { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { AppContext } from '../Context/AppContext'
const locomotiveScroll = new LocomotiveScroll();
  
const Home = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  let {showEntryAnimation} = useContext(AppContext)

  const isMobile = useMediaQuery({ maxWidth: 1025 });
  return (
    <div>
      {
        !showEntryAnimation ? (
          <>
            <Navbar />
            <HeroVideo />
          </>
        ) : 
        (<></>)
      }
      {!isMobile && !showEntryAnimation ? (
        <div className='bg1' id="target" data-scroll>
          <Fade speed={500} cascade damping={0.1} triggerOnce={true}>{"Thinking of you keeps me awake.\nDreaming of you keeps me asleep.\nBeing with you keeps me alive."}</Fade>
        </div>
      )     
        : ( !showEntryAnimation ? (
          <div className='bg1' id="targetElementm" data-scroll>
            <Fade speed={500} cascade damping={0.1} triggerOnce={true}>{"Thinking of you\nkeeps me awake.\nDreaming of you\nkeeps me asleep.\nBeing with you\nkeeps me alive."}</Fade>
          </div>) : (<></>))
      }
      {
        !showEntryAnimation ? (
            <>
            <Service/>
            <Slider />
            <JoinNow />
            <ContactUs/>
            <Footer />
            </>
        ) :
        (<></>)
      }
    </div>
  )
}

export default Home