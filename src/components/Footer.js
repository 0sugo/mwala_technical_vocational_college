import React from 'react'
import logo from './images/logo.jpeg'
import QuickLinks from './QuickLinks'

const Footer = () => {
  return (
    <div className=''>
      <QuickLinks />
      <div className='my-4 mx-4 flex flex-col-reverse gap-3 ]'>
        <div className='my-4'>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.668156167375!2d37.44806987496584!3d-1.3757876986112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182585c62c2e2a75%3A0xb263f686bb513761!2sMwala%20Technical%20and%20Vocational%20College!5e0!3m2!1sen!2ske"
            // width="600"
            // height="450"
            frameBorder="0"
            className='w-full h-52'
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
           ></iframe>
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

        <div className='my-4'>
          <h4 className='text-xl mb-2'>Newsletter</h4>
          <p className='greyer'>Keep up with our weekly news and updates on education. Enter your e-mail and subscribe to our newsletter.</p>
          <form className=" flex items-center mt-2">
            <input type="email" placeholder="you@example.com" id="email" className=" outline-none w-2/3 p-1 border border-solid  border-[#06294D] focus:border-black"/>
            <button className="p-1  bg-[#06294D] hover:bg-black  hover:border-black  text-white border border-solid border-[#06294D]"type="submit">
              Sign Up!
            </button>
          </form>
        </div>
      </div>

      <hr className='m-2'/>

      <div className='text-center bg-[#06294D] text-[white] p-4'>
        <div className='text-xs'>
          <span>Terms Of Use | </span>
          <span>Legal Notice | </span>
          <span>Website feedback</span>
        </div>

        <div className='text-xs'>
          <span>2023 Mwala Technical & Vocation College. All Rights Reserved</span>
        </div>

      </div>

    </div>
  )
}

export default Footer
