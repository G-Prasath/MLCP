"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

// import ModalVideo from "react-modal-video";


import Services from "./component/Services";
import About from "./component/About";
import Wrapper from "./component/Wrapper";

import "./assets/css/tailwind.css";
import "./assets/scss/tailwind.scss";

import "./assets/scss/icons.scss";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Portfolio from "./component/Portfolio";
import Clients from "./component/Clients";
import FloatingCallButton from "./component/FloatingCallButton";

function Home() {
  const [isOpen, setMenu] = useState(true);
  const [scroll, setScroll] = useState(false);
  // const [videoModal, setModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!isOpen);
  };
  // const isMobile = window.innerWidth < 600;
const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
  return (
    <>
      <Wrapper>
        <div>
          <nav
            className={`${scroll ? "is-sticky" : "is-sticky"} navbar`}
            id="navbar"
          >
            <div className="container flex flex-wrap items-center justify-end">
              <a className="navbar-brand" href="index.html">
                <span className="inline-block dark:hidden">
                  <Image
                    src={"/images/logo-estar.png"}
                    className="l-dark"
                    alt="logo"
                    width={100}
                    height={10}
                    style={{width:'auto'}}
                  />
                  <Image
                    src={"/images/logo-estar.png"}
                    className="l-light"
                    alt="Logo"
                    width="100"
                    height={10}
                    style={{width:'auto'}}
                  />
                </span>
                <Image
                  src={"/images/logo-estar.png"}
                  className="hidden dark:inline-block"
                  alt="Logo"
                  height={10}
                  width="100"
                  style={{width:'auto'}}
                />
              </a>

              <div className="nav-icons flex items-center lg_992:order-2 ms-auto">

                <button
                  type="button"
                  className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Navigation Menu</span>
                  <i className="mdi mdi-menu mdi-24px"></i>
                </button>
              </div>

              <div
                className={`${
                  isOpen === true ? "hidden" : "block"
                } navigation lg_992:order-1 lg_992:flex`}
                id="menu-collapse"
              >
                <ul
                  className="navbar-nav nav-light"
                  style={{ marginLeft: isMobile ? "0px" : "300px" }}
                  id="navbar-navlist"
                >
                  <Link
                    className="nav-item"
                    to="home"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Home</span>
                  </Link>
                  <Link
                    className="nav-item"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    to="about"
                  >
                    <span className="nav-link">About us</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="features"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Services</span>
                  </Link>
                  <Link
                    className="nav-item"
                    to="portfolio"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Portfolio</span>
                  </Link>

                  <Link
                    className="nav-item"
                    to="contact"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Contact us</span>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
          <section
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)),url(/images/banner/banner.webp)`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="py-36 lg:py-72 lg:pb-0 md:pb-8 w-full table relative bg-center bg-cover"
            id="home"
          >
            <div className="absolute inset-0"></div>
            <div className="container relative">
              <div
                className="grid lg:grid-cols-12 mt-0 md:grid-cols-2 gap-2"
                style={{ marginBottom: "100px" }}
              >
                <div className="lg:col-span-7">
                  <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-3 position-relative">
                    Let Us Optimize Your Space!
                  </h4>

                  <p className="text-white opacity-80 mb-0 max-w-2xl text-lg">
                    Implement our parking services today for efficient space
                    utilization and stress-free parking experiences.
                  </p>

                  <div
                    className="relative mt-10"
                    style={{ marginBottom: "250px" }}
                  >
                    <a
                      href="tel:9340012200"
                      className="btn mr-4 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white rounded-md me-1"
                    >
                      Reach us now
                    </a>
                    <Link
                       spy={true}
                       smooth={true}
                       duration={500}
                       to="about"
                      className="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md me-1"
                    >
                      Know About us
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 mt-8 md:mt-0">
                  <div
                    className=" dark:bg-slate-900 rounded-xl shadow md:p-10 p-6 lg:ms-10 z-10 relative"
                    style={{
                      background: "rgba( 255, 255, 255, 0.25 )",
                      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                      backdropFilter: "blur( 4px )",
                      webkitBackdropFilter: "blur( 4px )",
                      borderRadius: "10px",
                      border: "1px solid rgba( 255, 255, 255, 0.18 )",
                    }}
                  >
                    <h4 className="mb-5 font-medium text-2xl text-white">
                      Get your Quotation Now!
                    </h4>

                    <form>
                      <div className="grid grid-cols-1">
                        <div className="mb-5">
                          <label className="text-white"></label>
                          <input
                            name="name"
                            id="fName"
                            type="text"
                            className="form-input mt-2"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <label className="text-white"></label>
                          <input
                            name="email"
                            id="yEmail"
                            type="email"
                            className="form-input mt-2"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <label className="text-white"></label>
                          <input
                            name="number"
                            id="phNumber"
                            type="number"
                            className="form-input mt-2"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <select id="service" name="cars" style={{border: '1px solid #e5e7eb', borderRadius: '0.25rem', width: '100%', padding:'9px 0px'}}>
                          <option value="#">Select Service</option>
                            <option value="2 Post Hydraulic System">2 Post Hydraulic System</option>
                            <option value="4 Post Hydraulic System">4 Post Hydraulic System</option>
                            <option value="Puzzle Parking">Puzzle Parking</option>
                            <option value="Shuttle Stacker Parking">Shuttle Stacked Parking</option>
                            <option value="Tower Parking">Tower Parking</option>
                            <option value="Multilevel Stacked Rotary Parking">Multilevel Stacked Rotary Parking</option>
                            <option value="Bike Parking">Bike Parking</option>
                            <option value="Automated Storage And Retrieval System">Automated Storage And Retrieval System</option>
                            <option value="Elevated Car Lift">Elevated Car Lift</option>
                          </select>
                        </div>
                        <div className="mb-5">
                          <textarea
                            name="comments"
                            id="comments"
                            className="form-input textarea h-20"
                            placeholder="Regarding"
                            required
                          ></textarea>
                        </div>
                        <Link
                          to="#"
                          style={{
                            backgroundColor: "#e22b33",
                            border: "1px solid #e22b33",
                          }}
                          className="btn hover:bg-red-700 hover:border-red-700 text-white rounded-md w-full"
                        >
                          Submit
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* About section */}
          <About />

          {/* Service section */}
          <Services />
          {/* Portfolio section */}
          <Portfolio />
          <Clients />

          {/* Contact section */}
          <Contact />
          <FloatingCallButton />
          {/* Footer section */}
          <Footer />
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
