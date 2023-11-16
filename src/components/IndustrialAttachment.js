import React from 'react';
import Princi from './images/principal.png';

const IndustrialAttachment = () => (
  <div>
    <div className="mx-4 lg:mx-32">
      <h2 className="text-center text-3xl font-bold mb-4">
        INDUSTRIAL ATTACHMENT
      </h2>

      <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto mb-4">
        <img src={Princi} alt="Principal" className="object-cover w-full h-full" />
      </div>

      <p className="pt-3">
        In Mwala Technical and Vocational College(MTVC)industrial attachments
        is an integral part of training as spelt out in the Curriculum developers
        education syllabus for all courses.
      </p>

      <p className="pt-3">
        The industrial Liason office coordinate the attachment for attachees
        in different companies and industries.The office makes sure that the
        Trainees have insuarance cover and assessed
      </p>

      <p className="pt-3">
        The head of department confirms that the following has been achieved before
        attachment :
      </p>
      <ul className="list-disc pl-10 italic">
        <li>Trainees cover sufficient ground of the syllabus</li>
        <li>Ensure that the students have undertaken more practical work</li>
        <li>Attachees are given advice on the areas of specialization and code of conduct</li>
      </ul>

      <p className="pt-3">
        <span className="italic font-bold">Our Aim : </span>
        Being a workplace of excellence and technological attachment.It monitors
        the progress of our trainees to improve on the quality of teaching and learning
        experience and avail role models for our trainees.
      </p>

      <h4 className="italic pt-4 font-bold text-xs">Nduta Anthony Kamau</h4>
      <h4 className="italic font-bold text-xs">HOD, Industrial Attachment.</h4>

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

export default IndustrialAttachment;
