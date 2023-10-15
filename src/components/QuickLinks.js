import React from 'react'

const QuickLinks = () => {
  return (
    <div>
      <div className='flex flex-col mb-2'>
  <h2 className='overflow-hidden mt-16 pb-2 relative'>
  Quick links
    <span className="absolute bottom-0 left-0 w-1/5 h-1  bg-black"></span>
  </h2>
</div>
      <div className='flex flex-wrap'>
      <div className='bg-red-200 flex flex-col'>
        <a href='/'>Student portal</a>
        <a href='/'>Student union</a>
        <a href='/'>Student welfare</a>
        <a href='/'>Alumni wall of fame</a>
        <a href='/'>Rules and regulations</a>
        <a href='/'>Online registration </a>
        <a href='/'>Timetable</a>
      </div>

      <div className='bg-green-200 flex flex-col'>
        <a href='/'>legal notice</a>
        <a href='/'>Staff portal</a>
        <a href='/'>Staff Vacancy</a>
        <a href='/'>Sport activities</a>
        <a href='/'>Tender's application</a>
        <a href='/'>Environment policy</a>
      </div>

      <div className='bg-blue-200 flex flex-col'>
        <a href='/'>Our intake</a>
        <a href='/'>School timetable</a>
        <a href='/'>Registration form</a>
        <a href='/'>Examination rules</a>
        <a href='/'>Admission requirement</a>
        <a href='/'>Accessing exam cards</a>
      </div>
      </div>


    </div>
  )
}

export default QuickLinks
