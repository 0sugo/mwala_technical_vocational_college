import React from 'react'
import adm from './images/adm3.png'
import principal from './images/principal.jpeg'

const Events = () => {
  return (
    <div>
      <h1>College events</h1>

      <div>
        <img src={adm} alt='Admission'/>
        <div>
          <h3>News on Admissions</h3>
          <p>Admission is currently on going, all applicants are required to apply
  before the dealine and have all the neccessities required before
  admission.</p>
  <button type='button'>Learn more</button>

        </div>
      </div>

      <div>
        <img src={principal} alt='Principal'/>
        <div>
          <h3>News from Principal</h3>
          <p>Admission is currently on going, all applicants are required to apply
  before the dealine and have all the neccessities required before
  admission.</p>
  <button type='button'>Learn more</button>

        </div>
      </div>
    </div>
  )
}

export default Events
