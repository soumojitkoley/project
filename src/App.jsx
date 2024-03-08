import './App.css'
import Slider from './components/Slider'
import Navbar from './components/Navbar'
import HeroVideo from './components/HeroVideo'
import Footer from './components/Footer'
import { useMediaQuery } from 'react-responsive';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { Fade } from 'react-awesome-reveal'

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


function App() {
  const isMobile = useMediaQuery({ maxWidth: 1025 });
  const backgroundImage = !isMobile
    ? 'https://images.unsplash.com/photo-1501631259223-89d4e246ed23?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    : 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className='app-main-div'>
      <Navbar/>
      <HeroVideo/>
      {!isMobile ? (
        <div className='bg1'>
          <Fade speed={500} cascade damping={0.1} triggerOnce={true}>{"Thinking of you keeps me awake.\nDreaming of you keeps me asleep.\nBeing with you keeps me alive."}</Fade>
        </div>)
        : (
        <div className='bg1'>
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
      <Footer />
    </div>
  )
}

export default App
