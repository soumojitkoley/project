import './App.css'
import Slider from './components/Slider'
import Navbar from './components/Navbar'
import HeroVideo from './components/HeroVideo'

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


function App() {

//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

  return (
    <div className='app-main-div' data-scroll-container>
      <Navbar/>
      <HeroVideo/>
      <Slider/>
    </div>
  )
}

export default App
