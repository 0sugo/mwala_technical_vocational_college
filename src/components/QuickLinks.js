import React, { useEffect, useState } from 'react';

const QuickLinks = () => {
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const detailsElements = document.querySelectorAll('.md-details');

    detailsElements.forEach((details) => {
      if (isMdScreen) {
        details.setAttribute('open', 'open');
      } else {
        details.removeAttribute('open');
      }
    });
  }, [isMdScreen]);

  return (
    <div className="mx-4 pt-14 md:mx-12 lg:mx-36" id="quick">
      <div className="flex flex-col mb-2">
        <h2 className="overflow-hidden mt-16 pb-2 relative uppercase text-2xl lg:text-3xl font-bold">
          Quick links
          <span className="absolute bottom-0 left-0 w-1/5 h-1  bg-black" />
        </h2>
      </div>
      <div className="md:flex md:gap-3">
        <details className="md:w-1/3 md-details">
          <summary className="greyer cursor-pointer md:text-xl">Student Links</summary>
          <div className="flex flex-col pl-8 text-[#6B2D30] md:text-lg">
            <a className="hover:text-blue-800 hover:underline" href="/">Student portal</a>
            <a className="hover:text-blue-800 hover:underline" href="/">Student union</a>
            <a className="hover:text-blue-800 hover:underline" href="/">Student welfare</a>
            <a className="hover:text-blue-800 hover:underline" href="/">Alumni wall of fame</a>
            <a className="hover:text-blue-800 hover:underline" href="/">Rules and regulations</a>
            <a className="hover:text-blue-800 hover:underline" href="/">Online registration </a>
            <a className="hover:text-blue-800 hover:underline" href="/">Timetable</a>
          </div>
        </details>

        <details className="md:w-1/3 md-details">
          <summary className="greyer cursor-pointer md:text-xl">General school links</summary>
          <div className="flex flex-col pl-8 text-[#6B2D30] md:text-lg">
            <a className="hover:text-blue-800 hover:underline" href="/">legal notice</a>
            <a className="hover:text-blue-800 hover:underline" href="/">Staff portal</a>
            <a className="hover:text-blue-800 hover:underline" href="/">Staff Vacancy</a>
            <a className="hover:text-blue-800 hover:underline" href="/">Sport activities</a>
            <a className="hover:text-blue-800 hover:underline" href="/">
              Tender
              {'\''}
              s application
            </a>
            <a className="hover:text-blue-800 hover:underline" href="/">Environment policy</a>
          </div>
        </details>

        <details className="md:w-1/3 md-details">
          <summary className="greyer cursor-pointer md:text-xl">School programme</summary>
          <div className="flex flex-col pl-8 text-[#6B2D30] md:text-lg">
            <a className="hover:text-blue-800 hover:underline" href="/">Our intake</a>
            <a className="hover:text-blue-800 hover:underline" href="/">School timetable</a>
            <a className="hover:text-blue-800 hover:underline" href="/">Registration form</a>
            <a className="hover:text-blue-800 hover:underline" href="/">Examination rules</a>
            <a className="hover:text-blue-800 hover:underline" href="/">Admission requirement</a>
            <a className="hover:text-blue-800 hover:underline" href="/">Accessing exam cards</a>
          </div>
        </details>

      </div>

    </div>
  );
};

export default QuickLinks;
