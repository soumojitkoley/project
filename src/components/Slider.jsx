import React, { useContext, useRef, useState } from "react";
import { Parallax, Navigation, Pagination, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom as RevealZoom } from "react-awesome-reveal";
import { useMediaQuery } from 'react-responsive';
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow'
import './Slider.css'
import { AppContext } from "../Context/AppContext";

const Slider = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [open, setOpen] = useState(false);
  const zoomRef = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519379169146-d4b170447caa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  let {setNavOpen} = useContext(AppContext)

  return (
    <div className="slider-div">
      <RevealZoom delay={500} duration={3000}>
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              onClick={() => { setOpen(true), setNavOpen(false) } }
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </RevealZoom>
      <Lightbox
        open={open}
        close={() => { setOpen(false), setNavOpen(true) }}
        plugins={[Counter, Thumbnails, Fullscreen, Zoom]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        slides={[
          {
            src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "image 1",
            width: 840,
            height: 560,
            srcSet: [
              { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 320, height: 213 },
            ],
          },
          {
            src: "https://images.unsplash.com/photo-1519379169146-d4b170447caa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "image 1",
            width: 840,
            height: 560,
            srcSet: [
              { src: "https://images.unsplash.com/photo-1519379169146-d4b170447caa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 640, height: 427 },
            ],
          },
          {
            src: "/image1x3840.jpg",
            alt: "image 1",
            width: 840,
            height: 560,
            srcSet: [
              { src: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 1200, height: 800 },
            ],
          },
          {
            src: "/image1x3840.jpg",
            alt: "image 1",
            width: 840,
            height: 560,
            srcSet: [
              { src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", width: 2048, height: 1365 },
            ],
          },
        ]}
      />
    </div>
  )
}

export default Slider
