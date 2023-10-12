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

      <div className="w-1/2 mx-auto mt-8">
      <form className="">
        <div className="">
          <label className="" htmlFor="username">
            Username
          </label>
          <input
            className=""
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="">
          <label className="" htmlFor="password">
            Password
          </label>
          <input
            className=""
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
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

export default About
