import React from "react";
import { Parallax, Navigation, Pagination, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide, Fade } from "react-awesome-reveal";
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow'
import './Slider.css'

const Slider = () => {
  const isMobile = useMediaQuery({ maxWidth: 1025 });
  return (
    <div className='slider-div'>
      {isMobile ? (
        <Fade direction='up' delay={500} triggerOnce={true}><h1 className="s-h1">Our Gallery</h1></Fade>
      ) : (
        <Slide direction="left"><h1 className="s-h1">Our Gallery</h1></Slide>
      )}

      {isMobile ? (
        <Fade direction='up' delay={500} triggerOnce={true}>
          <Swiper
            effect={'fade'}
            spaceBetween={30}
            slidesPerView={3}
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
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1519379169146-d4b170447caa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </SwiperSlide>
          </Swiper>
        </Fade>
      ) : (
        <Slide direction="right">
          <Swiper
            effect={'fade'}
            spaceBetween={30}
            slidesPerView={3}
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
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1519379169146-d4b170447caa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </SwiperSlide>
          </Swiper>
        </Slide>
      )}
    </div>
  )
}

export default Slider