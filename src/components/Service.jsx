import React from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive';
import './Service.css'

const Service = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className='service-main-div'>
      {!isMobile ? (
        <Fade duration={1000}>
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
          
        </ParallaxBanner>
      )}
    </div>
  )
}

export default Service