import React from 'react'

const QuickLinks = () => {
  return (
    <div className='mx-4'>
      <div className='flex flex-col mb-2'>
  <h2 className='overflow-hidden mt-16 pb-2 relative uppercase text-2xl font-bold'>
  Quick links
    <span className="absolute bottom-0 left-0 w-1/5 h-1  bg-black"></span>
  </h2>
</div>
      {/* <div className='flex flex-wrap'>
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
        <a className='hover:text-blue-800 hover:underline'href='/'>legal notice</a>
        <a href='/'>Staff portal</a>
        <a href='/'>Staff Vacancy</a>
        <a href='/'>Sport activities</a>
        <a href='/'>Tender's application</a>
        <a href='/'>Environment policy</a>
      </div>

      <div className='bg-blue-200 flex flex-col'>
        <a className='hover:text-blue-800 hover:underline'href='/'>Our intake</a>
        <a href='/'>School timetable</a>
        <a href='/'>Registration form</a>
        <a href='/'>Examination rules</a>
        <a href='/'>Admission requirement</a>
        <a href='/'>Accessing exam cards</a>
      </div>
      </div> */}

      <details>
        <summary className='greyer cursor-pointer'>Student Links</summary>
        <div className='flex flex-col pl-8 text-[#6B2D30]'>
          <a className='hover:text-blue-800 hover:underline' href='/'>Student portal</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Student union</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Student welfare</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Alumni wall of fame</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Rules and regulations</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Online registration </a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Timetable</a>
        </div>

      </details>

      <details>
        <summary className='greyer cursor-pointer'>General school links</summary>
        <div className='flex flex-col pl-8 text-[#6B2D30]'>
          <a className='hover:text-blue-800 hover:underline' href='/'>legal notice</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Staff portal</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Staff Vacancy</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Sport activities</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Tender's application</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Environment policy</a>
        </div>
      </details>

      <details>
        <summary className='greyer cursor-pointer'>School programme</summary>
        <div className='flex flex-col pl-8 text-[#6B2D30]'>
          <a className='hover:text-blue-800 hover:underline' href='/'>Our intake</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>School timetable</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Registration form</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Examination rules</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Admission requirement</a>
          <a className='hover:text-blue-800 hover:underline' href='/'>Accessing exam cards</a>
        </div>
      </details>



    </div>
  )
}

export default QuickLinks
