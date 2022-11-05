import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Community() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="text-white px-6 py-12" id="about">
      <div className="max-w-4xl mx-auto flex gap-14 items-center flex-col md:flex-row">
        <div
          className="rounded-xl"
          // data-aos="fade-right"
          // data-aos-offset="200"
          // data-aos-duration="2000"
          // data-aos-easing="ease-in"
        >
          <Image
            src="/Profile Photo (1).png"
            alt="my-photo"
            width={540}
            height={540}
            className="rounded-3xl"
            loading="eager"
            priority
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-delay="10"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-500">
            Giving Back to the Community
          </h2>
          <div className="text-lg font-normal mb-6">Hello</div>
        </div>
      </div>
    </section>
  );
}
