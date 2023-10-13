import React from 'react'
import guarantee from './images/guarantee.svg';
import project_work from './images/project_work.svg';
import syllabus from './images/syllabus.svg';

const FindCourse = () => {
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

      <div className="">
        <h3>Find a course for you...</h3>
      <form className="">

        <div className="mb-4">
          <label className="" htmlFor="email">
            email
          </label>
          <input
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studyLevel">
            Level of study
          </label>
          <select
            className="block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="studyLevel"
          >
            <option>Certificate</option>
            <option>Diploma</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
            Course
          </label>
          <select
            className="block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="course"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
      </div>

    </div>
  )
}

export default FindCourse
