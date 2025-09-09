import homepass1 from "../../../Styles/home/images/hero-banner-2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBookOpen, faMoneyBillWave, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { GetAllCategories } from "../../../service/Categories";
import { GetAllCourse } from "../../../service/Course"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Home() {
  const [data, setdata] = useState([]);
  const [Datacourse, setDatacourse] = useState([]);
  const fetchAPI = async () => {
    const newdata = await GetAllCategories();
    const newdatacourse = await GetAllCourse();
    setdata(newdata.data);
    setDatacourse(newdatacourse.data)
  }
  useEffect(() => {
    fetchAPI();
  }, [])
  return (
    <>
      <section className="hero-banner hero-banner_v3 header-next pb-60">
        <div className="container">
          <div className="row align-items-center gx-xl-5">
            <div className="col-lg-6">
              <div className="banner-content mb-40">
                <h1 className="title mb-30" data-aos="fade-up" data-aos-delay={100}>
                  Better Learning For Better Skills
                </h1>
                <p className="text" data-aos="fade-up" data-aos-delay={100}>
                  Welcome to EduNet, your online destination for high-quality
                  education and professional development.
                </p>
                <div className="banner-filter-form mt-40" data-aos="fade-up" data-aos-delay={150}>
                  <div className="form-wrapper border rounded-pill">
                    <form>
                      <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                          <div className="input-group">
                            <label htmlFor="search"><i className="fas fa-search" /></label>
                            <input type="text" id="search" className="form-control" placeholder="Search course" />
                            <div className="vr" />
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                          <div className="input-group">
                            <label htmlFor="search"><i className="fas fa-th-large" /></label>
                            <select name="test" className="form-control">
                              <option data-display="Select Category">Select Category...</option>
                              <option value="1">Design</option>
                              <option value="2">UI Design</option>
                              <option value="3">UX Design</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-2 col-md-4 col-sm-6">
                          <button className="btn btn-lg btn-primary btn-gradient rounded-pill w-100" type="button" aria-label="Find Course">
                            <span>Find Course</span>
                            <i className="fal fa-search" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <div className="banner-image mb-40">
                <img className="" style={{ zIndex: 1000 }} src={homepass1} alt="Banner Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="shapes">
          <span className="shape" />
          <span className="shape" />
          <span className="shape" />
        </div>
      </section>

      <div>
        <section className="category-area category-area_v3 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title title-inline mb-50" data-aos="fade-up">
                  <h2 className="title">Top Trending Categories</h2>
                  <div className="cta-btn">
                    <a href="courses.html" className="btn btn-lg btn-primary btn-gradient rounded-pill" title="View All" target="_self">View All</a>
                  </div>
                </div>
              </div>

              <div className="col-12" data-aos="fade-up">
                <Swiper
                  className="swiper category-slider swiper-initialized swiper-horizontal swiper-pointer-events"
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={4}
                  pagination={{ clickable: true }}
                >
                  {
                    data.length > 0 && (
                      data.map((item, index) => {
                        return (
                          <SwiperSlide key={index}> <div className="card p-25 border radius-md" >
                            <div className="card-img mb-20">
                              <img className="lazyload" src={item.image[0]} data-src="assets/images/category/cat-7.png" alt="Category" />
                            </div>
                            <h5 className="card-title lc-1 mb-1" style={{ color: "#30C2EC" }}>
                              {item.name}
                            </h5>
                            <p className="card-text" style={{ color: "#687687" }}>
                              {item.description}
                            </p>
                          </div></SwiperSlide>
                        )
                      })

                    )
                  }

                </Swiper>

              </div>
            </div>
          </div>
        </section>
        <section className="course-area pb-75">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title title-inline mb-50" data-aos="fade-up">
                  <h2 className="title">Most Recent Courses</h2>
                  <div className="cta-btn">
                    <a href="courses.html" className="btn btn-lg btn-primary btn-gradient rounded-pill" title="See All Course" target="_self">See All Course</a>
                  </div>
                </div>
              </div>


              <div className="col-12">
                <Swiper
                  className="swiper category-slider swiper-initialized swiper-horizontal swiper-pointer-events"
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={2}
                  pagination={{ clickable: true }}
                >
                  {
                    Datacourse.map((item) => {
                      return (
                        <SwiperSlide>  <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="courses.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src={item.img[0]} data-src="assets/images/course/pro-25.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="courses.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <p  style={{ color: "#30C2EC" , marginBottom : "10px"}}>{item.title}</p>
                              <h6 className="course-title lc-2 " style={{marginBottom : "5px !important"}} >
                              Explore the details to help you gain a deeper understanding.
                              </h6>
                              <div className="authors mt-15">
                                <div className="">
                                  <FontAwesomeIcon className="color-all" icon={faBookOpen} />
                                  <span className="font-sm color-gray" style={{ marginLeft: "5px" }}>
                                    Lường Thanh Phong
                                  </span>
                                </div>
                                <span className=" font-sm icon-start"><FontAwesomeIcon className="color-all" icon={faClock} /> <span className="color-gray" style={{ display: "inline-block", marginLeft: "1px" }}>{item.time.start_display}</span></span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className=" font-sm icon-start"><FontAwesomeIcon className="color-all" icon={faMoneyBillWave} /> <span className="color-gray" style={{ display: "inline-block", marginLeft: "1px" }}>{item.price} $</span></span>
                                <span className=" font-sm icon-start"><FontAwesomeIcon className="color-all" icon={faCalendar} /> <span className="color-gray" style={{ display: "inline-block", marginLeft: "1px" }}>{item.numberlesson} leasson</span></span>
                              </div>
                            </div>
                          </div>
                        </div></SwiperSlide>
                      )
                    })
                  }


                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="course-area pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title title-inline mb-30" data-aos="fade-up">
                  <h2 className="title mb-20">Our Latest Courses</h2>
                  <div className="tabs-navigation tabs-navigation_gradient mb-20">
                    <ul className="nav nav-tabs" data-hover="fancyHover">
                      <li className="nav-item active">
                        <button className="nav-link hover-effect active btn-md rounded-pill" data-bs-toggle="tab" data-bs-target="#tab1" type="button">Design</button>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link hover-effect btn-md rounded-pill" data-bs-toggle="tab" data-bs-target="#tab2" type="button">Marketing</button>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link hover-effect btn-md rounded-pill" data-bs-toggle="tab" data-bs-target="#tab3" type="button">Development</button>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link hover-effect btn-md rounded-pill" data-bs-toggle="tab" data-bs-target="#tab4" type="button">Music</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="tab-content" data-aos="fade-up">
                  <div className="tab-pane slide show active" id="tab1">
                    <div className="row">
                     {
                      Datacourse.length > 0 && (
                        Datacourse.map((item,index) => {
                          return (
                            <div className="col-xl-6 col-lg-4 col-sm-6" key={index}>
                          <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                            <figure className="course-img col-sm-12 col-xl-5">
                              <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                                <img className="lazyload" src={item.img[0]} data-src="assets/images/course/pro-29.jpg" alt="course" />
                              </a>
                              <div className="hover-show radius-md">
                                <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                              </div>
                            </figure>
                            <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                              <div className="p-3">
                                <a href="course-details.html" target="_self" title="Design" className="tag font-sm color-primary mb-1">{item.title}</a>
                                <h6 className="course-title lc-2 mb-0">
                                  <a href="course-details.html" target="_self" title="Link">
                                    {item.description}
                                  </a>
                                </h6>
                                <div className="authors mt-15">
                                  <div className="author">
                                    <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-5.jpg" alt="Image" />
                                    <span className="font-sm">
                                      <a href="course-details.html" target="_self" title="James Hobert">
                                        James Hobert
                                      </a>
                                    </span>
                                  </div>
                                  <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                                </div>
                              </div>
                              <div className="px-xl-3 mb-1">
                                <div className="course-bottom-info py-2 px-3 px-xl-0">
                                  <span className="font-sm"><i className="fas fa-usd-circle" />{item.price}</span>
                                  <span className="font-sm"><i className="fas fa-book-alt" />{item.numberlesson} Lessons</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                          )
                        })
                      )
                     }

                    </div>
                    <div className="cta-btn text-center mt-15">
                      <a href="courses.html" className="btn btn-lg btn-primary btn-gradient rounded-pill" title="View More" target="_self">View More</a>
                    </div>
                  </div>
                  <div className="tab-pane slide" id="tab2">
                    <div className="row">
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src="images/placeholder.png" data-src="assets/images/course/pro-29.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <a href="course-details.html" target="_self" title="Marketing" className="tag font-sm color-primary mb-1">Marketing</a>
                              <h6 className="course-title lc-2 mb-0">
                                <a href="course-details.html" target="_self" title="Link">
                                  Mobile App Marketing 2022 ASO, Advertising &amp; Monetization
                                </a>
                              </h6>
                              <div className="authors mt-15">
                                <div className="author">
                                  <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-5.jpg" alt="Image" />
                                  <span className="font-sm">
                                    <a href="course-details.html" target="_self" title="Mike Russel">
                                      Mike Russel
                                    </a>
                                  </span>
                                </div>
                                <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className="font-sm"><i className="fas fa-usd-circle" />$110.00</span>
                                <span className="font-sm"><i className="fas fa-book-alt" />11 Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src="images/placeholder.png" data-src="assets/images/course/pro-30.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <a href="course-details.html" target="_self" title="Marketing" className="tag font-sm color-primary mb-1">Marketing</a>
                              <h6 className="course-title lc-2 mb-0">
                                <a href="course-details.html" target="_self" title="Link">
                                  Online Marketing: SEO &amp; Social Media Marketing Strategy
                                </a>
                              </h6>
                              <div className="authors mt-15">
                                <div className="author">
                                  <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-6.jpg" alt="Image" />
                                  <span className="font-sm">
                                    <a href="course-details.html" target="_self" title="Julian">
                                      Julian
                                    </a>
                                  </span>
                                </div>
                                <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className="font-sm"><i className="fas fa-usd-circle" />$110.00</span>
                                <span className="font-sm"><i className="fas fa-book-alt" />11 Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src="images/placeholder.png" data-src="assets/images/course/pro-31.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <a href="course-details.html" target="_self" title="Marketing" className="tag font-sm color-primary mb-1">Marketing</a>
                              <h6 className="course-title lc-2 mb-0">
                                <a href="course-details.html" target="_self" title="Link">
                                  SEO Training Masterclass 2023: Beginner To Advanced SEO
                                </a>
                              </h6>
                              <div className="authors mt-15">
                                <div className="author">
                                  <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-7.jpg" alt="Image" />
                                  <span className="font-sm">
                                    <a href="course-details.html" target="_self" title="Infinite Skills">
                                      Infinite Skills
                                    </a>
                                  </span>
                                </div>
                                <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className="font-sm"><i className="fas fa-usd-circle" />$110.00</span>
                                <span className="font-sm"><i className="fas fa-book-alt" />11 Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src="images/placeholder.png" data-src="assets/images/course/pro-32.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <a href="course-details.html" target="_self" title="Marketing" className="tag font-sm color-primary mb-1">Marketing</a>
                              <h6 className="course-title lc-2 mb-0">
                                <a href="course-details.html" target="_self" title="Link">
                                  Press Coverage, Publicity &amp; Public Relations For Branding
                                </a>
                              </h6>
                              <div className="authors mt-15">
                                <div className="author">
                                  <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-8.jpg" alt="Image" />
                                  <span className="font-sm">
                                    <a href="course-details.html" target="_self" title="Brad Schiff">
                                      Brad Schiff
                                    </a>
                                  </span>
                                </div>
                                <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className="font-sm"><i className="fas fa-usd-circle" />$110.00</span>
                                <span className="font-sm"><i className="fas fa-book-alt" />11 Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cta-btn text-center mt-15">
                      <a href="courses.html" className="btn btn-lg btn-primary btn-gradient rounded-pill" title="View More" target="_self">View More</a>
                    </div>
                  </div>
                  <div className="tab-pane slide" id="tab3">
                    <div className="row">
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src="images/placeholder.png" data-src="assets/images/course/pro-31.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <a href="course-details.html" target="_self" title="Development" className="tag font-sm color-primary mb-1">Development</a>
                              <h6 className="course-title lc-2 mb-0">
                                <a href="course-details.html" target="_self" title="Link">
                                  Kids Coding - Introduction to HTML, CSS and JavaScript!
                                </a>
                              </h6>
                              <div className="authors mt-15">
                                <div className="author">
                                  <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-5.jpg" alt="Image" />
                                  <span className="font-sm">
                                    <a href="course-details.html" target="_self" title="Mike Russel">
                                      Mike Russel
                                    </a>
                                  </span>
                                </div>
                                <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className="font-sm"><i className="fas fa-usd-circle" />$110.00</span>
                                <span className="font-sm"><i className="fas fa-book-alt" />11 Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src="images/placeholder.png" data-src="assets/images/course/pro-32.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <a href="course-details.html" target="_self" title="Development" className="tag font-sm color-primary mb-1">Development</a>
                              <h6 className="course-title lc-2 mb-0">
                                <a href="course-details.html" target="_self" title="Link">
                                  SQL Server High Availability and Disaster Recovery (HA/DR)
                                </a>
                              </h6>
                              <div className="authors mt-15">
                                <div className="author">
                                  <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-6.jpg" alt="Image" />
                                  <span className="font-sm">
                                    <a href="course-details.html" target="_self" title="Julian">
                                      Julian
                                    </a>
                                  </span>
                                </div>
                                <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className="font-sm"><i className="fas fa-usd-circle" />$110.00</span>
                                <span className="font-sm"><i className="fas fa-book-alt" />11 Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src="images/placeholder.png" data-src="assets/images/course/pro-33.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <a href="course-details.html" target="_self" title="Development" className="tag font-sm color-primary mb-1">Development</a>
                              <h6 className="course-title lc-2 mb-0">
                                <a href="course-details.html" target="_self" title="Link">
                                  Selenium 4 WebDriver with Java(Basics + Advance + Architect)
                                </a>
                              </h6>
                              <div className="authors mt-15">
                                <div className="author">
                                  <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-7.jpg" alt="Image" />
                                  <span className="font-sm">
                                    <a href="course-details.html" target="_self" title="Infinite Skills">
                                      Infinite Skills
                                    </a>
                                  </span>
                                </div>
                                <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className="font-sm"><i className="fas fa-usd-circle" />$110.00</span>
                                <span className="font-sm"><i className="fas fa-book-alt" />11 Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src="images/placeholder.png" data-src="assets/images/course/pro-34.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <a href="course-details.html" target="_self" title="Development" className="tag font-sm color-primary mb-1">Development</a>
                              <h6 className="course-title lc-2 mb-0">
                                <a href="course-details.html" target="_self" title="Link">
                                  Advanced Object Oriented Analysis of Hard Problems using UML
                                </a>
                              </h6>
                              <div className="authors mt-15">
                                <div className="author">
                                  <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-8.jpg" alt="Image" />
                                  <span className="font-sm">
                                    <a href="course-details.html" target="_self" title="Brad Schiff">
                                      Brad Schiff
                                    </a>
                                  </span>
                                </div>
                                <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className="font-sm"><i className="fas fa-usd-circle" />$110.00</span>
                                <span className="font-sm"><i className="fas fa-book-alt" />11 Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cta-btn text-center mt-15">
                      <a href="courses.html" className="btn btn-lg btn-primary btn-gradient rounded-pill" title="View More" target="_self">View More</a>
                    </div>
                  </div>
                  <div className="tab-pane slide" id="tab4">
                    <div className="row">
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src="images/placeholder.png" data-src="assets/images/course/pro-29.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <a href="course-details.html" target="_self" title="Music" className="tag font-sm color-primary mb-1">Music</a>
                              <h6 className="course-title lc-2 mb-0">
                                <a href="course-details.html" target="_self" title="Link">
                                  Learn to Play Saxophone: Beginner to Pro in Under Four Hours
                                </a>
                              </h6>
                              <div className="authors mt-15">
                                <div className="author">
                                  <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-5.jpg" alt="Image" />
                                  <span className="font-sm">
                                    <a href="course-details.html" target="_self" title="Mike Russel">
                                      Mike Russel
                                    </a>
                                  </span>
                                </div>
                                <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className="font-sm"><i className="fas fa-usd-circle" />$110.00</span>
                                <span className="font-sm"><i className="fas fa-book-alt" />11 Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src="images/placeholder.png" data-src="assets/images/course/pro-31.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <a href="course-details.html" target="_self" title="Music" className="tag font-sm color-primary mb-1">Music</a>
                              <h6 className="course-title lc-2 mb-0">
                                <a href="course-details.html" target="_self" title="Link">
                                  Learn to play HARMONICA, the easiest instrument to pick up!
                                </a>
                              </h6>
                              <div className="authors mt-15">
                                <div className="author">
                                  <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-6.jpg" alt="Image" />
                                  <span className="font-sm">
                                    <a href="course-details.html" target="_self" title="Julian">
                                      Julian
                                    </a>
                                  </span>
                                </div>
                                <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className="font-sm"><i className="fas fa-usd-circle" />$110.00</span>
                                <span className="font-sm"><i className="fas fa-book-alt" />11 Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src="images/placeholder.png" data-src="assets/images/course/pro-34.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <a href="course-details.html" target="_self" title="Music" className="tag font-sm color-primary mb-1">Music</a>
                              <h6 className="course-title lc-2 mb-0">
                                <a href="course-details.html" target="_self" title="Link">
                                  Learn to Play the Flute: Beginner Basics to Intermediate
                                </a>
                              </h6>
                              <div className="authors mt-15">
                                <div className="author">
                                  <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-7.jpg" alt="Image" />
                                  <span className="font-sm">
                                    <a href="course-details.html" target="_self" title="Infinite Skills">
                                      Infinite Skills
                                    </a>
                                  </span>
                                </div>
                                <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className="font-sm"><i className="fas fa-usd-circle" />$110.00</span>
                                <span className="font-sm"><i className="fas fa-book-alt" />11 Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-4 col-sm-6">
                        <div className="row g-0 course-default course-column border radius-md mb-25 align-items-center">
                          <figure className="course-img col-sm-12 col-xl-5">
                            <a href="course-details.html" title="Image" target="_self" className="lazy-container radius-md ratio ratio-5-4">
                              <img className="lazyload" src="images/placeholder.png" data-src="assets/images/course/pro-32.jpg" alt="course" />
                            </a>
                            <div className="hover-show radius-md">
                              <a href="course-details.html" className="btn btn-md btn-primary btn-gradient rounded-pill" title="Enroll Now" target="_self">Enroll Now</a>
                            </div>
                          </figure>
                          <div className="course-details col-sm-12 col-xl-7 ps-xl-2">
                            <div className="p-3">
                              <a href="course-details.html" target="_self" title="Development" className="tag font-sm color-primary mb-1">Development</a>
                              <h6 className="course-title lc-2 mb-0">
                                <a href="course-details.html" target="_self" title="Link">
                                  Learn Compression &amp; Dynamics Processing: The Complete Guide!
                                </a>
                              </h6>
                              <div className="authors mt-15">
                                <div className="author">
                                  <img className="lazyload blur-up radius-sm" src="images/placeholder.png" data-src="assets/images/avatar-8.jpg" alt="Image" />
                                  <span className="font-sm">
                                    <a href="course-details.html" target="_self" title="Brad Schiff">
                                      Brad Schiff
                                    </a>
                                  </span>
                                </div>
                                <span className="font-sm icon-start"><i className="fas fa-clock" />06h 00m</span>
                              </div>
                            </div>
                            <div className="px-xl-3 mb-1">
                              <div className="course-bottom-info py-2 px-3 px-xl-0">
                                <span className="font-sm"><i className="fas fa-usd-circle" />$110.00</span>
                                <span className="font-sm"><i className="fas fa-book-alt" />11 Lessons</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cta-btn text-center mt-15">
                      <a href="courses.html" className="btn btn-lg btn-primary btn-gradient rounded-pill" title="View More" target="_self">View More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <div className="feature-area feature-area_v3 pb-100">
          <div className="banner-img z-1" data-aos="fade-up">
            <div className="lazy-container ratio ratio-21-8">
              <img className="lazyload" src={homepass3} data-src="assets/images/banner/video-banner-3.jpg" alt="Image" />
            </div>

          </div>
          <div className="feature-cards mtn-50" data-aos="fade-up">
            <div className="container">
              <div className="wrapper bg-white shadow-md radius-md px-30 pt-30">
                <div className="row">
                  <div className="col-sm-6 col-lg-3 mb-30">
                    <div className="card text-center bg-none">
                      <div className="card-icon mx-auto mb-15">
                        <img className="lazyload" src="images/placeholder.png" data-src="assets/images/icon/counter-icon-5.png" alt="Image" />
                      </div>
                      <div className="card-content">
                        <span className="h3 font-medium mb-2"><span className="counter">500</span>+</span>
                        <p className="card-text lh-1">Satisfied Students</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-30">
                    <div className="card text-center bg-none">
                      <div className="card-icon mx-auto mb-15">
                        <img className="lazyload" src="images/placeholder.png" data-src="assets/images/icon/counter-icon-6.png" alt="Image" />
                      </div>
                      <div className="card-content">
                        <span className="h3 font-medium mb-2"><span className="counter">300</span>+</span>
                        <p className="card-text lh-1">Online Courses</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-30">
                    <div className="card text-center bg-none">
                      <div className="card-icon mx-auto mb-15">
                        <img className="lazyload" src="images/placeholder.png" data-src="assets/images/icon/counter-icon-7.png" alt="Image" />
                      </div>
                      <div className="card-content">
                        <span className="h3 font-medium mb-2"><span className="counter">240</span>+</span>
                        <p className="card-text lh-1">Verified mentor</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-30">
                    <div className="card text-center bg-none">
                      <div className="card-icon mx-auto mb-15">
                        <img className="lazyload" src="images/placeholder.png" data-src="assets/images/icon/counter-icon-8.png" alt="Image" />
                      </div>
                      <div className="card-content">
                        <span className="h3 font-medium mb-2"><span className="counter">100</span>%</span>
                        <p className="card-text lh-1">Secure &amp; Trusted Place</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}



      </div>
    </>
  )
}
export default Home