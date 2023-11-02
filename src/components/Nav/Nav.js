import React, { useState } from "react";
import logo from './logo.png';
import { FaAngleDown, FaBars } from "react-icons/fa";

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
                  <a className="px-3 py-2 block hover:border-[#6B2D30]" href="/">Home</a>
                </li>
                <li>
                  <a className="px-3 py-2 block" href="#about">About</a>
                </li>

                <li>
                  <a className="px-3 py-2 block" href="#events">College events</a>
                </li>

                <li className="relative group">
                  <a className="px-3 py-2 block flex items-center gap-1" href="#academics" onClick={toggleAcademics}>
                    Academics <FaAngleDown className={`icon ${isAcademicsOpen ? 'rotate-180' : ''}`} />
                  </a>
                  <ul className={`bg-white w-48 space-y-2 p-4 top-10 left-0 border border-gray-300 ${isAcademicsOpen ? 'block' : 'hidden'}`}>
                    <li>
                      <a href="#academic1">Applied sciences</a>
                    </li>
                    <li>
                      <a href="#academic2">Industrial Attachment</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="px-3 py-2 block flex items-center gap-1" href="#non-academics" onClick={toggleNonAcademics}>
                    Non-Academics <FaAngleDown className={`icon ${isNonAcademicsOpen ? 'rotate-180' : ''}`} />
                  </a>
                  <ul className={`bg-white w-48 space-y-2 p-4 top-10 left-0 border border-gray-300 ${isNonAcademicsOpen ? 'block' : 'hidden'}`}>
                    <li>
                      <a href="#principal">Principal</a>
                    </li>
                    <li>
                      <a href="#deputy-principal">Deputy Principal</a>
                    </li>
                    <li>
                      <a href="#dean-of-students">Dean of Students</a>
                    </li>
                    <li>
                      <a href="#performance-contracting">Performance Contracting</a>
                    </li>
                    <li>
                      <a href="#exam-department">Exam Department</a>
                    </li>
                    <li>
                      <a href="#finance-department">Finance Department</a>
                    </li>
                    <li>
                      <a href="#quality-assurance">Quality Assurance</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="px-3 py-2 block" href="#quick">Quick links</a>
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
