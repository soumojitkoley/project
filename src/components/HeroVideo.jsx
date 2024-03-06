import React from 'react'
import './HeroVideo.css'
import { Zoom } from 'react-awesome-reveal'

const HeroVideo = () => {
    return (
        <div className='hero-video-div'>
            <video src="video/hero-video.mp4" type="video/mp4" autoPlay muted loop />
            <h1 className='hv-h1'><Zoom delay={5e3} >Welcome to IT & VFX</Zoom></h1>
        </div>
    )
}

export default HeroVideo