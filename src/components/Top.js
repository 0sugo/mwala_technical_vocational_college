import React from 'react';

const Top = () => (
  <div className="bg-[#06294D] w-full p-4 lg:py-2">
    <div>
      <ul className="flex flex-col justify-center">
        <li className="flex justify-center items-center mr-3">
          <ion-icon name="call" className="" id="whiter" />
          <span className="ml-2 text-white md:text-xl">0796536524 / 0722501259</span>
        </li>

        <li className="flex justify-center items-center ">
          <ion-icon name="mail" className="text-white" id="whiter" />
          <span className="ml-2 text-white md:text-xl">mwalatvc@gmail.com</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Top;
