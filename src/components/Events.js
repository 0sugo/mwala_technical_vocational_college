import React from 'react'
import adm from './images/adm3.png'
import principal from './images/principal.jpeg'

const Events = () => {
  return (
    <div>
      <h1 className='text-center my-4'>College events</h1>
      <div className='flex flex-col-reverse items-center'>
        <div className='flex justify-center'>
        <img src={adm} alt='Admission'/>
        </div>
        <div className='flex flex-col'>
          <h3>News on Admissions</h3>
          <p>Admission is currently on going, all applicants are required to apply
              before the dealine and have all the neccessities required before
              admission.
          </p>
          <div className='flex justify-center my-4'>
        <button type='button' className='bg-[#891110] p-2 rounded-lg'>Learn more</button>
        </div>
        </div>
      </div>

      <div className='flex flex-col-reverse items-center'>
      <div className='flex justify-center'>
        <img src={principal} alt='Principal'/>
      </div>
        <div className='flex flex-col'>
          <h3>News from Principal</h3>
          <p>Admission is currently on going, all applicants are required to apply
  before the dealine and have all the neccessities required before
  admission.</p>
        <div className='flex justify-center my-4'>
        <button type='button' className='bg-[#891110] p-2 rounded-lg'>Learn more</button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Events
