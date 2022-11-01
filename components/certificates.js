import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Parallax } from "swiper";
import Image from "next/image";

export default function SliderComponent() {
  return (
    <>
      <section className="bg-[#000325] text-white px-6 py-12" id="about">
        <div className="max-w-4xl mx-auto flex gap-14 items-center flex-col md:flex-row">
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
            <SwiperSlide title="Subtitle">
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Susmita Dey_Cert_Top Contributor_GSSoC2022.png"
                alt="image slide 1"
                width={100}
                height={100}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                alt="image slide 2"
                width={100}
                height={100}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                alt="image slide 3"
                width={100}
                height={100}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
