import React from 'react'

const Top = () => {
  return (
    <div className='bg-[#06294D] w-full p-4'>
      <div >
        <ul className='flex flex-col justify-center'>
          <li className='flex justify-center items-center mr-3'>
            <ion-icon name="call" className='' id='whiter'></ion-icon>
            <span className='ml-2 text-white' >0796536524 / 0722501259</span>
          </li>

          <li className='flex justify-center items-center '>
            <ion-icon name="mail" className='text-white'  id='whiter'></ion-icon>
            <span className='ml-2 text-white'>mwalatvc@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Top
