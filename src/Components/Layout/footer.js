import footerpas1 from "../../styles/home/images/newsletter-bg-3.jpg";
function Footer() {
  return (
    <>
      <section className="newsletter-area newsletter-area_v1">
        <div className="container">
          <div
            className="phisspaddingfooter newsletter-inner ptb-60 px-3 px-lg-5 radius-lg bg-img bg-cover"
            data-aos="fade-up"
          >
            <div className="row ">
              <div className="col-lg-6">
                <div className="content-title">
                  <h2 className="title mb-30">Subscribe To Our Newsletter</h2>
                  <div className="newsletter-form">
                    <form id="newsletterForm">
                      <div className="input-inline bg-white rounded-pill">
                        <input
                          className="form-control border-0"
                          placeholder="Enter email here..."
                          type="text"
                          name="EMAIL"
                          required
                        />
                        <button
                          className="btn btn-lg btn-primary btn-gradient rounded-pill"
                          type="button"
                          aria-label="button"
                        >
                          Subscribe Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-area bg-primary-light">
        <div className="footer-top pt-100 pb-70">
          <div className="container">
            <div className="row gx-xl-5 justify-content-between">
              <div className="col-lg-3 col-sm-6 col-sm-12">
                <div
                  className="footer-widget"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="logo mb-20">
                    <a
                      className="navbar-brand"
                      href="index.html"
                      target="_self"
                      title="Link"
                    >
                      <img
                        className="lazyload"
                        src="images/placeholder.png"
                        data-src="assets/images/logo/logo-3.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <p>
                    E-learning refers to the process of learning using
                    electronic devices such as computers, smartphones, or
                    tablets. Compare to others.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4">
                <div
                  className="footer-widget"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <h5>Useful Links</h5>
                  <ul className="footer-links">
                    <li>
                      <a href="signup.html" target="_self" title="link">
                        Registration
                      </a>
                    </li>
                    <li>
                      <a href="mentors.html" target="_self" title="link">
                        Mentor
                      </a>
                    </li>
                    <li>
                      <a href="courses.html" target="_self" title="link">
                        Courses
                      </a>
                    </li>
                    <li>
                      <a href="error-404.html" target="_self" title="link">
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4">
                <div
                  className="footer-widget"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <h5>Features</h5>
                  <ul className="footer-links">
                    <li>
                      <a href="error-404.html" target="_self" title="link">
                        Paid Features
                      </a>
                    </li>
                    <li>
                      <a href="error-404.html" target="_self" title="link">
                        Management
                      </a>
                    </li>
                    <li>
                      <a href="error-404.html" target="_self" title="link">
                        Tracking
                      </a>
                    </li>
                    <li>
                      <a href="error-404.html" target="_self" title="link">
                        Invoice
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4">
                <div
                  className="footer-widget"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <h5>Explore</h5>
                  <ul className="footer-links">
                    <li>
                      <a href="error-404.html" target="_self" title="link">
                        Our Mission
                      </a>
                    </li>
                    <li>
                      <a href="error-404.html" target="_self" title="link">
                        How It Work
                      </a>
                    </li>
                    <li>
                      <a href="error-404.html" target="_self" title="link">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="contact.html" target="_self" title="link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div
                  className="footer-widget"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <h5>Download App</h5>
                  <div className="btn-groups">
                    <a
                      href="error-404.html"
                      className="btn btn-img size-sm radius-sm"
                      title="App Store"
                      target="_blank"
                    >
                      <img
                        className="lazyload blur-up"
                        src="images/placeholder.png"
                        data-src="assets/images/app-store.png"
                        alt="App Store"
                      />
                    </a>
                    <a
                      href="error-404.html"
                      className="btn btn-img size-sm radius-sm"
                      title="Play Store"
                      target="_blank"
                    >
                      <img
                        className="lazyload blur-up"
                        src="images/placeholder.png"
                        data-src="assets/images/play-store.png"
                        alt="App Store"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right-area border-top ptb-30">
          <div className="container">
            <div className="copy-right-content">
              <div className="social-link social-link_gradient rounded style-2 justify-content-center mb-10">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  title="Link"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  href="https://www.dribbble.com/"
                  target="_blank"
                  title="Link"
                >
                  <i className="fab fa-dribbble" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" title="Link">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.youtube.com/" target="_blank" title="Link">
                  <i className="fab fa-youtube" />
                </a>
              </div>
              <span>
                Copyright <i className="fal fa-copyright" />
                <span id="footerDate" />{" "}
                <a
                  href="index.html"
                  target="_self"
                  title="Oppida"
                  className="color-primary"
                >
                  Oppida
                </a>
                . All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
