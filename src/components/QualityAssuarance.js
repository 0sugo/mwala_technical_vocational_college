import React from 'react'
import Princi from '../components/images/qa.jpg'

const QualityAssuarance = () => {
  return (
    <div>
     <div className="mx-4 lg:mx-32">
      <h2 className="text-center text-3xl font-bold mb-4">
        QUALITY ASSUARANCE
      </h2>

      <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto mb-4">
          <img src={Princi} alt="Principal" className="object-cover w-full h-full" />
        </div>
      <p className="pt-3">
        Quality Assurance (QA) and enhancement are core aspects of the life of tertiary education institutions.
        The key element of QA and enhancement in most higher education systems is the improvement of the student experience.
        Central to the student experience remains the quality of teaching and learning.

      </p>

      <p className="pt-3">
        The Quality Assurance office is tasked with carrying out planned and systematic reviews of
        Mwala Technical and Vocational College Programmes/Courses to determine that acceptable standards of Education, Scholarship and Infrastructure are being maintained and enhanced.
        This office incorporates every institutional activity and relies on collecting evidence and information about
        mission fullfilment, efficiency of activity, and ensuring quality within the institution.
      </p>

      <p className="pt-3">
        Mwala Technical and Vocational College has identified as part of its philosophy the development of high quality programmes and graduates. To ensure the quality of the programmes/courses it offers, Mwala Technical and Vocational College has established an Internal Quality Assurance System which aims at maintaining and enhancing the quality of the learning experience of the student as well as to provide assurance to its stakeholders of the continuing high standards at the College.
      </p>

      <h4 className="italic pt-3 font-bold">The Quality Assurance Office through a committee has the following responsibilities:</h4>
      <ul className="list-disc pl-10">
        <li>Improving and enhancing the quality of the learning experience of students</li>
        <li>Providing assurance to stakeholders – students, parents, alumni, staff, employers, the general public, the government and accrediting agencies of the continuing high standards at Mwala Technical and Vocational College.</li>
        <li>Encouraging compliance with the elements of QA for teaching and administrative staff through training.</li>
        <li>Establishing guidelines for the responsibilities to achieve compliance</li>
        <li>Promoting awareness of internal quality assurance elements and issues among staff and students.</li>
        <li>Maintaining and enhancing standards </li>
        <li>Providing opportunities for people and programme development</li>
      </ul>

      <h4 className="italic pt-4 font-bold text-xs">Kavita C. Kyuli, MKIM, CMEP</h4>
      <h4 className="italic font-bold text-xs">Senior Principal/ BOG, Secretary</h4>

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

export default QualityAssuarance
