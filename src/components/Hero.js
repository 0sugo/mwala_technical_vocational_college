import React from 'react'
import heropic from './images/heropic.jpg';
const Hero = () => {
  return (
    <div className='mx-3'>
      <div>
        <img src={heropic} alt='hero pic' className='w-screen'/>
      </div>
    </div>
  )
}

export default Hero
