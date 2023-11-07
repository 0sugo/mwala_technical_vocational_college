import React, { useState } from "react";
import logo from './logo.png';
import { FaAngleDown, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isNonAcademicsOpen, setIsNonAcademicsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAcademics = () => {
    setIsAcademicsOpen(!isAcademicsOpen);
  };

  const toggleNonAcademics = () => {
    setIsNonAcademicsOpen(!isNonAcademicsOpen);
  };

  return (
    <main className={`sticky top-0 backdrop-blur z-10 ${isMenuOpen ? 'h-screen' : ''}`}>
      <div className="text-black">
        <div className="container mx-auto p-4">
          <nav className="flex flex-wrap items-center justify-between lg:mx-40 py-4 md:py-0 px-4 text-lg text-gray-700">
            <div>
              <img src={logo} alt="logo" className="w-12" />
            </div>

            <div>
              <a href="/" className="judson leading-9 tracking-wider text-3xl text-[#06294D] ">MTVC</a>
            </div>

            <div className={`md:hidden cursor-pointer`} onClick={toggleMenu}>
              <FaBars className="marooner h-6 w-6" />
            </div>

            <div className={`w-full md:flex md:items-center bg-blur md:w-auto bg-slate-50 ${isMenuOpen ? "block" : "hidden"}`}>
              <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 items-center">
                <li className="hover:border-[#6B2D30]">
                  <a className="px-3 py-2 block hover:border-[#6B2D30]" href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
                </li>
                <li>
                  <a className="px-3 py-2 block" href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                </li>

                <li>
                  <a className="px-3 py-2 block" href="#events" onClick={() => setIsMenuOpen(false)}>College events</a>
                </li>

                <li className="relative group">

                  <a className="px-3 py-2 block flex items-center gap-1" href="#academics" onClick={toggleAcademics}>
                    Academics <FaAngleDown className={`icon ${isAcademicsOpen ? 'rotate-180' : ''}`} />
                  </a>
                  <ul className={`bg-white w-48 space-y-2 p-4 top-10 left-0 border border-gray-300 ${isAcademicsOpen ? 'block' : 'hidden'}`}>
                    <li>
                    <NavLink to="/applied-sciences" className="px-3 py-2 block" onClick={() => setIsMenuOpen(false)}>
                      Applied Sciences
                    </NavLink>

                    </li>

                    <li>
                    <NavLink to="/Industrial-Attachment" className="px-3 py-2 block" onClick={() => setIsMenuOpen(false)}>
                    Industrial Attachment
                    </NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="px-3 py-2 block flex items-center gap-1" href="#non-academics" onClick={toggleNonAcademics}>
                    Non-Academics <FaAngleDown className={`icon ${isNonAcademicsOpen ? 'rotate-180' : ''}`} />
                  </a>
                  <ul className={`bg-white w-48 space-y-2 p-4 top-10 left-0 border border-gray-300 ${isNonAcademicsOpen ? 'block' : 'hidden'}`}>
                    <li>
                      <NavLink to="/Principal" className="px-3 py-2 block" onClick={() => setIsMenuOpen(false)}>
                      Principal
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Deputy-Principal" className="px-3 py-2 block" onClick={() => setIsMenuOpen(false)}>
                      Deputy Principal
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Dean-of-Students" className="px-3 py-2 block" onClick={() => setIsMenuOpen(false)}>
                      Dean of Students
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Performance-Contracting" className="px-3 py-2 block" onClick={() => setIsMenuOpen(false)}>
                      Performance Contracting
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Exam-Department" className="px-3 py-2 block" onClick={() => setIsMenuOpen(false)}>
                      Exam Department
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Finance-Department" className="px-3 py-2 block" onClick={() => setIsMenuOpen(false)}>
                      Finance Department
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/Quality-Assuarance" className="px-3 py-2 block" onClick={() => setIsMenuOpen(false)}>
                      Quality Assurance
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/Electricity&Electronic-Department" className="px-3 py-2 block" onClick={() => setIsMenuOpen(false)}>
                      Electricity&Electronics Department
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="px-3 py-2 block" href="#quick" onClick={() => setIsMenuOpen(false)}>Quick links</a>
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
