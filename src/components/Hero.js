import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import heropic from './images/gallery24.jpeg';
import heropic1 from './images/gallery3.jpeg';
import heropic2 from './images/gallery21b.jpeg';
import heropic3 from './images/gallery19.jpeg';

const Hero = () => {
  const [courses, setCourses] = useState(0);
  const [years, setYears] = useState(0);
  const [graduates, setGraduates] = useState(0);

  const animateCounter = (finalCount, setState) => {
    const interval = 10;
    const step = 10;

    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += step;
      setState(currentCount);

      if (currentCount >= finalCount) {
        clearInterval(timer);
        setState(finalCount);
      }
    }, interval);
  };

  const animateCounter1 = (finalCount, setState) => {
    const time = 1000;
    const interval = 10;
    const step = Math.floor(finalCount * interval / time);

    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += step;
      setState(currentCount);

      if (currentCount >= finalCount) {
        clearInterval(timer);
        setState(finalCount);
      }
    }, interval);
  };

  const animateCourses = () => {
    animateCounter(50, setCourses);
  };

  const animateYears = () => {
    animateCounter(3, setYears);
  };

  const animateGraduates = () => {
    animateCounter1(2000, setGraduates);
  };

  useEffect(() => {
    animateCourses();
    setTimeout(animateYears, 1100);
    setTimeout(animateGraduates, 2200);
  }, []);

  const images = [heropic, heropic1, heropic2, heropic3];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change the duration as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="carousel-container relative h-96 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={uuidv4()}
            className={`carousel-item absolute top-0 left-0 w-full h-full ${index === currentImage ? 'visible' : 'hidden'
            }
              `}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <p className="m-80" />
      </div>

      <div className="antialiased h-28 px-4 lg:h-30 flex justify-evenly space-x-16 items-center text-center text-gray-800">
        <div className="w-48 flex flex-col items-center">
          <div className="flex gap-1">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">{courses.toLocaleString()}</span>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">+</p>
          </div>
          <p className="font-bold md:text-2xl lg:text-3xl">Courses</p>
        </div>
        <div className="w-48 flex flex-col items-center">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#06294D]">{years.toLocaleString()}</span>
          <p className="font-bold md:text-2xl lg:text-3xl">Years</p>
        </div>
        <div className="w-48 flex flex-col items-center">
          <span className="text-4xl font-bold md:text-5xl lg:text-6xl text-[#6B2D30]">{graduates.toLocaleString()}</span>
          <p className="font-bold md:text-2xl lg:text-3xl">Graduates</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
