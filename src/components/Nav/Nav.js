import React, { useState } from "react";
// import logo from './logo.jpeg';
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
q
  return (
    <main className="sticky top-0 backdrop-blur">
      <div className="text-black">
        <div className="container mx-auto p-4">
          <nav className="flex flex-wrap items-center justify-between lg:mx-40  py-4 md:py-0 px-4 text-lg text-gray-700">
            <div>
              <a href="/" className="judson leading-9 tracking-wider text-3xl">MTVC</a>
              {/* <img src={logo} alt="logo" className="sm:hidden"/> */}
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={toggleMenu}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>

            <div className={`w-full md:flex md:items-center bg-blur md:w-auto ${isMenuOpen ? "" : "hidden"}`}>
              <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 items-center">
                <li className="hover:border-[#6B2D30]">
                  <a className="px-3 py-2 block hover:border-[#6B2D30] " href="/">Home</a>
                </li>
                <li>
                  <a className="px-3 py-2 block " href="#about">About</a>
                </li>
                <li>
                  <a className="px-3 py-2 block " href="#contact">Academics</a>
                </li>
                <li>
                  <a className="px-3 py-2 block " href="#contact">Non-Academics</a>
                </li>
                <li>
                  <a className="px-3 py-2 block " href="#contact">Contact Us</a>
                </li>
                {/* <li>
                  <a className="text-white bg-[#000000] rounded-lg px-3 py-2 md:mt-3" href="#contact">Get </a>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Nav;
