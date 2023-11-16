import React, { useEffect } from 'react';

const Departments = () => {
  useEffect(() => {
    const sliders = document.querySelectorAll('[data-slider]');

    const initSlider = function (currentSlider) {
      const sliderContainer = currentSlider.querySelector('[data-slider-container]');
      const sliderPrevBtn = currentSlider.querySelector('[data-slider-prev]');
      const sliderNextBtn = currentSlider.querySelector('[data-slider-next]');

      let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue('--slider-items'));
      let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

      let currentSlidePos = 0;

      const moveSliderItem = function () {
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
      };

      /**
       * NEXT SLIDE
       */
      const slideNext = function () {
        const slideEnd = currentSlidePos >= totalSlidableItems;

        if (slideEnd) {
          currentSlidePos = 0;
        } else {
          currentSlidePos += 1;
        }

        moveSliderItem();
      };

      sliderNextBtn.addEventListener('click', slideNext);

      /**
       * PREVIOUS SLIDE
       */
      const slidePrev = function () {
        if (currentSlidePos <= 0) {
          currentSlidePos = totalSlidableItems;
        } else {
          currentSlidePos -= 1;
        }

        moveSliderItem();
      };

      sliderPrevBtn.addEventListener('click', slidePrev);

      const dontHaveExtraItem = totalSlidableItems <= 0;
      if (dontHaveExtraItem) {
        sliderNextBtn.style.display = 'none';
        sliderPrevBtn.style.display = 'none';
      }

      /**
       * slide with [shift + mouse wheel]
       */

      currentSlider.addEventListener('wheel', (event) => {
        if (event.shiftKey && event.deltaY > 0) slideNext();
        if (event.shiftKey && event.deltaY < 0) slidePrev();
      });

      /**
       * RESPONSIVE
       */

      window.addEventListener('resize', () => {
        totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue('--slider-items'));
        totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

        moveSliderItem();
      });
    };

    for (let i = 0, len = sliders.length; i < len; i += 1) {
      initSlider(sliders[i]);
    }
  }, []);
  return (
    <div className="mx-4" id="departments">
      <div className="flex flex-col mb-2">
        <h2 className="overflow-hidden mt-16 pb-2 relative uppercase text-2xl font-bold">
          Departments
          <span className="absolute bottom-0 left-0 w-1/5 h-1  bg-black" />
        </h2>

      </div>

      <section className="service" aria-labelledby="service-label" id="services">
        <div className="container">

          <div className="slider" data-slider>
            <ul className="slider-container service-list" data-slider-container>
              <li className="slider-item" data-slider-item>
                <div className="service-card">
                  <div className="card-icon flex justify-center">
                    <ion-icon name="desktop-outline" />
                  </div>

                  <h3 className="h3 card-title text-center">Deputy Principal</h3>

                  <p className="card-text text-justify">
                    The Office is responsible for assisting the principal in day-to-day management of the
                    institution including the planning and overseeing the daily timetable of the classes...
                  </p>

                  <span className="text-lg card-number">01</span>

                  <a
                    href="/"
                    className="layer-link"
                    aria-label="More about my website design service"
                  />
                </div>
              </li>

              <li className="slider-item" data-slider-item>
                <div className="service-card">
                  <div className="card-icon flex justify-center">
                    <ion-icon name="code-working-outline" />
                  </div>

                  <h3 className="h3 card-title text-center">Dean of Students</h3>

                  <p className="card-text text-justify">
                    The office of the dean of students is concerned with the welfare of students from the
                    time they enroll in the college to the time they exit.It is entrusted with the
                    responsibility of enhancing the growth of...
                  </p>

                  <span className="text-lg card-number">02</span>

                  <a
                    href="/"
                    className="layer-link"
                    aria-label="More about my developing skills"
                  />
                </div>
              </li>

              <li className="slider-item" data-slider-item>
                <div className="service-card">
                  <div className="card-icon flex justify-center">
                    <ion-icon name="code-working-outline" />
                  </div>

                  <h3 className="h3 card-title text-center">Exam Department</h3>

                  <p className="card-text text-justify">
                    The department administers internal and external examinations which help in measuring the
                    performance of the learners admitted to the institution. The department deals with various clients
                    and which include educators, Examination Bodies...
                  </p>

                  <span className="text-lg card-number">02</span>

                  <a
                    href="/"
                    className="layer-link"
                    aria-label="More about my developing skills"
                  />
                </div>
              </li>

              <li className="slider-item" data-slider-item>
                <div className="service-card">
                  <div className="card-icon flex justify-center">
                    <ion-icon name="push-outline" />
                  </div>

                  <h3 className="h3 card-title text-center">Finance Department</h3>

                  <p className="card-text text-justify">
                    Finance department in Mwala Technical and Vocational College forms part of the integral
                    management team. The department play critical role in...
                  </p>

                  <span className="text-lg card-number">03</span>

                  <a
                    href="/"
                    className="layer-link"
                    aria-label="More about my deployment skills"
                  />
                </div>
              </li>

              <li className="slider-item" data-slider-item>
                <div className="service-card">
                  <div className="card-icon flex justify-center">
                    <ion-icon name="color-filter-outline" />
                  </div>

                  <h3 className="h3 card-title text-center"> Quality Assurance</h3>

                  <p className="card-text text-justify">
                    Quality Assurance (QA) and enhancement are core aspects of the life of tertiary education
                    institutions. The key element of QA and enhancement in most higher education systems is
                    the improvement of the student experience...
                  </p>

                  <span className="text-lg card-number">04</span>

                  <a
                    href="/"
                    className="layer-link"
                    aria-label="More about my IOT solutions"
                  />
                </div>
              </li>

              <li className="slider-item" data-slider-item>
                <div className="service-card">
                  <div className="card-icon flex justify-center">
                    <ion-icon name="color-filter-outline" />
                  </div>

                  <h3 className="h3 card-title text-center"> Industrial Liason Department</h3>

                  <p className="card-text text-justify">
                    In Mwala Tecnical and Vocationsal College(MTVC) industrial attachment is an integral part of Training as
                    spelt out in the curriculum developers Education syllabus for all courses.The liason office coordinates
                    the attachment in different companies and...
                  </p>

                  <span className="text-lg card-number">04</span>

                  <a
                    href="/"
                    className="layer-link"
                    aria-label="More about my IOT solutions"
                  />
                </div>
              </li>

              <li className="slider-item" data-slider-item>
                <div className="service-card">
                  <div className="card-icon flex justify-center">
                    <ion-icon name="chatbubbles-outline" />
                  </div>

                  <h3 className="h3 card-title text-center">Applied sciences & Agriculture</h3>

                  <p className="card-text text-center">
                    Department of agriculture and applied science is one of the premier departments at Mwala
                    Technical and Vocational College. The department offers competitive agricultural and
                    applied science based courses that are tailor-made to...
                  </p>

                  <span className="text-lg card-number">05</span>

                  <a
                    href="/"
                    className="layer-link"
                    aria-label="More about my technical consultations"
                  />
                </div>
              </li>

              <li className="slider-item" data-slider-item>
                <div className="service-card">
                  <div className="card-icon flex justify-center">
                    <ion-icon name="megaphone-outline" />
                  </div>

                  <h3 className="h3 card-title text-center">Performance Contracting</h3>

                  <p className="card-text text-justify">
                    Performance Contracting is a management tool used to track the accountability of publicly
                    funded government Ministries, Departments and Agencies (MDAs).It is a freely negotiated
                    performance agreement between the National government and the respective...
                  </p>

                  <span className="text-lg card-number">06</span>

                  <a
                    href="/"
                    className="layer-link"
                    aria-label="More about my Social Media service"
                  />
                </div>
              </li>
            </ul>

            <div className="slider-controls">
              <button
                className="slider-control prev"
                type="button"
                data-slider-prev
                aria-label="Slide to previous item"
              >
                <div className="line" />
                <div className="arrow" />
              </button>

              <button
                className="slider-control next"
                type="button"
                data-slider-next
                aria-label="Slide to next item"
              >
                <div className="line" />
                <div className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
