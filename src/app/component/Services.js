import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";

export default function Services() {
  const team = [
    {
      title: "2 Post Hydraulic System",
      image: "/images/services/2-POST.webp",
      subtext:
        "1+1 2 Post Hydraulic Parking System exlusively suitable for indivuduals and flats proprietors.",
    },
    {
      title: "4 Post Hydraulic System",
      image: "/images/services/4-POST.webp",
      subtext:
        "1+1 4 Post Hydraulic Parking System exlusively suitable for SUVs and MPV user in Urban areas.",
    },
    {
      title: "Puzzle Parking",
      image: "/images/services/PUZZLE-PARKING.webp",
      subtext:
        "Puzzle Parking System is suitable for Public areas such as Shopping center, Metro, Theaters etc.",
    },
    {
      title: "Shuttle Stacker Parking",
      image: "/images/services/SS-PARKING.webp",
      subtext:
        "It is best suitable for basement and outdoor parking. It is Robust and independent automated.",
    },
    {
      title: "Tower Parking",
      image: "/images/services/TOWER-PARKING.webp",
      subtext:
        "Tower Parking System is provides multi level floor parking for public areas having space constraints.",
    },

    {
      title: "Multilevel Stacked Rotary Parking",
      image: "/images/services/car_lift.webp",
      subtext:
        "Vertical & Horizontal Rotary Car Parking systems provides capability of parking up to 16 cars in space of 3 cars.",
    },
    {
      title: "Bike Parking",
      image: "/images/services/BIKE-PARKING.webp",
      subtext:
        "It is exclusively for Flats, Appartments, Office areas for long parking hours.",
    },
    {
      title: "Automated Storage And Retrieval System",
      image: "/images/services/asrss.webp",
      subtext:
        "It is most helpful in Storage yards, Warehouse etc to retrieve goods.",
    },
    {
      title: "Car Elevator",
      image: "/images/services/carlift.webp",
      subtext:
        "It is most helpful in Storage yards, Warehouse etc to retrieve goods.",
    },
  ];

  return (
    <>
      {/* Start */}
      <section id="features" className="relative md:py-24 py-16">
        <div className="container lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 pb-8 items-center">
            <div>
              {/* <h6 className="text-red-600 text-base font-medium uppercase mb-2">
                What We Do ?
              </h6> */}
              <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white md:mb-0">
                Perfect Solution For Your Parking Needs
              </h3>
              <p
                className="text-slate-400 dark:text-slate-300 max-w-xl"
                style={{ textAlign: "justify" }}
              >
                Discover the ideal solution for your parking needs. From
                innovative designs to reliable implementation, we provide
                tailored solutions that ensure convenience and efficiency for
                you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {team.map((item, key) => {
              const Icon = item.Icon;
              return (
                <div
                  key={key}
                  className={`features p-6 ${
                    key % 2 === 0
                      ? "shadow-xl shadow-slate-400 dark:shadow-slate-800"
                      : "shadow-xl shadow-slate-400 dark:shadow-slate-800"
                  } transition duration-500 rounded-xl mt-8`}
                >
                  <Image
                    src={item.image}
                    alt="Services Image"
                    height={250}
                    width={500}
                    style={{ borderRadius: "10px", border: "0.5px solid #ccc" }}
                  />
                  <div className="content mt-7">
                    <p
                      className="text-lg hover:text-red-600 dark:text-white dark:hover:text-red-600 transition-all duration-500 ease-in-out font-medium"
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-slate-400 mt-3"
                      style={{ textAlign: "justify" }}
                    >
                      {item.subtext}
                    </p>

                    <a
                      href="#contact"
                      className="mt-5 inline-flex  btn btn-link hover:text-red-600 dark:hover:text-red-600 after:bg-red-600 dark:text-white transition duration-500"
                    >
                      <span>Request</span>
                      <Unicons.UilArrowRight width="16px" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
