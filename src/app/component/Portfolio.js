import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import Image from "next/image";

const images = [
  "/images/CLIENTS/1A.webp",
  "/images/CLIENTS/2a.webp",
  "/images/CLIENTS/3aa.webp",
  "/images/CLIENTS/4a.webp",
  "/images/CLIENTS/5.webp",
  "/images/CLIENTS/6.webp",
  "/images/CLIENTS/7.webp",
  "/images/CLIENTS/8.webp",
];

/**
 * Portfolio section
 */
export default function Portfolio() {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const handleCLick = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const projectList = [
    {
      image: "/images/CLIENTS/1A.webp",
      title: "4 Post Parking",
    },
    {
      image: "/images/CLIENTS/2a.webp",
      title: "2 Post Parking",
    },
    {
      image: "/images/CLIENTS/3aa.webp",
      title: "Tower Parking",
    },
    {
      image: "/images/CLIENTS/4a.webp",
      title: "Shuttle Stacker Parking",
    },
    {
      image: "/images/CLIENTS/5.webp",
      title: "Puzzle Parking",
    },
    {
      image: "/images/CLIENTS/6.webp",
      title: "Shuttle Stacker Parking",
    },
    {
      image: "/images/CLIENTS/7.webp",
      title: "ASRS",
    },
    {
      image: "/images/CLIENTS/8.webp",
      title: "Bike Parking",
    },
  ];
  return (
    <>
      {/* Project Start  */}
      <section
        className="relative md:py-24 py-16 active"
        id="portfolio"
        style={{backgroundColor: '#EFF8FF'}}
      >
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">

            <h3 className="mb-4 text-red-600 md:text-2xl text-xl font-medium">
              Our Projects
            </h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
            Optimizing urban parking infrastructure with our innovative multilevel car system, streamlining space usage and enhancing convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
            {projectList.map((item, index) => (
              <div
                className="relative rounded-md shadow-sm overflow-hidden group"
                key={index} 
              >
                <Image
                  src={item.image}
                  className="group-hover:origin-center group-hover:scale-110 group-hover:zoom-1 transition duration-500"
                  alt="Project Image"
                  width={0}
                  height={0}
                  onClick={() => handleCLick(index)}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", cursor: 'pointer' }} // optional
                />

                <div className="content">

                  <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                    <p
                      className="h6 text-md font-medium text-white hover:text-white-600 transition duration-500"
                    >
                      {item.title}
                    </p>
                    <p className="text-slate-100 tag mb-0">{item.subtext}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setOpen(false)}
              onMovePrevRequest={() =>
                setActiveIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setActiveIndex((photoIndex + 1) % images.length)
              }
              
            />
          )}
        </div>
      </section>
      {/* Project End  */}
      <section
        style={{ backgroundImage: `url(${"/images/banner/cta.jpg"})`,  backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
        className="py-24 w-full table relative bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl text-white font-medium">
              Planning to start your parking project now?
            </h3>

            <p className="text-white opacity-50 max-w-xl mx-auto text-justify">
            From sleek 2 Post and robust 4 Post Systems to innovative Puzzle and Tower options, we&lsquo;re here to turn your vision into reality. With expertise in Shuttle Stackers,From design to installation, our team is dedicated to delivering excellence at every step. Let&lsquo;s embark on this journey together, ensuring seamless parking solutions tailored to your requirements. Get in touch with us today and let&lsquo;s bring your parking project to life!
            </p>

            <div className="relative mt-10">
              <a
                href="tel:7550044048"
                className="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-md"
              >
                We got you covered
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
