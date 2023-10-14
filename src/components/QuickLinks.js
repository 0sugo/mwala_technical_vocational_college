import React from 'react'

const QuickLinks = () => {
  return (
    <div>
      <h1>QuickLinks</h1>
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
