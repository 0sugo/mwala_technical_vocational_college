import React from 'react'
import logo from './images/logo.jpeg'
import QuickLinks from './QuickLinks'

const Footer = () => {
  return (
    <div>
      <QuickLinks />
      <div className='my-4 flex flex-col' >
        <div className=''>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.668156167375!2d37.44806987496584!3d-1.3757876986112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182585c62c2e2a75%3A0xb263f686bb513761!2sMwala%20Technical%20and%20Vocational%20College!5e0!3m2!1sen!2ske"
            // width="600"
            // height="450"
            frameBorder="0"
            className='w-full'
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
           ></iframe>
        <div>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
        </div>

        <div className='my-4'>
          <h3 className='text-center'>Newsletter</h3>
          <p>Keep up with our weekly news and updates on education. Enter your e-mail and subscribe to our newsletter.</p>
          <form>
            <input placeholder='enter your email'/>
          </form>
        </div>

        <div className=''>
          <div >
            <a href="mailto:mwalatvc@gmail.com" className='flex items-center'>
              <ion-icon name="mail-outline"></ion-icon>
              <span className='ml-2'>mwalatvc@gmail.com</span>
            </a>
          </div>

          <div className='flex items-center'>
            <ion-icon name="call-outline"></ion-icon>
            <span className='ml-2'>0796536524 / 0722501259</span>
          </div>

          <div className='flex items-center'>
            <ion-icon name="location-outline"></ion-icon>
            <span className='ml-2'>P.O.BOX 07-90102,Mwala-Machakos</span>
          </div>

          <div className='flex items-center'>
            <a href='https://www.facebook.com/Mwala.technicalvocational.college' className='flex items-center'>
            <ion-icon name="logo-facebook"></ion-icon>
            <span className='ml-2'>@Mwalatvc</span>
            </a>
          </div>
        </div>
      </div>

      <hr className='m-4'/>

      <div className='text-center'>
        <div>
          <span>Terms Of Use | </span>
          <span>Legal Notice | </span>
          <span>Website feedback</span>
        </div>

        <div>
          <span>2022 Mwala Technical & Vocation College. All Rights Reserved</span>
        </div>

      </div>

    </div>
  )
}

export default Footer
