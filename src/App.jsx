import './App.css'
import Slider from './components/Slider'
import Navbar from './components/Navbar'
import HeroVideo from './components/HeroVideo'
import Footer from './components/Footer'
import JoinNow from './components/JoinNow'
import { useState, useEffect } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { motion, AnimatePresence } from 'framer-motion';
import { Routes ,Route, Outlet, Router } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


import LocomotiveScroll from 'locomotive-scroll';
import { Fade } from 'react-awesome-reveal'

const locomotiveScroll = new LocomotiveScroll();


function App() {

  const [showEntryAnimation, setShowEntryAnimation] = useState(true);

  useEffect(() => {
    // Hide the entry animation after a delay
    const timer = setTimeout(() => {
      setShowEntryAnimation(false);
    }, 3000); // Adjust the delay as needed

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    // <div className={`app-main-div ${showEntryAnimation ? 'entry-animation' : ''} ${showEntryAnimation ? 'show-welcome' : ''}`} data-scroll-container>
    <div className={`app-main-div show-welcome ${showEntryAnimation ? 'entry-animation' : ''}`} data-scroll-container>
      {showEntryAnimation ? (
        <AnimatePresence>
          <motion.div className="welcome-video"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width:'60%' }}
            exit={{ opacity: 0, width:0 }}
            transition={{ duration: 2 }}
          >
            <video src='https://res.cloudinary.com/dv6tptpjl/video/upload/v1681801890/logo_for_fb_small_sound_Final_a1x1js.mp4' autoPlay loop muted />
          </motion.div>
        </AnimatePresence>
      ) : (
        <></>
      )}
      {/* {showEntryAnimation ? (<div className="welcome-message">Welcome to Our Website</div>) : (<></>)} */}
      <Routes>
        <Route path='/' element={<Outlet />} >
          {/* default route  */}
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<></>} />
        </Route>
        </Routes>
    </div>
  )
}

export default App
