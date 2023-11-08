import React, { useEffect } from 'react';
import heropic from './images/heropic.jpg';
import Alpine from 'alpinejs';

const Hero = () => {

  const animation = () => ({
    counter: 0,
    animate(finalCount) {
      const time = 1500;
      const interval = 300;
      const step = Math.floor(finalCount * interval / time);
      const timer = setInterval(() => {
        this.counter = this.counter + step;
        if (this.counter >= finalCount + step) {
          this.counter = finalCount;
          clearInterval(timer);
        }
      }, interval);
    },
  });

  useEffect(() => {
    Alpine.data('animation', animation);
    Alpine.start();
  }, []);

  return (
    <div className=''>
      <div>
        <img src={heropic} alt='hero pic' className='w-screen' />
      </div>


      <div className="antialiased h-28 px-4  flex justify-evenly space-x-16 items-center text-center text-gray-800">
        <div className="w-48 flex flex-col items-center">
          <span className="text-4xl font-bold text-black " x-data="animation()" x-init="animate(50)" x-text="counter">
            0
          </span>
          <p className='font-bold'>Courses</p>
        </div>
        <div className="w-48 flex flex-col items-center">
          <span className="text-4xl font-bold text-[#06294D]" x-data="animation()" x-init="animate(6)" x-text="counter">
            0
          </span>
          <p className='font-bold'>Years</p>
        </div>
        <div className="w-48 flex flex-col items-center">
          <span className="text-4xl font-bold text-[#6B2D30]" x-data="animation()" x-init="animate(11024)" x-text="counter">
            0
          </span>
          <p className='font-bold'>Graduates</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
