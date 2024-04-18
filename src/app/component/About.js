import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

export default function About() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section
        className="relative md:py-24 py-16  dark:bg-slate-800"
        id="about" style={{backgroundColor: '#EFF8FF'}}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src={"/images/about1.webp"}
                  className="rounded shadow-lg relative"
                  alt="About"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // optional
                />
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                {/* <h6 className="text-red-600 text-base font-medium uppercase mb-2">
                  About Us
                </h6> */}
                <h3 className="mb-4 md:text-2xl text-xl text-red-600  font-medium">
                  About Us!
                </h3>

                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto text-justify">
                E STAR Engineers Private Limited is a pioneer in Design, Manufacturing and commissioning of Automatic Multi Level Car Parking , Bike Parking, Automated Storage And Retrieval systems. We are an Engineering Based Company having vast experience in Engineering Design and Consultancy Services.
                </p>
                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto text-justify">
                 
                </p>
                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto text-justify mt-4">
                We specialize in the design, manufacturing, erection, and commissioning of diverse car parking systems. Our comprehensive approach ensures excellence at every stage, from conceptualization to final execution. We additionally offer superior post-installation services.</p>

                <div className="relative mt-10">
                  <Link
                      spy={true}
                      smooth={true}
                      duration={250}
                      to="portfolio"
                    style={{backgroundColor: '#3d3487', border: '1px solid #3d3487'}}
                    className="btn  hover:bg-blue-800  text-white rounded-md"
                  >
                    View Portfolio
                  </Link>
                   <a
                      href="https://youtu.be/nrbdUQBu_gM?si=kLy1nWe9Or3Ea1Na"
                      target="_blank"
                      className="btn ml-5 btn-icon btn-lg bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-full lightbox"
                    >
                      <i className="mdi mdi-play text-xl align-middle"></i>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End --> */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="S_CGed6E610"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
