import React from 'react';
import Princi from './images/depPri.jpg';
import 'animate.css';

const DeputyPrincipal = () => (
  <div>
    <div className="mx-4 lg:mx-32 animate__animated animate__zoomIn">
      <h2 className="text-center text-3xl font-bold mb-4">
        DEPUTY PRINCIPAL
      </h2>

      <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto mb-4">
        <img src={Princi} alt="Principal" className="object-cover w-full h-full" />
      </div>

      <p className="pt-3">
        The Office is responsible for assisting the principal in day-to-day management of the institution including the planning and overseeing the daily timetable of the classes.

      </p>

      <p className="pt-3">
        {' '}
        The office is also involved in other major activities which include:
      </p>

      <ul className="list-disc pl-10">
        <li>Development of key institute’s strategic aims as well as participation in the formulation/review of academic policies and preparation/review of academic work manuals and procedures.</li>
        <li>Corporate planning, staff recruitment, training of administrative staff, staff and students’ discipline, personnel administration, and registry administration</li>
        <li>Chairing a number of strategic institute committees, such as Institute Academic Board/examinations and Timetable among others.</li>
        <li>Working with the principal’s office in the development of institutional and professional capacities aimed at enhancing the provision of quality and relevant technical education and training, including Staff Continuous Professional</li>
        <li>The office is responsible for coordinating the development and implementation of the Institute Strategic Plan with regard to academic programs towards the achievement of the intended short and long-term goals.</li>
      </ul>

      <hr className="m-2" />
    </div>

    <div className="text-center bg-[#06294D] text-[white] p-4">
      <div className="text-xs">
        <span>Terms Of Use | </span>
        <span>Legal Notice | </span>
        <span>Website feedback</span>
      </div>

      <div className="text-xs">
        <span>
          2023 Mwala Technical & Vocation College. All Rights Reserved
        </span>
      </div>
    </div>
  </div>
);

export default DeputyPrincipal;
