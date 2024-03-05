import './App.css'
import Slider from './components/Slider'
import Navbar from './components/Navbar'

function App() {

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true,
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <div className='app-main-div'>
      <Navbar/>
      <Slider/>
    </div>
  )
}

export default App
