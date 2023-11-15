import React from "react";
import Princi from '../components/images/principal.png'

const AppliedSciences = () => {
  return (
   <div>
     <div className="mx-4 lg:mx-32">
      <h2 className="text-center text-3xl font-bold mb-4">
        AGRICULTURE AND APPLIED SCIENCE DEPARTMENT
      </h2>

      <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto mb-4">
          <img src={Princi} alt="Principal" className="object-cover w-full h-full" />
        </div>

      <p className="pt-3">
        Department of agriculture and applied science is one of the premier
        departments at Mwala Technical and Vocational College. The department
        offers competitive agricultural and applied science based courses that
        are tailor-made to satisfy the growing market demand.
      </p>

      <p className="pt-3">
        These programs are offered at various levels as Artisan, Certificate and
        diploma. The department hosts five sections that include; General
        Agriculture, Animal health, Analytical Chemistry, Lab Science Technology
        and Medical Lab Science.
      </p>

      <p className="pt-3">
        We offer our students with industrial attachments and field visits that
        enable them to integrate theory with job practice; we also indulge them
        in our own labs and the school farm. We have a team of qualified skilled
        trainers who are conversant and experienced in their area of
        specialization to ensure effective training.
      </p>

      <p className="pt-3">
        {" "}
        We offer face to face trainings and will soon be introducing online
        learning. Our courses are examined by the Kenya National Examination
        Council (KNEC) and the Curriculum Development Assessment and
        Certification Council (CDACC).
      </p>

      <h4 className="pt-3 text-lg font-bold">COURSES OFFERED</h4>
      <h4 className="italic pt-3">1. Diploma level</h4>
      <ul className="list-disc pl-10">
        <li>Diploma in Agriculture module 1, 2, 3.</li>
        <li>Diploma in Animal Health (CDACC Level 6)</li>
        <li>Diploma in Analytical Chemistry module 1, 2, 3.</li>
        <li>Diploma in Pharmaceutical Technology module 1, 2, 3.</li>
        <li>Diploma in Medical Laboratory Technology module 1, 2, 3.</li>
      </ul>

      <h4 className="italic pt-3">2. Certificate Level</h4>
      <ul className="list-disc pl-10">
        <li>Craft certificate in General Agriculture, 2yrs.</li>
        <li>Craft certificate in Laboratory Science Technology, 2yrs</li>
      </ul>

      <h4 className="italic pt-4 font-bold text-xs">Cyrus Musau</h4>
      <h4 className="italic font-bold text-xs">HOD, Agriculture & Applied Sciences.</h4>

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
};

export default AppliedSciences;
