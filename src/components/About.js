import React from 'react'
import about1 from './images/about1.jpg'
import about2 from './images/about2.jpg'

const About = () => {
  return (
    <div className='mx-4 pt-14 md:mx-12' id='about'>

      <div className='flex flex-col mb-4'>
        <h2 className='overflow-hidden mt-16 pb-2 relative uppercase text-2xl font-bold'>
          About us
          <span className="absolute bottom-0 left-0 w-1/5 h-1 md:w-1/12 bg-black"></span>
        </h2>
      </div>

      <div className='flex flex-col-reverse '>
        <div className='flex justify-center my-3 md:hidden'>
          <img src={about1} alt='about pic' className='rounded-lg' />
        </div>

        <p className='text-[#5a5a5a]'>We are middle college situated 28 kilometers East of
          Machakos Town . Our college is specializing in training
          courses in Technical and business. Our students are
          trained with mind to fulfill employability challenge of the
          21st century</p>
      </div>

      <div className='flex  flex-col-reverse my-4'>
        <div className='flex justify-center my-3 md:hidden'>
          <img src={about2} alt='about pic' className='rounded-lg' />
        </div>
        {/* <p className='text-[#5a5a5a]'>We also provide other social ammenities and student
          welfare through our dean of students department to help
          our student grow mentally, physically and emotionally.
          This keeps our student at the very best making them
          productive, efficient and well disciplined.</p> */}
        <p className='text-[#5a5a5a]'>At Middle College, we are dedicated to fostering a holistic learning environment that goes beyond academic excellence.
          Our state-of-the-art facilities and vibrant campus life offer students a rich tapestry of experiences.
          We encourage extracurricular activities, clubs, and community engagement to nurture a well-rounded development.
          The emphasis is not only on academic success but also on character building, leadership skills,
          and a sense of social responsibility. Our commitment to providing a comprehensive education extends beyond the classroom,
          ensuring that students graduate not only with knowledge and skills but also with a sense of purpose and a readiness to contribute
          positively to society.</p>
      </div>

    </div>
  )
}

export default About
