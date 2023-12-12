import React from 'react';
import Hero from './Hero';
import FindCourse from './FindCourse';
import About from './About';
// import Events from './Events';
// import Departments from "./Departments";
import Footer from './Footer';

const Outlet = () => (
  <div>
    <Hero />
    <FindCourse />
    <About />
    {/* <Events /> */}
    {/* <Departments /> */}
    <Footer />
  </div>
);

export default Outlet;
