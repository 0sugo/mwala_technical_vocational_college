import React from 'react'
import guarantee from './images/guarantee.svg';
import project_work from './images/project_work.svg';
import syllabus from './images/syllabus.svg';

const FindCourse = () => {
  return (
    <div className='mx-4'>
      <div className='flex flex-col mb-2'>
  <h2 className='overflow-hidden mt-16 pb-2 relative'>
    Study at Mwala
    <span className="absolute bottom-0 left-0 w-1/5 h-1  bg-black"></span>
  </h2>
</div>

      <p>
        The Mwala Technical and Vocational College(MTVC) offers quality
        education in various courses together with industrial attachment in
        all syllabus as required by the curriculum as an intergral part of
        training.
      </p>

      <div className='flex items-center my-4'>
        <img src={guarantee} alt='guarantee' className='w-16 mr-3'/>
        <p>Guarantee attachment and insuarance cover</p>
      </div>

      <hr className='w-full my-2 border-black'/>

      <div className='flex items-center'>
        <img src={project_work} alt='project_work' className='w-16 mr-3'/>
        <p>Sufficient practical work</p>
      </div>

      <hr className='w-full my-2  border-black'/>

      <div className='flex items-center'>
        <img src={syllabus} alt='syllabus' className='w-16 mr-3'/>
        <p>Full syllabus coverage</p>
      </div>

      <hr className='w-full my-2 border-black'/>

      <div className="bg-[#891110] p-4 mt-4 rounded-lg">
        <p className='text-center font-bold'>Find a course for you...</p>
      <form className="" >

        <div className="mb-4">
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            className="block appearance-none w-full bg-white border border-gray-300 text-[#891110] py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="studyLevel">
            Level of study
          </label>
          <select
            className="block w-full bg-white border border-gray-300 text-[#891110] py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="studyLevel"
          >
            <option>Certificate</option>
            <option>Diploma</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="course">
            Course
          </label>
          <select
            className="block w-full bg-white border border-gray-300 text-[#891110] py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="course"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-white hover:bg-[#e0e0e0] text-[#891110] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Enquire
          </button>
        </div>
      </form>
      </div>

    </div>
  )
}

export default FindCourse
