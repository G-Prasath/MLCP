import React from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function Contact() {
  return (
    <>
      {/* Start */}
      <section
        className="relative md:py-24 py-16"
        id="contact"
        style={{ backgroundColor: "#eff8ff" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Get In Touch !
            </h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              Ready to transform your parking experience? Reach out to us today
              and let&lsquo;s create tailored solutions that meet your needs
              perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6">
            <div className="lg:col-span-8">
              <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                <form>
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-input-two"
                        placeholder="Name"
                        required
                      />
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-input-two"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>


                  <div className="grid lg:grid-cols-12 lg:gap-6">
                  <div className="lg:col-span-6">
                  <div className="mb-5">
                      <input
                        name="Contact"
                        id="subject"
                        type="number"
                        className="form-input-two"
                        placeholder="Contact Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-6">
                  <div className="mb-5">
                      <select id="service" name="cars" style={{border: '1px solid #e5e7eb', borderRadius: '0.25rem', width: '100%', padding:'9px 0px'}}>
                      <option value="2 Post Hydraulic System">Select</option>
                        <option value="2 Post Hydraulic System">2 Post Hydraulic System</option>
                        <option value="4 Post Hydraulic System">4 Post Hydraulic System</option>
                        <option value="Puzzle Parking">Puzzle Parking</option>
                        <option value="Shuttle Stacked Parking">Shuttle Stacked Parking</option>
                        <option value="Tower Parking">Tower Parking</option>
                        <option value="Multilevel Stacked Rotary Parking">
                          Multilevel Stacked Rotary Parking
                        </option>
                        <option value="Bike Parking">Bike Parking</option>
                        <option value="Automated Storage And Retrieval System">
                          Automated Storage And Retrieval System
                        </option>
                        <option value="Elevated Car Lift">Elevated Car Lift</option>
                      </select>
                      
                    </div>
                  </div>

                  </div>
                  <div className="grid grid-cols-1">

                    <div className="mb-5">
                      <textarea
                        name="comments"
                        id="comments"
                        className="form-input-two textarea h-28"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md h-11 justify-center flex items-center"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div
                className="lg:ms-8 bg-white p-10 shadow"
                style={{ borderRadius: "0.375rem" }}
              >
                <div className="flex">
                  <div className="icons text-center mx-auto">
                    <Unicons.UilMobileAndroid
                      className="rounded text-2xl mb-0"
                      style={{ color: "#393185" }}
                    />
                  </div>

                  <div className="flex-1 ms-6">
                    <h5
                      className="text-lg mb-2 font-medium"
                      style={{ color: "#393185" }}
                    >
                      Phone
                    </h5>
                    <a href="tel:09340012202" className="text-slate-400">
                      +919340012202
                    </a>
                  </div>
                </div>

                <div className="flex mt-4">
                  <div className="icons text-center mx-auto">
                    <Unicons.UilMessage
                      className="rounded text-2xl mb-0"
                      style={{ color: "#393185" }}
                    />
                  </div>

                  <div className="flex-1 ms-6">
                    <h5
                      className="text-lg mb-2 font-medium"
                      style={{ color: "#393185" }}
                    >
                      Email
                    </h5>
                    <a
                      href="mailto:carparking@estar.in"
                      className="text-slate-400"
                    >
                      carparking@estar.in
                    </a>
                  </div>
                </div>

                <div className="flex mt-4">
                  <div className="icons text-center mx-auto">
                    <Unicons.UilLocationPinAlt
                      className="rounded text-2xl mb-0"
                      style={{ color: "#393185" }}
                    />
                  </div>

                  <div className="flex-1 ms-6">
                    <h5
                      className="text-lg mb-2 font-medium"
                      style={{ color: "#393185" }}
                    >
                      Location
                    </h5>
                    <p className="text-slate-400 mb-2">26/2, Taylor&lsquo;s Estate II Street, Kodambakkam, Chennai-600024.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
