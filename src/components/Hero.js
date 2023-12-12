import React, { useEffect } from 'react';
import Alpine from 'alpinejs';
import heropic from './images/gallery24.jpeg';

const Hero = () => {
  useEffect(() => {
    Alpine.data('animation', () => ({
      counter: 0,
      formatNumberWithCommas(number) {
        return number.toLocaleString();
      },
      animate(finalCount) {
        const time = 1500;
        const interval = 30; // Adjusted interval for smoother animation
        const step = Math.floor(finalCount * interval / time);
        const timer = setInterval(() => {
          this.counter += step;
          if (this.counter >= finalCount + step) {
            this.counter = finalCount;
            clearInterval(timer);
          }
        }, interval);
      },
    }));

    Alpine.start();
  }, []);

  return (
    <div>
      <div>
        <img src={heropic} alt="hero pic" className="hero w-full" width={1280} height={684} />
      </div>

      <div className="antialiased h-28 px-4 lg:h-30 flex justify-evenly space-x-16 items-center text-center text-gray-800">
        <div className="w-48 flex flex-col items-center">
          <div className="flex gap-1">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black " x-data="animation()" x-init="animate(60)" x-text="counter">
              0
            </span>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">+</p>
          </div>
          <p className="font-bold md:text-2xl lg:text-3xl">Courses</p>
        </div>
        <div className="w-48 flex flex-col items-center">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#06294D]" x-data="animation()" x-init="animate(3)" x-text="counter">
            0
          </span>
          <p className="font-bold md:text-2xl lg:text-3xl">Years</p>
        </div>
        <div className="w-48 flex flex-col items-center">
          <span className="text-4xl font-bold md:text-5xl lg:text-6xl text-[#6B2D30]" x-data="animation()" x-init="animate(11024)" x-text="formatNumberWithCommas(counter)">
            0
          </span>
          <p className="font-bold md:text-2xl lg:text-3xl">Graduates</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
