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

export default function Certificates() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        className="bg-[#000325] px-6 py-12"
        data-aos="fade-left"
        data-aos-offset="50"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="max-w-4xl mx-auto gap-14 items-center flex-col md:flex-row">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">My Certificates</h2>
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
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Susmita Dey_Cert_Top Contributor_GSSoC2022.png"
                alt="image slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/SSOC Mentor Certificate.png"
                alt="image slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/FreyHacks Mentor certificate.png"
                alt="image slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/UI UX Workshop Certificate.png"
                alt="image slide 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/C++ Basics_page-0001.jpg"
                alt="image slide 5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Susmita certificate(CSI Robots, Bristol Robotics Lab, UK).png"
                alt="image slide 6"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Certificate Eddie Jaoude Course.png"
                alt="image slide 7"
                width={500}
                height={700}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Holiday Hacks Certificate.png"
                alt="image slide 8"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Hackofiesta Participation Certificate.png"
                alt="image slide 9"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Certificate for SUSMITA DEY for _Feedback Form of Internatio..._.png"
                alt="image slide 10"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Code4Battle GFG.png"
                alt="image slide 11"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/CodingNinjasPythonCertificate.png"
                alt="image slide 12"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Getting Started With AI - IBM_page-0001.jpg"
                alt="image slide 13"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Data Scrience IBM_page-0001.jpg"
                alt="image slide 14"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/ML Univ of London_page-0001.jpg"
                alt="image slide 15"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/HGTPI certificate.jpg"
                alt="image slide 16"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Susmita Dey Certificate for VIT Python Workshop.png"
                alt="image slide 17"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/ShapeAI Community.jpg"
                alt="image slide 18"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/THM-PSHELNCNPK.png"
                alt="image slide 19"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/THM-NXSBPBDZFT.png"
                alt="image slide 20"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
