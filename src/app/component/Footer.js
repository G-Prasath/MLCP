import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import BackToTopButton from "./BackToTopButton";

export default function Footer() {
  return (
    <>

      {/*  Start Footer  */}
      <footer className="py-4" style={{background: '#2f2a60'}}>
        <div className="container">
          <div className="grid md:grid-cols-12 items-center">


            <div className="md:col-span-6 md:mt-0 mt-8">
              <div className="text-center">
                <p className="text-gray-400">
                  E STAR Engineers Private Limited 1997-{new Date().getFullYear()}
                  .
                </p>
              </div>
            </div>

            <div className="md:col-span-6 md:mt-0 mt-8">
              <ul className="list-none foot-icon md:text-end text-center">
                <li className="inline ms-1">
                  <a
                    href="https://www.linkedin.com/posts/e-star-engineers-pvt-ltd_parkingsystems-parkingtechnology-smartparking-activity-7171805412524978176-qk8t?utm_source=share&utm_medium=member_desktop"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600 text-gray-400 hover:text-white" style={{backgroundColor: 'black'}}
                  >
                    <Unicons.UilLinkedin width="17px" />
                  </a>
                </li>
                <li className="inline ms-1">
                  <a
                    href="https://www.facebook.com/estarengineerspvtltd/"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600 text-gray-400 hover:text-white" style={{backgroundColor: 'black'}}
                  >
                    <Unicons.UilFacebookF width="17px" />
                  </a>
                </li>
                {/* <li className="inline ms-1">
                  <a
                    href="javascript:;"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600 text-gray-400 hover:text-white" style={{backgroundColor: 'black'}}
                  >
                    <Unicons.UilTwitter width="17px" />
                  </a>
                </li> */}
                <li className="inline ms-1">
                  <a
                    href="https://www.instagram.com/estarengineerspvtltd/"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600 text-gray-400 hover:text-white" style={{backgroundColor: 'black'}}
                  >
                    <Unicons.UilInstagram width="17px" />
                  </a>
                </li>

                <li className="inline ms-1">
                  <a
                    href="https://www.youtube.com/@ESTARENGINEERS/videos"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600 text-gray-400 hover:text-white" style={{backgroundColor: 'black'}}
                  >
                    <Unicons.UilYoutube width="17px" />
                  </a>
                </li>
                {/* <li className="inline ms-1">
                  <a
                    href="javascript:;"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600 text-gray-400 hover:text-white" style={{backgroundColor: 'black'}}
                  >
                    <Unicons.UilGoogle width="17px" />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
<BackToTopButton />

    </>
  );
}
