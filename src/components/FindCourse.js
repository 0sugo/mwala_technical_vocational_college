import React, { useState } from 'react'
import guarantee from './images/guarantee.svg';
import project_work from './images/project_work.svg';
import syllabus from './images/syllabus.svg';

const FindCourse = () => {
  const [level ,setLevel] = useState('');

  const handleLevel=(e)=>{
    setLevel('diploma');
  }
  const diploma = ['Diploma in Electrical & Electronics Engineering (Power) Mod. 1, 2, 3',
    'Diploma in Civil Engineering - Module 1, 2 and 3',
    'Diploma in Building Technology – Module 1, 2 and 3',
    'Diploma in Automotive Engineering - Module 1, 2 and 3',
    'Diploma in Welding and Fabrication – Module 1, 2 and 3',
    'Diploma in Fashion Design and Clothing - Module 1, 2 and 3',
    'Diploma in Catering and Accommodation Mgt- Module 1, 2 and 3',
    'Diploma in Food & Beverage– Module 1, 2 & 3',
    'Diploma in Agriculture – Module 1, 2 and 3',
    'Diploma in Analytical Chemistry – Module 1, 2 and 3',
    'Diploma in Medical Engineering - Module 1, 2 and 3',
    'Diploma in Mechanical Engineering – Module 1, 2 and 3',
    'Diploma in Welding and Fabrication – Module 1, 2 and 3',
    'Diploma in Petroleum and Geoscience – Module 1, 2 and 3.',
    'Diploma in Information Comm. Tech - Module 1, 2 and 3',
    'Diploma in Computer Science – Module 1, 2 and 3',
    'Diploma in Social Work and Comm. Dev. – Module 1, 2 and 3',
    'Diploma in Supply Chain Management – Module 1, 2 and 3',
    'Diploma in Human Resource Management – Module 1, 2 and 3',
    'Diploma in Project Management – Module 1, 2 and 3',
    'Diploma in Secretarial Studies - Module 1, 2 and 3',
    'Diploma in Child Care Protection Module 1, 2 and 3',
    'Diploma in Tourism Management – Module 1, 2 and 3',
    'Diploma in Banking and Finance – Module 1, 2 and 3',
    'Diploma in Accounting and Finance – Module 1, 2 and 3'];
    const certificate = [];

  return (
    <div className='mx-4'>
      <div className='flex flex-col mb-4'>
  <p className=' overflow-hidden mt-16 pb-2 relative uppercase text-2xl font-bold'>
    Study at Mwala
    <span className="absolute bottom-0 left-0 w-1/5 h-1  bg-black"></span>
  </p>
</div>

      <p className='greyer'>
        The Mwala Technical and Vocational College(MTVC) offers quality
        education in various courses together with industrial attachment in
        all syllabus as required by the curriculum as an intergral part of
        training.
      </p>

      <div className='flex items-center mt-8'>
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

      <div className="bg-[#891110] p-4 mt-8 rounded-lg">
        <p className='text-center font-bold'>Find a course for you...</p>
      <form className="" >

        <div className="mb-4">
          <label className="text-slate-100" htmlFor="email">
            Email
          </label>
          <input
            className="block appearance-none w-full placeholder-green-900 bg-white border border-gray-300 text-[#891110] py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white-700 text-sm  mb-2 text-slate-100" htmlFor="studyLevel">
            Level of study
          </label>
          <select
            className="block w-full bg-white border border-gray-300 text-[#891110] py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            id="studyLevel"
            onClick={handleLevel}
          >
            <option>Certificate</option>
            <option>Diploma</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2 text-slate-100" htmlFor="course">
            Course
          </label>
          <select
  className="block w-full bg-white border border-gray-300 text-[#891110] py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
  id="course"
>
  {level === 'diploma' ? (
    diploma.map((dip) => <option key={dip}>{dip}</option>)
  ) : level === 'certificate' ? (
    certificate.map((cert) => <option key={cert}>{cert}</option>)
  ) : (
    <option>Choose a level of study first . . .</option>
  )}
</select>

        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-[#06294D] hover:bg-[#112131] text-slate-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
