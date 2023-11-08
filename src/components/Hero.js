import React from 'react'
import heropic from './images/heropic.jpg';
const Hero = () => {

  function animation() {
    return {
      counter: 0,
      animate(finalCount) {
        let time = 1500
        let interval = 9
        let step = Math.floor(finalCount * interval / time)
        let timer = setInterval(() => {
          this.counter = this.counter + step;
          if (this.counter >= finalCount + step) {
            this.counter = finalCount
            clearInterval(timer);
            timer = null;
            return;
          }
        }, interval);
      }
    };
  }


  return (
    <div className=''>
      <div>
        <img src={heropic} alt='hero pic' className='w-screen' />
      </div>

      <div class="antialiased h-28 px-4 bg-red-400 flex justify-evenly space-x-16 items-center text-center text-gray-800">
        <div class="w-48 flex flex-col items-center">
          <span class="text-4xl font-bold text-blue-900"
            x-data="animation()"
            x-init="animate(400)"
            x-text="counter">
            0
          </span>
          <p className='font-bold'>Courses</p>
        </div>
        <div class="w-48 flex flex-col items-center">
          <span class="text-4xl font-bold text-blue-900"
            x-data="animation()"
            x-init="animate(9400)"
            x-text="counter">
            0
          </span>
          <p className='font-bold'>Years</p>
        </div>
        <div class="w-48 flex flex-col items-center">
          <span class="text-4xl font-bold text-blue-900"
            x-data="animation()"
            x-init="animate(11024)"
            x-text="counter">
            0
          </span>
          <p className='font-bold'>Graduates</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
