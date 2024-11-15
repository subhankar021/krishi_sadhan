import React from 'react'
import Tractor from '../../assets/Video/Tractor.mp4'
const Hero = () => {
  return (
    <div className='video-container'>
      <video className='background-video' width="1000" muted loop autoPlay>
        <source src={Tractor} type='video/mp4'/>
      </video>
       <div className="video-overlay-top"></div>
      <div className="video-overlay"></div>
      <div className="vignette-overlay"></div>
      
      
    </div>
  )
}

export default Hero 