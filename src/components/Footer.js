import React from 'react';
import QuickLinks from './QuickLinks';

const Footer = () => (
  <div className="bg-[#06294D]">
    <QuickLinks />
    <div className="m-4 md:mx-12 lg:mx-36 flex flex-col md:flex-row gap-3 ">
      <div className="my-4 md:w-1/3 ">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.668156167375!2d37.44806987496584!3d-1.3757876986112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182585c62c2e2a75%3A0xb263f686bb513761!2sMwala%20Technical%20and%20Vocational%20College!5e0!3m2!1sen!2ske"
          width="300"
          height="300"
          className="w-full h-42"
          allowFullScreen=""
          loading="lazy"
        />
      </div>

      <div className="p-4 md:pt-6 md:w-1/3">
        <div>
          <a href="mailto:mwalatvc@gmail.com" className="flex items-center">
            <span className="text-[#b0696d]"><ion-icon name="mail-outline" /></span>
            <span className="ml-2 text-white">mwalatvc@gmail.com</span>
          </a>
        </div>

        <div className="flex items-center">
          <span className="text-[#b0696d]"><ion-icon name="call-outline" /></span>
          <span className="ml-2 text-white">0796536524 / 0722501259</span>
        </div>

        <div className="flex items-center">
          <span className="text-[#b0696d]"><ion-icon name="location-outline" /></span>
          <span className="ml-2 text-white">P.O.BOX 07-90102,Mwala-Machakos</span>
        </div>

        <div className="flex items-center">
          <a href="https://www.facebook.com/Mwala.technicalvocational.college" className="flex items-center">
            <span className="text-[#b0696d]"><ion-icon name="logo-facebook" /></span>
            <span className="ml-2 text-white">@Mwalatvc</span>
          </a>
        </div>
      </div>

      <div className="p-4 space-y-4 md:w-1/3">
        <h4 className="text-2xl text-neutral-400"><u>Newsletter</u></h4>
        <p className="text-white">Keep up with our weekly news and updates on education. Enter your e-mail and subscribe to our newsletter.</p>
        <form className="flex items-center ">
          <input type="email" placeholder="you@example.com" id="email" className="px-2 py-3 border border-[#06294D] rounded-l-lg focus:outline-none focus:border-black w-2/3 " />
          <button className="px-2 py-3 rounded-r-lg  bg-black hover:bg-[#06294D]  hover:border-black  text-white border border-solid border-[#06294D]" type="submit">
            Sign Up!
          </button>
        </form>
      </div>
    </div>

    <hr className="m-2" />

    <div className="text-center bg-[#6B2D30] text-[white] p-4">
      <div className="text-xs">
        <span>Terms Of Use | </span>
        <span>Legal Notice | </span>
        <span>Website feedback</span>
      </div>

      <div className="text-xs">
        <span>2024 Mwala Technical & Vocation College. All Rights Reserved</span>
      </div>

    </div>

  </div>
);

export default Footer;
