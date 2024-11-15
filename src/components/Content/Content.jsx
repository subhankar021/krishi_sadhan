import React from 'react'
import { useNavigate } from 'react-router-dom';
const Content = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleExploreClick = () => {
    navigate('/services');  // Navigate to the Services page
  };
  return (
    <div className='text-white flex justify-center'>
      <div className='video-text'>
        <h1 className='text-9xl text-white font-semibold flex'> <span style={{ display: 'inline',paddingRight: '30px'  }}>KRISHI </span>
        <span style={{ display: 'inline' }}>SADHAN</span>
        </h1>
        <p className='text-2xl text-green-700 font-semibold'>INDIA's First Farm Machinery Ride Booking Platform</p>
      </div>
      <button className="explore-button" onClick={handleExploreClick}>Explore</button>
    </div>
  )
}

export default Content