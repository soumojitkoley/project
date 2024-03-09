import './App.css'
import Slider from './components/Slider'
import Navbar from './components/Navbar'
import HeroVideo from './components/HeroVideo'
import Footer from './components/Footer'
import JoinNow from './components/JoinNow'
import { useMediaQuery } from 'react-responsive';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { Fade } from 'react-awesome-reveal'


import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


function App() {

  const isMobile = useMediaQuery({ maxWidth: 1025 });

  return (
    <div className='app-main-div' data-scroll-container>
      <Navbar/>
      <HeroVideo/>
      {!isMobile ? (
        <div className='bg1' id="target" data-scroll>
          <Fade speed={500} cascade damping={0.1} triggerOnce={true}>{"Thinking of you keeps me awake.\nDreaming of you keeps me asleep.\nBeing with you keeps me alive."}</Fade>
        </div>
        )
        : (
        <div className='bg1' id="targetElementm" data-scroll>
          <Fade speed={500} cascade damping={0.1} triggerOnce={true}>{"Thinking of you\nkeeps me awake.\nDreaming of you\nkeeps me asleep.\nBeing with you\nkeeps me alive."}</Fade>
        </div>)
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
      
      <Slider/>
      <JoinNow/>
      <Footer />
    </div>
  )
}

export default App
