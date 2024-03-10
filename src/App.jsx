import './App.css'
import Slider from './components/Slider'
import Navbar from './components/Navbar'
import HeroVideo from './components/HeroVideo'
import Footer from './components/Footer'
import JoinNow from './components/JoinNow'

import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

import { Routes ,Route, Outlet, Router } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


function App() {


  return (
    <div className='app-main-div' data-scroll-container>
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
