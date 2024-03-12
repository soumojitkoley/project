import './App.css'
import { useState, useEffect } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { motion, AnimatePresence } from 'framer-motion';
import { Routes ,Route, Outlet, Router } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import LocomotiveScroll from 'locomotive-scroll';
import { Fade } from 'react-awesome-reveal'
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';
const locomotiveScroll = new LocomotiveScroll();

function App() {
  let {showEntryAnimation} = useContext(AppContext)
  

  return (
    <div className={`app-main-div show-welcome ${showEntryAnimation ? 'entry-animation' : ''}`} data-scroll-container>
      {showEntryAnimation ? (
        <AnimatePresence>
          <motion.div className="welcome-video"
            initial={{ opacity: 1, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: '-100%' }}
            transition={{ duration: 3 }}
          >
            <video src='https://res.cloudinary.com/dv6tptpjl/video/upload/v1681801890/logo_for_fb_small_sound_Final_a1x1js.mp4' autoPlay loop muted />
          </motion.div>
        </AnimatePresence>
      ) : (
        <></>
      )}
      <Routes>
        <Route path='/' element={<Outlet />} >
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
