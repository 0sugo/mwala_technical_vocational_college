import React, { useEffect } from 'react'

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
    <div className='mx-4' id='departments'>
      <div className='flex flex-col mb-2'>
        <h2 className='overflow-hidden mt-16 pb-2 relative uppercase text-2xl font-bold'>
          Departments
          <span className="absolute bottom-0 left-0 w-1/5 h-1  bg-black"></span>
        </h2>

      </div>


<section class="service" aria-labelledby="service-label" id="services">
          <div class="container">

            <div class="slider" data-slider>
              <ul class="slider-container service-list" data-slider-container>
                <li class="slider-item" data-slider-item>
                  <div class="service-card">
                    <div class="card-icon">
                      <ion-icon name="desktop-outline"></ion-icon>
                    </div>

                    <h3 class="h3 card-title">Deputy Principal</h3>

                    <p class="card-text">
                    The Office is responsible for assisting the principal in day-to-day management of the
                    institution including the planning and overseeing the daily timetable of the classes...
                    </p>

                    <span class="text-lg card-number">01</span>

                    <a
                      href="/"
                      class="layer-link"
                      aria-label="More about my website design service"
                    > </a>
                  </div>
                </li>

                <li class="slider-item" data-slider-item>
                  <div class="service-card">
                    <div class="card-icon">
                      <ion-icon name="code-working-outline"></ion-icon>
                    </div>

                    <h3 class="h3 card-title">Dean of Students</h3>

                    <p class="card-text">
                    The office of the dean of students is concerned with the welfare of students from the
                    time they enroll in the college to the time they exit.It is entrusted with the
                    responsibility of enhancing the growth of...
                    </p>

                    <span class="text-lg card-number">02</span>

                    <a
                      href="/"
                      class="layer-link"
                      aria-label="More about my developing skills"
                    > </a>
                  </div>
                </li>

                <li class="slider-item" data-slider-item>
                  <div class="service-card">
                    <div class="card-icon">
                      <ion-icon name="code-working-outline"></ion-icon>
                    </div>

                    <h3 class="h3 card-title">Exam department</h3>

                    <p class="card-text">
                      The department administers internal and external examinations which help in measuring the
                      performance of the learners admitted to the institution. The department deals with various clients
                      and which include educators, Examination Bodies...
                    </p>

                    <span class="text-lg card-number">02</span>

                    <a
                      href="/"
                      class="layer-link"
                      aria-label="More about my developing skills"
                    > </a>
                  </div>
                </li>

                <li class="slider-item" data-slider-item>
                  <div class="service-card">
                    <div class="card-icon">
                      <ion-icon name="push-outline"></ion-icon>
                    </div>

                    <h3 class="h3 card-title">Finance Department</h3>

                    <p class="card-text">
                    Finance department in Mwala Technical and Vocational College forms part of the integral
                     management team. The department play critical role in...
                    </p>

                    <span class="text-lg card-number">03</span>

                    <a
                      href="/"
                      class="layer-link"
                      aria-label="More about my deployment skills"
                    > </a>
                  </div>
                </li>

                <li class="slider-item" data-slider-item>
                  <div class="service-card">
                    <div class="card-icon">
                      <ion-icon name="color-filter-outline"></ion-icon>
                    </div>

                    <h3 class="h3 card-title"> Quality Assurance</h3>

                    <p class="card-text">
                    Quality Assurance (QA) and enhancement are core aspects of the life of tertiary education
                    institutions. The key element of QA and enhancement in most higher education systems is
                    the improvement of the student experience...
                    </p>

                    <span class="text-lg card-number">04</span>

                    <a
                      href="/"
                      class="layer-link"
                      aria-label="More about my IOT solutions"
                    > </a>
                  </div>
                </li>

                <li class="slider-item" data-slider-item>
                  <div class="service-card">
                    <div class="card-icon">
                      <ion-icon name="color-filter-outline"></ion-icon>
                    </div>

                    <h3 class="h3 card-title"> Industrial Liason Department</h3>

                    <p class="card-text">
                    In Mwala Tecnical and Vocationsal College(MTVC) industrial attachment is an integral part of Training as
                    spelt out in the curriculum developers Education syllabus for all courses.The liason office coordinates
                    the attachment in different companies and...
                    </p>

                    <span class="text-lg card-number">04</span>

                    <a
                      href="/"
                      class="layer-link"
                      aria-label="More about my IOT solutions"
                    > </a>
                  </div>
                </li>

                <li class="slider-item" data-slider-item>
                  <div class="service-card">
                    <div class="card-icon">
                      <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>

                    <h3 class="h3 card-title">Applied sciences & agriculture</h3>

                    <p class="card-text">
                    Department of agriculture and applied science is one of the premier departments at Mwala
                    Technical and Vocational College. The department offers competitive agricultural and
                    applied science based courses that are tailor-made to...
                    </p>

                    <span class="text-lg card-number">05</span>

                    <a
                      href="/"
                      class="layer-link"
                      aria-label="More about my technical consultations"
                    > </a>
                  </div>
                </li>

                <li class="slider-item" data-slider-item>
                  <div class="service-card">
                    <div class="card-icon">
                      <ion-icon name="megaphone-outline"></ion-icon>
                    </div>

                    <h3 class="h3 card-title">Performance Contracting</h3>

                    <p class="card-text">
                    Performance Contracting is a management tool used to track the accountability of publicly
                    funded government Ministries, Departments and Agencies (MDAs).It is a freely negotiated
                    performance agreement between the National government and the respective...
                    </p>

                    <span class="text-lg card-number">06</span>

                    <a
                      href="/"
                      class="layer-link"
                      aria-label="More about my Social Media service"
                    > </a>
                  </div>
                </li>
              </ul>

              <div class="slider-controls">
                <button
                  class="slider-control prev"
                  type="button"
                  data-slider-prev
                  aria-label="Slide to previous item"
                >
                  <div class="line"></div>
                  <div class="arrow"></div>
                </button>

                <button
                  class="slider-control next"
                  type="button"
                  data-slider-next
                  aria-label="Slide to next item"
                >
                  <div class="line"></div>
                  <div class="arrow"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Departments


