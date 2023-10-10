import React from 'react'

const Top = () => {
  return (
    <div className='bg-[#F6F7FA] p-4'>
      <div >
        <ul className='flex  flex-col justify-center '>
          <li className='flex justify-center items-center mr-3'>
          <ion-icon name="call"></ion-icon>
          <span className='ml-2'>+2547123456789</span>
          </li>

          <li className='flex justify-center items-center '>
          <ion-icon name="mail"></ion-icon>
          <span className='ml-2'>mwalatvc@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Top
