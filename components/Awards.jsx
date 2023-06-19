import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import Image from "next/image";

export default function Awards() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        className="bg-[#000325] px-6 py-12"
        data-aos="fade-right"
        data-aos-offset="50"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="max-w-4xl mx-auto gap-14 items-center flex-col md:flex-row">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Swags and Rewards 🏆
            </h2>
          </div>
          <Swiper
            style={{
              "--swiper-navigation-color": "#000325",
              "--swiper-pagination-color": "#000325",
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/Novu Swag.jpeg"
                alt="image slide 1"
                width={1000}
                height={700}
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/Holopin Badge Hacktoberfest 2022.png"
                alt="image slide 2"
                width={1500}
                height={700}
              />
            </SwiperSlide> */}
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/GitHub shirt.jpeg"
                alt="image slide 3"
                width={700}
                height={700}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/Hashnode Swag.jpeg"
                alt="image slide 4"
                width={700}
                height={700}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/SSOC Admin.jpeg"
                alt="image slide 5"
                width={700}
                height={700}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/SSOC Mentor.jpeg"
                alt="image slide 6"
                width={700}
                height={700}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/Postman - Postman Student Expert - 2022-06-25.png"
                alt="image slide 7"
                width={700}
                height={700}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/HOW TO GET PLACED IN BADGE.jpg"
                alt="image slide 8"
                width={700}
                height={700}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/Hack2Skill Volunteer.jpeg"
                alt="image slide 9"
                width={1000}
                height={700}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
