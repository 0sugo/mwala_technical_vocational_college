import React from 'react'
import Princi from '../components/images/exam.png'

const ExamDepartment = () => {
  return (
    <div>
     <div className="mx-4 lg:mx-32">
      <h2 className="text-center text-3xl font-bold mb-4">
        EXAM DEPARTMENT
      </h2>

      <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto mb-4">
          <img src={Princi} alt="Principal" className="object-cover w-full h-full" />
        </div>

      <h4 className="pt-3 text-lg font-bold italic">HOD Examinations</h4>

      <p className="">Engr. Nthenge Wambua is a graduate with a Bachelor of Technology in Mechanical Engineering
      from the Technical University of Kenya (TUK) and registered by the Engineers Board of Kenya
      (EBK).</p>

      <h4 className="pt-3 text-lg font-bold italic">Department Overview</h4>

      <p className="">
      The department administers internal and external examinations which help in measuring the
      performance of the learners admitted to the institution. The department deals with various clients
      and which include educators, Examination Bodies, the general public, and continuing students.
      Mwala Technical and Vocational College has the capacity of training Artisan, Craft, and
      Diploma levels who after completion of various stages of their studies are subjected to
      examination to assess their capacities.
      </p>

      <p className="pt-3">
      Our internal examinations are in each term and the
      external examinations are administered at the end of each module. Mwala Technical and
      Vocational College acts as a Centre for KNEC Business Examinations, KNEC Technical
      Examinations, and NITA Examinations. For all the examinations the student should have class
      attendance of at least 75%
      </p>


      <h4 className="italic pt-3 font-bold">The department serves various obligations :</h4>
      <ul className="list-disc pl-10">
        <li>Moderation, processing, and printing of the internal examination with confidentiality to avoid any leakage.</li>
        <li>Registration and coordination of external examinations by providing relevant resources.</li>
        <li>Ensuring all standards and procedures of examination are adhered to during exam period.</li>
        <li>Preparation of internal examination timetable and allocation of rooms and trainers to supervise</li>
      </ul>

      <h4 className="italic pt-4 text-xs font-bold">ENGR. NTHENGE WAMBUA</h4>
      <h4 className="italic font-bold text-xs">HOD, EXAMS</h4>

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
  )
}

export default ExamDepartment
