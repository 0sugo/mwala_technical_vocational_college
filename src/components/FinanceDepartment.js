import React from 'react';
import Princi from './images/finance.jpg';

const FinanceDepartment = () => (
  <div>
    <div className="mx-4 lg:mx-32">
      <h2 className="text-center text-3xl font-bold mb-4">
        FINANCE DEPARTMENT
      </h2>

      <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto mb-4">
        <img src={Princi} alt="Principal" className="object-cover w-full h-full" />
      </div>

      <p className="pt-3">
        Finance department in Mwala Technical and Vocational College forms part of the integral management team. The department play critical role in sourcing, and sound financial management aimed at getting the best out of the college’s service delivery.
      </p>

      <h4 className="italic font-bold pt-3">Our Roles :</h4>
      <ul className="list-disc pl-10">
        <li>Form part of the team preparing the strategic plan that acts as the guideline for all institutional planning.</li>
        <li>Work in conjunction with the departmental heads in the preparation of annual budgets estimates for revenues and expenditure.</li>
        <li>Custodian of institutional assets and resources to enhance optimal utilization and safeguard assets for the benefit of all stakeholders.</li>
        <li>Aid in ensuring lawful expenditure within the institution and ensure proper authorization of all transactions committing institutions’ resources.</li>
        <li>In charge of the preparation and maintaining of financial and accounting records as per the guidelines of PFM Act of 2012.</li>
        <li>Prepare and make submission of the required statutory reports as and when required by the PFM Act and any other relevant Circular as may be issued from time to time.</li>
        <li>Continuous updates and follow up on fees collection from students and funds from other agencies for effective, efficiency use and to meet transparency requirements.</li>
        <li>Assist in both internal and external audit through provision of sufficient evidence on accounting transactions as well as responding to matters raised by the AG office.</li>
        <li>Provide disclosure on any fraud, losses or non-compliance with the PFM Act.</li>
      </ul>

      <h4 className="italic pt-4 font-bold text-xs">MR. NZIOKI BERNARD</h4>
      <h4 className="italic font-bold text-xs">HOD ,FINANCE DEPARTMENT</h4>

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

export default FinanceDepartment;
