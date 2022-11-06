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
        data-aos-once="true"
      >
        <div className="max-w-4xl mx-auto gap-14 items-center flex-col md:flex-row">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white">
              Certificates & Awards 🏆
            </h2>
            <p className="my-4 text-xl font-medium text-white">
              Apart from my achievements, I worked for the community more to
              help them.
            </p>
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
                src="/certificates/Susmita Dey_Cert_Top Contributor_GSSoC2022.png"
                alt="image slide 1"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/SSOC Mentor Certificate.png"
                alt="image slide 2"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/FreyHacks Mentor certificate.png"
                alt="image slide 3"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/TechTogether Microsoft Challenge.png"
                alt="image slide 4"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/UI UX Workshop Certificate.png"
                alt="image slide 4"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/AutumnHacks.jpg"
                alt="image slide 4"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/Novu Swag.jpeg"
                alt="image slide 5"
                width={940}
                height={640}
                priority
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
                alt="image slide 6"
                width={700}
                height={700}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/Hashnode Swag.jpeg"
                alt="image slide 7"
                width={700}
                height={700}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/SSOC Admin.jpeg"
                alt="image slide 8"
                width={700}
                height={700}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/SSOC Mentor.jpeg"
                alt="image slide 9"
                width={700}
                height={700}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/Postman - Postman Student Expert - 2022-06-25.png"
                alt="image slide 10"
                width={700}
                height={700}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/HOW TO GET PLACED IN BADGE.jpg"
                alt="image slide 11"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/gifts/Hack2Skill Volunteer.jpeg"
                alt="image slide 12"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/C++ Basics_page-0001.jpg"
                alt="image slide 13"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Susmita certificate(CSI Robots, Bristol Robotics Lab, UK).png"
                alt="image slide 14"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Certificate Eddie Jaoude Course.png"
                alt="image slide 15"
                width={500}
                height={700}
                priority
              />
            </SwiperSlide> */}
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Holiday Hacks Certificate.png"
                alt="image slide 16"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Hackofiesta Participation Certificate.png"
                alt="image slide 9"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Certificate for SUSMITA DEY for _Feedback Form of Internatio..._.png"
                alt="image slide 10"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Code4Battle GFG.png"
                alt="image slide 11"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/CodingNinjasPythonCertificate.png"
                alt="image slide 12"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Getting Started With AI - IBM_page-0001.jpg"
                alt="image slide 13"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Data Scrience IBM_page-0001.jpg"
                alt="image slide 14"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/ML Univ of London_page-0001.jpg"
                alt="image slide 15"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/HGTPI certificate.jpg"
                alt="image slide 16"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/Susmita Dey Certificate for VIT Python Workshop.png"
                alt="image slide 17"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/ShapeAI Community.jpg"
                alt="image slide 18"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/THM-PSHELNCNPK.png"
                alt="image slide 19"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="object-fit w-full h-1/2 md:object-fill md:h-96"
                src="/certificates/THM-NXSBPBDZFT.png"
                alt="image slide 20"
                width={940}
                height={640}
                priority
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
