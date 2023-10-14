import React from 'react'
import about1 from './images/about1.jpg'
import about2 from './images/about2.jpg'

const About = () => {
  return (
    <div>
      <h1 className='text-center my-4'>A bit about us</h1>

      <div className='flex flex-col-reverse'>
        <div className='flex justify-end'>
          <img src={about1} alt='about pic' className='rounded-lg'/>
        </div>

        <p>We are middle college situated 28 kilometers East of
          Machakos Town . Our college is specializing in training
          courses in Technical and business. Our students are
          trained with mind to fulfill employability challenge of the
          21st century</p>
      </div>

      <div className='flex  flex-col-reverse my-4'>
        <div className='flex justify-start'>
          <img src={about2} alt='about pic' className='rounded-lg' />
        </div>
        <p>We also provide other social ammenities and student
            welfare through our dean of students department to help
            our student grow mentally, physically and emotionally.
            This keeps our student at the very best making them
            productive, efficient and well disciplined.</p>
      </div>

    </div>
  )
}

export default About
