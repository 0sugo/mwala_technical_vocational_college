import React from "react";
import Nav from './components/Nav/Nav';
import Top from "./components/Top";
import Hero from "./components/Hero";
import FindCourse from "./components/FindCourse";
import About from "./components/About";
import Events from "./components/Events";

function App() {
  return (
    <div>
      <Top />
      <Nav/>
      <Hero />
      <FindCourse />
      <About />
      <Events />
    </div>
  );
}

export default App;
