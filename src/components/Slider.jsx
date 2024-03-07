import React from "react";
import { Parallax, Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow'
import './Slider.css'

const Slider = () => {
  return (
    <>
    <Slide direction="left"><h1 className="s-h1">Our Gallery</h1></Slide>
    <Slide direction="right">
      <div className='slider-div'>

        <Swiper
          effect={'fade'}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          speed={1500}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* <Zoom> */}
            <img src="https://source.unsplash.com/random/600*200?wedding" alt="" data-swiper-parallax="-500" />
            {/* </Zoom> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <Zoom> */}
            <img src="https://source.unsplash.com/random/600*200?couple" alt="" data-swiper-parallax="-500" />
            {/* </Zoom> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <Zoom> */}
            <img src="https://source.unsplash.com/random/600*200?marriage" alt="" data-swiper-parallax="-500" />
            {/* </Zoom> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <Zoom> */}
            <img src="https://source.unsplash.com/random/600*200?love" alt="" data-swiper-parallax="-500" />
            {/* </Zoom> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </Slide>
    </>
  )
}

export default Slider