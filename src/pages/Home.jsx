import React from 'react'
import Navbar from '../components/Navbar'
import HeroVideo from '../components/HeroVideo'
import Slider from '../components/Slider'
import JoinNow from '../components/JoinNow'
import Footer from '../components/Footer'
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Fade } from 'react-awesome-reveal'
import { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();
  

const Home = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000)
  }, [])

  const isMobile = useMediaQuery({ maxWidth: 1025 });
  return (
    <div>
      <Navbar />
      <HeroVideo />
      {!isMobile && show ? (
        <div className='bg1' id="target" data-scroll>
          <Fade speed={500} cascade damping={0.1} triggerOnce={true}>{"Thinking of you keeps me awake.\nDreaming of you keeps me asleep.\nBeing with you keeps me alive."}</Fade>
        </div>
      )     
        : ( show ? (
          <div className='bg1' id="targetElementm" data-scroll>
            <Fade speed={500} cascade damping={0.1} triggerOnce={true}>{"Thinking of you\nkeeps me awake.\nDreaming of you\nkeeps me asleep.\nBeing with you\nkeeps me alive."}</Fade>
          </div>) : (<></>))
      }

      {/* {!isMobile ? (
        <ParallaxBanner
        layers={[
          {
            image: backgroundImage,
            speed: 30
          }
        ]}
        className="parallax-section"
      >
        <div className="parallax-overlay"></div>
        <Parallax speed={20}>
        <Fade className='bg1' speed={500} cascade damping={0.1}>{"Thinking of you keeps me awake. Dreaming of you keeps me asleep.\nBeing with you keeps me alive."}</Fade>
        </Parallax>
      </ParallaxBanner> 
      ) : (<div className='bg1'>
          <h2>Thinking of you keeps me awake. Dreaming of you keeps me asleep. <br /> Being with you keeps me alive.</h2>
      </div>)} */}
      {/* {show ? (
        <> */}
        <Slider />
        <JoinNow />
        <Footer />
        {/* </>
      ) : (<></>)} */}
      
    </div>
  )
}

export default Home