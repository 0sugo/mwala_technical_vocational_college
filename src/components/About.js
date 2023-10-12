import React from 'react'
import guarantee from './images/guarantee.svg';
import project_work from './images/project_work.svg';
import syllabus from './images/syllabus.svg';

const About = () => {
  return (
    <div>
      <h1>Study at Mwala</h1>
      <p>
        The Mwala Technical and Vocational College(MTVC) offers quality
        education in various courses together with industrial attachment in
        all syllabus as required by the curriculum as an intergral part of
        training.
      </p>

      <div className='flex items-center'>
        <img src={guarantee} alt='guarantee' className='w-20 mr-3'/>
        <p>Guarantee attachment and insuarance cover</p>
      </div>

      <hr className='w-full my-2 text-black'/>

      <div className='flex items-center'>
        <img src={project_work} alt='project_work' className='w-20 mr-3'/>
        <p>Sufficient practical work</p>
      </div>

      <hr className='w-full my-2 text-black'/>

      <div className='flex items-center'>
        <img src={syllabus} alt='syllabus' className='w-20 mr-3'/>
        <p>Full syllabus coverage</p>
      </div>

      <hr className='w-full my-2 text-black'/>

    </div>
  )
}

export default About
