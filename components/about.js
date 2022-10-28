import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    // <section className="bg-gradient-to-r from-green-400 to-cyan-400 px-6 py-12">
    <section className="bg-[#000325] text-white px-6 py-12" id="about">
      <div className="max-w-4xl mx-auto flex gap-14 items-center flex-col md:flex-row">
        <div
          className="rounded-xl"
          data-aos="zoom-out"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in"
        >
          <Image
            src="/Profile Photo (1).png"
            alt="my-photo"
            width="540"
            height="540"
            className="rounded-3xl"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in"
        >
          <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-500">About Me</h2>
          <div className="text-lg font-normal mb-6">
            <ul>
              <li className="mb-2">Age: 19</li>
              <li className="mb-2">
                <strong>School:</strong>
                <br /> Convent of Jesus and Mary
              </li>
              <li className="mb-2">
                <strong>College:</strong>
                <br /> Kalyani Mahavidyalaya
              </li>
              <li className="mb-2">
                <strong>Areas of interest:</strong>
                <br /> Web Development, Open Source, Hackathons, Web3, UI/UX
              </li>
              <li className="mb-2">
                <strong>Hobbies:</strong>
                <br /> Singing, Poetry, Reading Stories, Graphic Designing
              </li>
              <li className="mb-2">
                <strong>Services:</strong>
                <br /> Web Development, Graphic Design, UI/UX Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
