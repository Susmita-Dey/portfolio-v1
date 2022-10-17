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
    <section className="bg-[#00023b] text-white px-6 py-12" id="about">
      <div className="flex max-w-4xl mx-auto py-12 gap-10">
        <div
          className="rounded-xl"
          data-aos="zoom-out"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
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
          data-aos-easing="ease-in-out"
        >
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <p className="text-lg font-normal mb-6">
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
          </p>
        </div>
        {/* <div
          className="flex flex-col"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="flex">
            <img
              src="https://img.icons8.com/color/48/000000/html-5.png"
              alt="html5"
            />
            <img
              src="https://img.icons8.com/color/48/000000/css3.png"
              alt="css3"
            />
            <img
              src="https://img.icons8.com/color/48/000000/bootstrap.png"
              alt="bootstrap"
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/tailwind_css.png"
              alt="tailwind"
            />
            <img
              src="https://img.icons8.com/color/48/000000/javascript.png"
              alt="js"
            />
          </div>
          <div className="flex">
            <img
              src="https://img.icons8.com/color/48/000000/git.png"
              alt="git"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt="github"
            />
            <img
              src="https://img.icons8.com/plasticine/100/000000/react.png"
              alt="reactjs"
            />
            <img
              src="https://img.icons8.com/color/48/000000/nodejs.png"
              alt="nodejs"
            />
            <img
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt="mongodb"
            />
          </div>
          <div className="flex">
            <img
              src="https://img.icons8.com/ios/50/000000/express-js.png"
              alt="express-js"
            />
            <img
              src="https://img.icons8.com/nolan/64/java-coffee-cup-logo.png"
              alt="java"
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/python.png"
              alt="python"
            />
            <img
              src="https://img.icons8.com/color/48/000000/figma.png"
              alt="figma"
            />
            <img
              src="https://img.icons8.com/cute-clipart/64/000000/canva-app.png"
              alt="canva"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
