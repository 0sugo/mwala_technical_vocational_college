import React from "react";
import Nav from './components/Nav/Nav';
import Top from "./components/Top";
import { Routes, Route } from "react-router-dom";
import AppliedSciences from "./components/AppliedSciences";
import Outlet from "./components/Outlet";
import IndustrialAttachment from "./components/IndustrialAttachment";
import QualityAssuarance from "./components/QualityAssuarance";
import FinanceDepartment from "./components/FinanceDepartment";
import ExamDepartment from "./components/ExamDepartment";
import PerformanceContracting from "./components/PerformanceContracting";
import DeanStudents from "./components/DeanStudents";
import DeputyPrincipal from "./components/DeputyPrincipal";
import Principal from "./components/Principal";
import ElectricityDepartment from "./components/ElectricityDepartment";

function App() {
  return (
    <div>
      <Top />
      <Nav />

      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/applied-sciences" element={<AppliedSciences />} />
        <Route path="/Industrial-Attachment" element={<IndustrialAttachment />} />
        <Route path="/Principal" element={<Principal />} />
        <Route path="/Deputy-Principal" element={<DeputyPrincipal />} />
        <Route path="/Dean-of-Students" element={<DeanStudents />} />
        <Route path="/Performance-Contracting" element={<PerformanceContracting />} />
        <Route path="/Exam-Department" element={<ExamDepartment />} />
        <Route path="/Finance-Department" element={<FinanceDepartment />} />
        <Route path="/Quality-Assuarance" element={<QualityAssuarance />} />
        <Route path="/Electricity&Electronic-Department" element={<ElectricityDepartment />} />
      </Routes>

      <div class="whats-float">
        <a href=""
          target="_blank">
          <i class="fa fa-whatsapp"></i><span>WhatsApp<br /><small>+254 796536524</small></span>
        </a>
      </div>

    </div>
  );
}

export default App;
