import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Top from './components/Top';
import AppliedSciences from './components/AppliedSciences';
import Outlet from './components/Outlet';
import IndustrialAttachment from './components/IndustrialAttachment';
import QualityAssuarance from './components/QualityAssuarance';
import FinanceDepartment from './components/FinanceDepartment';
import ExamDepartment from './components/ExamDepartment';
import PerformanceContracting from './components/PerformanceContracting';
import DeanStudents from './components/DeanStudents';
import DeputyPrincipal from './components/DeputyPrincipal';
import Principal from './components/Principal';
import ElectricityDepartment from './components/ElectricityDepartment';
import NavBar from './components/NavBar';
import Spinner from './components/Spinner';
import Gallery from './components/Gallery';
qq
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
q
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) that takes 5 seconds
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Spinner />
          <Top />
          <NavBar />

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
            <Route path="/gallery" element={<Gallery />} />
          </Routes>

          <div className="whats-float">
            <a
              href="/"
              target="_blank"
            >
              <i className="fa fa-whatsapp" />
              <span>
                WhatsApp
                <br />
                <small>+254 796536524</small>
              </span>
            </a>
          </div>
        </>
      )}

    </div>
  );
}

export default App;
