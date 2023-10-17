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



<div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
  <h1 id="accordion-color-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left  border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-[#06294D]" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
      <span className='text-lg text-black hover:text-white'>Student Links</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h1>
  <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
    <div class=" flex flex-col p-5 text-white border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <a className='hover:text-blue-800 hover:underline' href='/'>Student portal</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Student union</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Student welfare</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Alumni wall of fame</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Rules and regulations</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Online registration </a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Timetable</a>
    </div>
  </div>
  <h2 id="accordion-color-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-[#06294D]" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
      <span className='text-lg text-black hover:text-white'>General school links</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
    <div class=" flex flex-col p-5 text-white border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <a className='hover:text-blue-800 hover:underline' href='/'>legal notice</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Staff portal</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Staff Vacancy</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Sport activities</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Tender's application</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Environment policy</a>
    </div>
  </div>
  <h2 id="accordion-color-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-[#06294D]" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
      <span className='text-lg text-black hover:text-white'>School programme</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
    <div class=" flex flex-col p-5 text-white border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <a className='hover:text-blue-800 hover:underline' href='/'>Our intake</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>School timetable</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Registration form</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Examination rules</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Admission requirement</a>
      <a className='hover:text-blue-800 hover:underline' href='/'>Accessing exam cards</a>

    </div>
  </div>
</div>



    </div>
  )
}

export default QuickLinks
