import React from 'react'
import Princi from '../components/images/principal.png'

const DeanStudents = () => {
  return (
    <div>
      <div className="mx-4 lg:mx-32">
      <h2 className="text-center text-3xl font-bold mb-4">
        OFFICE OF THE DEAN OF STUDENTS
      </h2>

      <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto mb-4">
          <img src={Princi} alt="Principal" className="object-cover w-full h-full" />
      </div>

      <p className="pt-3">
      The office of the dean of students is concerned with the welfare of
      students from the time they enroll in the college to the time they exit.
      It is entrusted with the responsibility of enhancing the growth of
      students spiritually, morally, physically, emotionally and mentally. The
      office creates a culture of care for students and staff by providing services
      designed to promote students’ academic and personal success. We
      encourage students to conduct us in case of a problem no matter how trivial it may be.
      </p>

      <h4 className="italic py-4 font-bold">SERVICES INCLUDE :</h4>
      <ul className="list-decimal pl-10">
        <li><span className='font-bold'>Accommodation and catering.</span> This section is responsible for room allocation,
          maintenance of cleanliness in and around the hostels and provision of catering services
          to students and staff of the college. The college has hostels for ladies and gents. </li>
        <li><span className='font-bold'>Guidance and counselling.</span>Facilitate student’s personal, social, emotional, intellectual
          and physical wellbeing. The activities carried out include: - Individual counselling, group
          counselling, open forum sessions, team building and community outreach.</li>
        <li><span className='font-bold'>Career Services.</span>This section offers career counselling to enable students to recognize
          and understand themselves and the world so as to come to a resolve on career life and
          educational choices. It takes care of students skills development, academic advisory,
          alumni networking, internship, mentorship services among others</li>
        <li><span className='font-bold'>Sports, recreation and co-curricular activities.</span>Coordination of sports, games and
          recreation. There are extensive opportunities for sport and recreation supported by a
          team of able staff members. The outdoor sport facilities include; football, hand ball,
          rugby and athletics. The focus is on sport for both recreation and excellence.</li>
        <li><span className='font-bold'>Clubs and societies.</span>Christian union, YCS, Seventh day Adventist, Muslims Students
          Association, Drama and music, Peer educators and innovative club. The office is
          committed to fostering an environment of spiritual support for staff and the students.
          The ultimate goal is to grow people into a deep intimacy with God</li>
        <li><span className='font-bold'>Registration of student’s organization.</span>For better coordination, the college through the
          assistance of class representatives has established a student’s union known as MTSU,
          Mwala Technical Students Union. The students association is governed by elected
          student leaders who run their affairs as per the approved students’ council
          constitution.</li>
        <li><span className='font-bold'>Management of support services for disabled, Orphans and vulnerable students.</span></li>
        <li><span className='font-bold'>HELB Loans and Bursaries</span></li>
        <li><span className='font-bold'>Provision of students identification cards</span></li>
      </ul>

      <h4 className="italic py-4 font-bold">SERVICES INCLUDE :</h4>
      <p className="pt-3">
      The college has a code of conduct which every student has to familiarize with and adhere to.The code is meant to ensure
      that we maintain our core values as an institution but also provide conducive environmentfor all
      </p>

      <h4 className="italic pt-4 font-bold text-xs">Cyrus Musau</h4>
      <h4 className="italic font-bold text-xs">Dean Of Students.</h4>
      {/* <h4 className="italic font-bold text-xs underline">deanofstudents.mtvc@gmail.com.</h4> */}

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

export default DeanStudents
