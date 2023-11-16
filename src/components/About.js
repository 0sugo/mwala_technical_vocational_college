import React, { useEffect } from 'react';
import about1 from './images/about1.jpg';
import about2 from './images/about2.jpg';

const About = () => {
  useEffect(() => {
    const slidesContainer = document.querySelector('.slides-container');
    const slideWidth = slidesContainer.querySelector('.slide').clientWidth;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    nextButton.addEventListener('click', () => {
      slidesContainer.scrollLeft += slideWidth;
    });

    prevButton.addEventListener('click', () => {
      slidesContainer.scrollLeft -= slideWidth;
    });
  }, []);

  return (
    <div className="mx-4 pt-14 md:mx-12 lg:mx-36" id="about">
      <div className="flex flex-col mb-4">
        <h2 className="overflow-hidden mt-16 pb-2 relative uppercase text-2xl lg:text-3xl font-bold">
          About us
          <span className="absolute bottom-0 left-0 w-1/5 h-1 md:w-1/12 bg-black" />
        </h2>
      </div>

      <div className="flex flex-col-reverse ">
        <div className="flex justify-center my-3 md:hidden">
          <img src={about1} alt="about pic" className="rounded-lg" />
        </div>
        <p className="text-[#5a5a5a] md:text-lg">We are middle college situated 28 kilometers East of Machakos Town. Our college is specializing in training courses in Technical and business. Our students are trained with mind to fulfill employability challenge of the 21st century.</p>
      </div>

      <div className="flex  flex-col-reverse my-4">
        <div className="flex justify-center my-3 md:hidden">
          <img src={about2} alt="about pic" className="rounded-lg" />
        </div>
        <p className="text-[#5a5a5a] md:text-lg">At Mwala Technical Vocational College, we are dedicated to fostering a holistic learning environment that goes beyond academic excellence. Our state-of-the-art facilities and vibrant campus life offer students a rich tapestry of experiences. We encourage extracurricular activities, clubs, and community engagement to nurture a well-rounded development. The emphasis is not only on academic success but also on character building, leadership skills, and a sense of social responsibility. Our commitment to providing a comprehensive education extends beyond the classroom, ensuring that students graduate not only with knowledge and skills but also with a sense of purpose and a readiness to contribute positively to society.</p>
      </div>

      <div className="relative">
        <div className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600" alt="mountain_image" />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mountain_image" />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/3026364/pexels-photo-3026364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mountain_image" />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/10343729/pexels-photo-10343729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mountain_image" />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/13860053/pexels-photo-13860053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mountain_image" />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/8576739/pexels-photo-8576739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mountain_image" />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/1743367/pexels-photo-1743367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mountain_image" />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/5920021/pexels-photo-5920021.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="mountain_image" />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/12805075/pexels-photo-12805075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mountain_image" />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="mountain_image" />
          </div>
        </div>

        <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
          <button type="button" className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group" aria-label="prev">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>
        <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
          <button type="button" className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group" aria-label="next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
