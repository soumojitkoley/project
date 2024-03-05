import React, { useEffect } from "react";
import Swiper from 'swiper';
// configure Swiper to use modules



import './Slider.css'

const Slider = () => {

    useEffect(() => {
        const swiper = new Swiper(".swiper", {
            // Swiper options
            direction: "horizontal",
            grabCursor: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,
            mousewheel: {
                forceToAxis: true
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                1699: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
            speed: 300,
            slideActiveClass: "is-active",
            slideDuplicateActiveClass: "is-active",


            autoplay: {
                delay: 5000,
            },

        });
    }, []);


    return (
        <div className="section">
            <div className="container">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="people__card">
                                <img src="https://i.imgur.com/gIxOPCD.jpg" className="people__card__image" />
                                <div className="people__card__content">
                                    <div className="slide__number"></div>
                                    <div className="slide__title">G.I. Joe: Retaliation</div>
                                    <div className="slide__subtitle">The G.I. Joes are not only fighting their mortal enemy Cobra; they are forced to contend with threats from within the government that jeopardize their very existence.</div>
                                    <a href="" className="slide__btn">
                                        <span className="slide__btn__text">Watch Now</span>
                                        <span className="slide__btn__icon">
                                            <svg width="100%" height="100%" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.22218 15.2222C2.79261 15.6518 2.79261 16.3482 3.22218 16.7778C3.65176 17.2074 4.34824 17.2074 4.77782 16.7778L3.22218 15.2222ZM16.1 5C16.1 4.39249 15.6075 3.9 15 3.9L5.1 3.9C4.49249 3.9 4 4.39249 4 5C4 5.60751 4.49249 6.1 5.1 6.1L13.9 6.1L13.9 14.9C13.9 15.5075 14.3925 16 15 16C15.6075 16 16.1 15.5075 16.1 14.9L16.1 5ZM4.77782 16.7778L15.7778 5.77782L14.2222 4.22218L3.22218 15.2222L4.77782 16.7778Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                                <div className="slide__gradient"></div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="people__card">
                                <img src="https://i.imgur.com/2V1lJy4.jpg" className="people__card__image" />
                                <div className="people__card__content">
                                    <div className="slide__number"></div>
                                    <div className="slide__title">Red Notice</div>
                                    <div className="slide__subtitle">An Interpol agent successfully tracks down the world's most wanted art thief with help from a rival thief. But nothing is as it seems as a series of double-crosses ensues.</div>
                                    <a href="" className="slide__btn">
                                        <span className="slide__btn__text">Watch Now</span>
                                        <span className="slide__btn__icon">
                                            <svg width="100%" height="100%" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.22218 15.2222C2.79261 15.6518 2.79261 16.3482 3.22218 16.7778C3.65176 17.2074 4.34824 17.2074 4.77782 16.7778L3.22218 15.2222ZM16.1 5C16.1 4.39249 15.6075 3.9 15 3.9L5.1 3.9C4.49249 3.9 4 4.39249 4 5C4 5.60751 4.49249 6.1 5.1 6.1L13.9 6.1L13.9 14.9C13.9 15.5075 14.3925 16 15 16C15.6075 16 16.1 15.5075 16.1 14.9L16.1 5ZM4.77782 16.7778L15.7778 5.77782L14.2222 4.22218L3.22218 15.2222L4.77782 16.7778Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                                <div className="slide__gradient"></div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="people__card">
                                <img src="https://i.imgur.com/3tlt7BS.jpg" className="people__card__image" />
                                <div className="people__card__content">
                                    <div className="slide__number"></div>
                                    <div className="slide__title">Battleship</div>
                                    <div className="slide__subtitle">A fleet of ships is forced to do battle with an armada of unknown origins in order to discover and thwart their destructive goals.</div>
                                    <a href="" className="slide__btn">
                                        <span className="slide__btn__text">Watch Now</span>
                                        <span className="slide__btn__icon">
                                            <svg width="100%" height="100%" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.22218 15.2222C2.79261 15.6518 2.79261 16.3482 3.22218 16.7778C3.65176 17.2074 4.34824 17.2074 4.77782 16.7778L3.22218 15.2222ZM16.1 5C16.1 4.39249 15.6075 3.9 15 3.9L5.1 3.9C4.49249 3.9 4 4.39249 4 5C4 5.60751 4.49249 6.1 5.1 6.1L13.9 6.1L13.9 14.9C13.9 15.5075 14.3925 16 15 16C15.6075 16 16.1 15.5075 16.1 14.9L16.1 5ZM4.77782 16.7778L15.7778 5.77782L14.2222 4.22218L3.22218 15.2222L4.77782 16.7778Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                                <div className="slide__gradient"></div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="people__card">
                                <img src="https://i.imgur.com/2Y4s19s.jpg" className="people__card__image" />
                                <div className="people__card__content">
                                    <div className="slide__number"></div>
                                    <div className="slide__title">London Has Fallen</div>
                                    <div className="slide__subtitle">In London for the Prime Minister's funeral, Mike Banning is caught up in a plot to assassinate all the attending world leaders.</div>
                                    <a href="" className="slide__btn">
                                        <span className="slide__btn__text">Watch Now</span>
                                        <span className="slide__btn__icon">
                                            <svg width="100%" height="100%" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.22218 15.2222C2.79261 15.6518 2.79261 16.3482 3.22218 16.7778C3.65176 17.2074 4.34824 17.2074 4.77782 16.7778L3.22218 15.2222ZM16.1 5C16.1 4.39249 15.6075 3.9 15 3.9L5.1 3.9C4.49249 3.9 4 4.39249 4 5C4 5.60751 4.49249 6.1 5.1 6.1L13.9 6.1L13.9 14.9C13.9 15.5075 14.3925 16 15 16C15.6075 16 16.1 15.5075 16.1 14.9L16.1 5ZM4.77782 16.7778L15.7778 5.77782L14.2222 4.22218L3.22218 15.2222L4.77782 16.7778Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                                <div className="slide__gradient"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider