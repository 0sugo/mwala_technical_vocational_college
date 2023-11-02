import React from "react";
import Nav from './components/Nav/Nav';
import Top from "./components/Top";
import { Routes, Route } from "react-router-dom";
import AppliedSciences from "./components/AppliedSciences";
import Outlet from "./components/Outlet";

function App() {
  return (
      <div>
      <Top />
      <Nav/>

      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/applied-sciences" element={<AppliedSciences />} />
      </Routes>
    </div>
  );
}

export default App;
