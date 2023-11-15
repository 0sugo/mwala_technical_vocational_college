import React from 'react'
import Princi from '../components/images/principal.png'

const PerformanceContracting = () => {
  return (
    <div>
     <div className="mx-4 lg:mx-32">
      <h2 className="text-center text-3xl font-bold mb-4">
        PERFORMANCE CONTRACTING DEPARTMENT
      </h2>

      <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto mb-4">
          <img src={Princi} alt="Principal" className="object-cover w-full h-full" />
        </div>

      <p className="pt-3">
        Performance Contracting is a management tool used to track the accountability of publicly funded government Ministries, Departments and Agencies (MDAs).
        It is a freely negotiated performance agreement between the National government and the respective MDA.
        The agreement clearly specifies the intentions, obligations and responsibilities of the contracting parties.
      </p>

      <p className="pt-3">
        Performance contracting started in Kenya in 2003 after undergoing piloting since 1989. Mwala Technical and vocational Training college joined the Performance Contracting (PC) in this financial year 2022/2023 of the 19th cycle Performance contracting.
        ance contracting goes through a cycle of negotiation, vetting, implementation and finally evaluation.
      </p>

      <p className="pt-3">
        At the close of the financial year, preparation of the new financial year PC and preparation for the evaluation of the previous FY PC overlap creating a period of intense concentration and focus which only the strongest team sail through without bruises.
      </p>

      <p className="pt-3">
        The evaluation scale runs from 1 to 5 where the lower the score the better the performance. Mwala Technical and Vocational College aims to perform good during this financial year of the 19th cycle performance contracting as everyone from the top management to the lowest is playing her part to make the PC implementation achieved as per the negotiation with the ministry.

      </p>

      <p className="pt-3">
        At Mwala Technical and Vocational Training college, we aspire to become the benchmark for performance contracting where we lead and others follow.
      </p>

      <h4 className="italic pt-4 text-xs font-bold">MR. MATHEW NDUNDA NGUI</h4>
      <h4 className="italic font-bold text-xs">MANAGEMENT REPRESENTATIVE</h4>

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

export default PerformanceContracting
