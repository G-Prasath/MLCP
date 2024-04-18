import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  '../assets/css/styles.css'

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import Image from "next/image";
// const isMobile = window.innerWidth < 600;

export default function Clients() {
  
  
  return (
    <>
         <h3 className="mb-10 mt-20 md:text-2xl text-xl font-medium dark:text-white text-center">Our Prestigious Clients </h3>
    {/* Desktop */}
      <Swiper 
        slidesPerView= {3}
        spaceBetween={30}
        freeMode={true}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper options"
        
      >
        

        <SwiperSlide>
        <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
            className="w-full"
              src="/images/list/img-2.png"
              width={500}
              height={250}
              alt="Client Image"
              style={{height: '250px', width: 'auto'}}

            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>THANGAM JEWELLERS</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">TIRUPPUR, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">126 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-7.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Anantham Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">RAJAPALAYAM, TAMIL NADU</p>
              <p className="text-gray-700 text-base">TOWER CAR PARKING</p>
              <p className="text-gray-700 text-base">21 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-9.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Kasi Theatre</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">JAFFERKHANPET, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 2 Post Dependent Stacker</p>
              <p className="text-gray-700 text-base">48 Cars</p>
              </div>
            </div>
 
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
            className="w-full"
              src="/images/img-1.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}

              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">T-NAGAR, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">70 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-8.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Kalyan Jewellers</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">TRICHY, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 4 POST PIT PARKING</p>
              <p className="text-gray-700 text-base">4 UNITS</p>
              </div>
            </div>

          </div>
        </SwiperSlide>




        <SwiperSlide className="mb-10">
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/img-10.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Land Mark</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">CHENNAI, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 4 POST PIT PARKING</p>
              <p className="text-gray-700 text-base">10 UNITS</p>
              </div>
            </div>
 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/img-3.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">CHROMPET, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">126 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/img-24a.webp"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>V &amp; B Hospital</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">NULL</p>
              <p className="text-gray-700 text-base">1+1 2 POST</p>
              <p className="text-gray-700 text-base">30 UNITS</p>
              </div>
            </div>
 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/Img-11.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>HASPEX ELEVATOR</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">THIRUVANANTHAPURAM, KERALA</p>
              <p className="text-gray-700 text-base">1+1 2 POST PIT PARKING</p>
              <p className="text-gray-700 text-base">7 UNITS</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-4.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>

              <p className="text-gray-700 text-base">VELACHERY, TAMIL NADU</p>
              <p className="text-gray-700 text-base">PIT PUZZLE PARKING</p>
              <p className="text-gray-700 text-base">72 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/img-23.jpg"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto' ,border: '1px solid #eee'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Jilla Hospital</div>
              <div style={{backgroundColor: '#eee', padding: '5px 10px' , borderRadius: '10px'}}>

              <div style={{backgroundColor: '#eee', padding: '5px 10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">Palakkad, KERALA</p>
              <p className="text-gray-700 text-base">PIT PUZZLE PARKING</p>
              <p className="text-gray-700 text-base">12 Cars</p>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-12.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Thirussur Corporation</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">THIRUSSUR, KERALA</p>
              <p className="text-gray-700 text-base">TOWER PARKING</p>
              <p className="text-gray-700 text-base">24 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/Img-13.jpg"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Equitas Hospital</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">SEMBAKKAM, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING </p>
              <p className="text-gray-700 text-base">29 CARS</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/iMG-6.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">PONDICHERRY</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">40 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/img-14.jpg"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Rainbow Hospital</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">BENGALURU, KARNATAKA</p>
              <p className="text-gray-700 text-base">PUZZLE PARKING</p>
              <p className="text-gray-700 text-base">29 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-15.webp"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Dev Automobiles</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">CHENNAI, TAMIL NADU</p>
              <p className="text-gray-700 text-base">PREMIUM CAR LIFT & PUZZLE PARKING</p>
              <p className="text-gray-700 text-base">1 CAR & 5CARS</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-22.jpg"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">NAGERCOIL, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">28 CARS</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-16.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>BNR Construction</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">KOYAMBEDU, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 2POST PARKING</p>
              <p className="text-gray-700 text-base">30 UNITS</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-17.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Novel Office IT Park</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">HOSUR, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 2 POST DEPENDENT STACKER</p>
              <p className="text-gray-700 text-base">162 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-5.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">KUMBAKKONAM, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING [2 LEVELS ]</p>
              <p className="text-gray-700 text-base">48 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-18.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Aachi Masala</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">CHENNAI, TAMIL NADU</p>
              <p className="text-gray-700 text-base">TOWER PARKING</p>
              <p className="text-gray-700 text-base">14 Cars</p>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-21.jpg"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>VGN Notting Hill</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">NUNGAMBAKKAM, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">280 Cars</p>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-19.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>AMRITSAR SMART CITY</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">KAIRON MARKET, AMRITSAR, PUNJAB</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">352 CARS</p>
              </div>
            </div>
 
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-20.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">DINDIGUL, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 2 Post Dependent Stacker </p>
              <p className="text-gray-700 text-base">58 Cars</p>
              </div>
            </div>
 
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
            className="w-full"
              src="/images/list/img-25a.webp"
              width={500}
              height={250}
              alt="Client Image"
              style={{height: '250px', width: 'auto'}}

            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>CASA GRAND</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">CHENNAI, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 2 POST PARKING</p>
              <p className="text-gray-700 text-base">2 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

          {/* Mobile */}
          <Swiper 
        slidesPerView= {1}
        spaceBetween={30}
        freeMode={true}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper options mobile"
        
      >
        

        <SwiperSlide>
        <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
            className="w-full"
              src="/images/list/img-2.png"
              width={500}
              height={250}
              alt="Client Image"
              style={{height: '250px', width: 'auto'}}

            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>THANGAM JEWELLERS</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">TIRUPPUR, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">126 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-7.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Anantham Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">RAJAPALAYAM, TAMIL NADU</p>
              <p className="text-gray-700 text-base">TOWER CAR PARKING</p>
              <p className="text-gray-700 text-base">21 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-9.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Kasi Theatre</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">JAFFERKHANPET, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 2 Post Dependent Stacker</p>
              <p className="text-gray-700 text-base">48 Cars</p>
              </div>
            </div>
 
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
            className="w-full"
              src="/images/img-1.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}

              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">T-NAGAR, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">70 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-8.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Kalyan Jewellers</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">TRICHY, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 4 POST PIT PARKING</p>
              <p className="text-gray-700 text-base">4 UNITS</p>
              </div>
            </div>

          </div>
        </SwiperSlide>




        <SwiperSlide className="mb-10">
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/img-10.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Land Mark</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">CHENNAI, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 4 POST PIT PARKING</p>
              <p className="text-gray-700 text-base">10 Units</p>
              </div>
            </div>
 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/img-3.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">CHROMPET, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">126 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/img-24a.webp"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>V &amp; B Hospital</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">NULL</p>
              <p className="text-gray-700 text-base">1+1 2 POST</p>
              <p className="text-gray-700 text-base">30 UNITS</p>
              </div>
            </div>
 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/Img-11.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>HASPEX ELEVATOR</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">THIRUVANANTHAPURAM, KERALA</p>
              <p className="text-gray-700 text-base">1+1 2 POST PIT PARKING</p>
              <p className="text-gray-700 text-base">7 UNITS</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-4.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>

              <p className="text-gray-700 text-base">VELACHERY, TAMIL NADU</p>
              <p className="text-gray-700 text-base">PIT PUZZLE PARKING</p>
              <p className="text-gray-700 text-base">72 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/img-23.jpg"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto' ,border: '1px solid #eee'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Jilla Hospital</div>
              <div style={{backgroundColor: '#eee', padding: '5px 10px' , borderRadius: '10px'}}>

              <div style={{backgroundColor: '#eee', padding: '5px 10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">Palakkad, KERALA</p>
              <p className="text-gray-700 text-base">PIT PUZZLE PARKING</p>
              <p className="text-gray-700 text-base">12 Cars</p>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-12.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Thirussur Corporation</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">THIRUSSUR, KERALA</p>
              <p className="text-gray-700 text-base">TOWER PARKING</p>
              <p className="text-gray-700 text-base">24 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/Img-13.jpg"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Equitas Hospital</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">SEMBAKKAM, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING </p>
              <p className="text-gray-700 text-base">29 CARS</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/iMG-6.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">PONDICHERRY</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">40 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/img-14.jpg"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Rainbow Hospital</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">CHENNAI, TAMIL NADU</p>
              <p className="text-gray-700 text-base">PUZZLE PARKING</p>
              <p className="text-gray-700 text-base">29 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-15.webp"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Dev Automobiles</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">CHENNAI, TAMIL NADU</p>
              <p className="text-gray-700 text-base">PREMIUM CAR LIFT & PUZZLE PARKING</p>
              <p className="text-gray-700 text-base">1 CAR & 5CARS</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-22.jpg"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">NAGERCOIL, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">28 CARS</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-16.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>BNR Construction</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">KOYAMBEDU, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 2POST PARKING</p>
              <p className="text-gray-700 text-base">30 UNITS</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-17.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Novel Office IT Park</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">HOSUR, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 2 POST DEPENDENT STACKER</p>
              <p className="text-gray-700 text-base">162 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-5.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">KUMBAKKONAM, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING [2 LEVELS ]</p>
              <p className="text-gray-700 text-base">48 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-18.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>Aachi Masala</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">CHENNAI, TAMIL NADU</p>
              <p className="text-gray-700 text-base">TOWER PARKING</p>
              <p className="text-gray-700 text-base">14 Cars</p>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-21.jpg"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>VGN Notting Hill</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">NUNGAMBAKKAM, TAMIL NADU</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">280 Cars</p>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-19.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>AMRITSAR SMART CITY</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">KAIRON MARKET, AMRITSAR, PUNJAB</p>
              <p className="text-gray-700 text-base">SHUTTLE STACKER PARKING</p>
              <p className="text-gray-700 text-base">352 CARS</p>
              </div>
            </div>
 
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
          <div className="max-w-sm overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
              className="w-full"
              src="/images/list/Img-20.png"
              width={500}
              height={250}
              style={{height: '250px', width: 'auto'}}
              alt="Client Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>The Chennai Silks</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">DINDIGUL, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 2 Post Dependent Stacker </p>
              <p className="text-gray-700 text-base">58 Cars</p>
              </div>
            </div>
 
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="max-w-sm  overflow-hidden shadow-lg" style={{borderRadius: '12px'}}>
            <Image
            className="w-full"
              src="/images/list/img-25a.wepb"
              width={500}
              height={250}
              alt="Client Image"
              style={{height: '250px', width: 'auto'}}

            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2" style={{paddingLeft: '10px'}}>CASA GRAND</div>
              <div style={{backgroundColor: '#eee', padding: '10px' , borderRadius: '10px'}}>
              <p className="text-gray-700 text-base">CHENNAI, TAMIL NADU</p>
              <p className="text-gray-700 text-base">1+1 2 POST PARKING</p>
              <p className="text-gray-700 text-base">2 Cars</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
