import React from 'react'

const QuickLinks = () => {
  return (
    <div className='mx-4' id='quick'>
      <div className='flex flex-col mb-2'>
  <h2 className='overflow-hidden mt-16 pb-2 relative uppercase text-2xl font-bold'>
  Quick links
    <span className="absolute bottom-0 left-0 w-1/5 h-1  bg-black"></span>
  </h2>
</div>
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
