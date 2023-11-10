import React, { useEffect, useRef, useState } from "react";
import logo from './logo.png';
import { FaAngleDown, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isNonAcademicsOpen, setIsNonAcademicsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAcademics = () => {
    setIsAcademicsOpen(!isAcademicsOpen);
  };

  const toggleNonAcademics = () => {
    setIsNonAcademicsOpen(!isNonAcademicsOpen);
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsAcademicsOpen(false);
        setIsNonAcademicsOpen(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <main className={`sticky top-0 backdrop-blur z-10 overflow-y-scroll scrollbar ${isMenuOpen ? 'h-screen' : ''}`} ref={navRef}>
      <div className="text-black">
        <div className="marquee bg-[#6B2D30] md:pt-6">
          <marquee className="text-white font-bold tracking-widest md:text-2xl">January 2024 intake in progress... Apply now!</marquee>
        </div>
        <div className="container mx-auto">
          <nav className="flex flex-wrap items-center justify-between lg:mx-40 py-4 md:py-0 px-4 text-lg text-gray-700">

            <div>
              <img src={logo} alt="logo" className="w-12" />
            </div>

            <div>
              {/* <a href="/" className="judson leading-9 tracking-wider text-3xl text-[#06294D] ">Mwala Technical Vocational College</a> */}
              <a href="/" className="judson leading-2 uppercase  text-[#06294D] "><span className="">Mwala Technical <br /> Vocational College</span></a>
            </div>

            <div className={`md:hidden cursor-pointer`} onClick={toggleMenu}>
              <FaBars className="marooner h-6 w-6" />
            </div>

            <div className={`w-full md:flex md:items-center bg-blur md:w-auto sm:bg-slate-50 md:bg-transparent ${isMenuOpen ? "block" : "hidden"}`}>
              <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 items-center">
                <li className="transition duration-300">
                  <a className="px-3 py-2 block hover:border-[#6B2D30]" href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
                </li>
                <li>
                  <a className="px-3 py-2 block hover:text-[#6B2D30]" href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                </li>

                <li className="transition duration-300">
                  <a className="px-3 py-2 block hover:text-[#6B2D30]" href="#events" onClick={() => setIsMenuOpen(false)}>College events</a>
                </li>

                <li className="relative group transition duration-300">

                  <a className="px-3 py-2 flex items-center gap-1 hover:text-[#6B2D30]" href="#academics" onClick={toggleAcademics}>
                    Academics <FaAngleDown className={`icon ${isAcademicsOpen ? 'rotate-180' : ''}`} />
                  </a>
                  <ul className={`w-48 space-y-2 p-4 top-10 left-0 ${isAcademicsOpen ? 'block' : 'hidden'}`}>
                    <li className="transition duration-300">
                      <NavLink to="/applied-sciences" className="px-3 py-2 flex items-center hover:text-[#6B2D30]" onClick={() => setIsMenuOpen(false)}>
                        Applied Sciences
                      </NavLink>
                    </li>

                    <li className="transition duration-300">
                      <NavLink to="/Electricity&Electronic-Department" className="px-3 py-2 block hover:text-[#6B2D30]" onClick={() => setIsMenuOpen(false)}>
                        Electricity&Electronics Department
                      </NavLink>
                    </li>

                    <li className="transition duration-300">
                      <NavLink to="/Industrial-Attachment" className="px-3 py-2 block hover:text-[#6B2D30]" onClick={() => setIsMenuOpen(false)}>
                        Industrial Attachment
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="transition duration-300">
                  <a className="px-3 py-2 flex items-center gap-1 hover:text-[#6B2D30]" href="#non-academics" onClick={toggleNonAcademics}>
                    Non-Academics <FaAngleDown className={`icon ${isNonAcademicsOpen ? 'rotate-180' : ''}`} />
                  </a>
                  <ul className={`bg-white w-48 space-y-2 p-4 top-10 left-0 ${isNonAcademicsOpen ? 'block' : 'hidden'}`}>
                    <li className="transition duration-300">
                      <NavLink to="/Principal" className="px-3 py-2 block hover:text-[#6B2D30]" onClick={() => setIsMenuOpen(false)}>
                        Principal
                      </NavLink>
                    </li>
                    <li className="transition duration-300">
                      <NavLink to="/Deputy-Principal" className="px-3 py-2 block hover:text-[#6B2D30]" onClick={() => setIsMenuOpen(false)}>
                        Deputy Principal
                      </NavLink>
                    </li>
                    <li className="transition duration-300">
                      <NavLink to="/Dean-of-Students" className="px-3 py-2 block hover:text-[#6B2D30]" onClick={() => setIsMenuOpen(false)}>
                        Dean of Students
                      </NavLink>
                    </li>
                    <li className="transition duration-300">
                      <NavLink to="/Performance-Contracting" className="px-3 py-2 block hover:text-[#6B2D30]" onClick={() => setIsMenuOpen(false)}>
                        Performance Contracting
                      </NavLink>
                    </li>
                    <li className="transition duration-300">
                      <NavLink to="/Exam-Department" className="px-3 py-2 block hover:text-[#6B2D30]" onClick={() => setIsMenuOpen(false)}>
                        Exam Department
                      </NavLink>
                    </li>
                    <li className="transition duration-300">
                      <NavLink to="/Finance-Department" className="px-3 py-2 block hover:text-[#6B2D30]" onClick={() => setIsMenuOpen(false)}>
                        Finance Department
                      </NavLink>
                    </li>

                    <li className="transition duration-300">
                      <NavLink to="/Quality-Assuarance" className="px-3 py-2 block hover:text-[#6B2D30]" onClick={() => setIsMenuOpen(false)}>
                        Quality Assurance
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="transition duration-300">
                  <a className="px-3 py-2 block hover:text-[#6B2D30]" href="#quick" onClick={() => setIsMenuOpen(false)}>Quick links</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>


      </div>
    </main>
  );
};

export default Nav;
