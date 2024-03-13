import React from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import './Service.css'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react'

const Service = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [show, setShow] = useState(false);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShow(true)
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [inView]);
  return (
    <div className='service-main-div' ref={ref}>
      {!isMobile && show ? (
        <Fade delay={2000} duration={2000}>
        <ParallaxBanner
          layers={[
            {
              image: 'https://www.soph-oria.com/wp-content/uploads/2020/05/mu.jpg',
              speed: 30
            }
          ]}
          className="parallax-section"
        >
          <div className="parallax-overlay"></div>
          {/* <Parallax speed={20}>
            <Fade className='bg1' speed={500} cascade damping={0.1}>{"Thinking of you keeps me awake. Dreaming of you keeps me asleep.\nBeing with you keeps me alive."}</Fade>
          </Parallax> */}
        </ParallaxBanner>
        </Fade>
      ) : (
        show &&
        <ParallaxBanner
          layers={[
            {
              image: 'https://www.soph-oria.com/wp-content/uploads/2020/05/mu.jpg',
              // speed: 30
            }
          ]}
          className="parallax-section"
        >
          <div className="parallax-overlay"></div>
          {/* <Parallax speed={20}>
            <Fade className='bg1' speed={500} cascade damping={0.1}>{"Thinking of you keeps me awake. Dreaming of you keeps me asleep.\nBeing with you keeps me alive."}</Fade>
          </Parallax> */}
        </ParallaxBanner>
      )}
    </div>
  )
}

export default Service