import React from 'react'
import adm from './images/adm3.png'
import principal from './images/principal.jpeg'

const Events = () => {
  return (
    <div className='mx-4'>
      <div className='flex flex-col mb-2'>
  <h2 className='overflow-hidden mt-16 pb-2 relative'>
  College events
    <span className="absolute bottom-0 left-0 w-1/5 h-1  bg-black"></span>
  </h2>
</div>
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
        <button type='button' className='bg-[#891110] p-2 rounded-lg hover:bg-[#06294D] text-white py-3 px-8 shadow-md hover:shadow-2xl transition duration-500'>
          Learn more
          <span><ion-icon name="arrow-redo-outline" className='text-white'></ion-icon></span>
          </button>
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
        <button type='button' className='bg-[#891110] p-2 rounded-lg hover:bg-[#06294D] text-white py-3 px-8 shadow-md hover:shadow-2xl transition duration-500'>
          Learn more
          <span><ion-icon name="arrow-redo-outline" className='text-white'></ion-icon></span>
          </button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Events
