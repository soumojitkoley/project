import React from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { Fade, Slide } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive';
import './Service.css'

const Service = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className='service-main-div'>
      <Fade duration={1000}>
        <div className="parallax-section">
          <video src="/video/service-bg.m4v" autoPlay muted loop />
          <div className="parallax-overlay">
            <Slide direction="right" dealy={200} duration={1500}>
              <h1 className='h1-s'>Our Services</h1>
            </Slide>
            <div className="service-list">
              <Fade direction='up' delay={200} duration={1500}>
                <div className="list-item">
                  <p className='p-s-1'>Pre-Wedding Photography</p>
                  <p className='p-s-2'>Our pre-wedding photography services capture the beauty and intimacy of your relationship. Whether it's a romantic walk in the park or a cozy date night at home, we will work with you to create a memorable experience.</p>
                </div>

              </Fade>
              <Fade direction='down' delay={200} duration={1500}>
                <div className="list-item">
                  <p className='p-s-1'>Wedding Photography</p>
                  <p className='p-s-2'>We believe that the best photographs come from capturing genuine emotions. That’s why we work hard to create a magical tale of your love and commitment in the most creative way.</p>
                </div>
              </Fade>
              <Fade direction='up' delay={200} duration={1500}>
                <div className="list-item">
                  <p className='p-s-1'>Wedding Videography</p>
                  <p className='p-s-2'>Capture magical memories of your wedding day with exquisite wedding videographer in Kolkata. From joyful vows to heartfelt celebrations, we spell magic to your special moments that you will cherish forever. </p>
                </div>
              </Fade>
              <Fade direction='down' delay={200} duration={1500}>
                <div className="list-item">
                  <p className='p-s-1'>Photo & <br/> Video Editing(VFX)</p>
                  <p className='p-s-2'>We offer tailored editing services, from basic adjustments to advanced effects. Our skilled editors use the latest tools to ensure your content stands out. Trust us to transform your footage and images into polished masterpieces.</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Service