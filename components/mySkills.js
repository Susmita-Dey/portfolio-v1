import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    // <section className="bg-gradient-to-r from-green-400 to-cyan-400 px-6 py-12">
    <section
      className="bg-[#000325] text-center text-white px-6 py-12"
      id="skills"
    >
      <div className="w-screen mx-auto flex gap-14 items-center flex-col md:flex-row">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in"
        >
          <h2 className="text-2xl font-bold mb-8 text-cyan-200">My Skills</h2>
          <div
            className="grid h-50 place-items-center skills"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <div className="grid grid-cols-3 grid-flow-row gap-6">
              <div className="grid grid-cols-5 grid-flow-row gap-4 place-content-center">
                <div className="bg-white p-2 my-3 mx-auto rounded">
                  <img
                    className="h-full w-full"
                    src="https://img.icons8.com/color/48/000000/html-5.png"
                    alt="html5"
                  />
                </div>
                <div className="bg-white p-2 my-3 mx-auto rounded">
                  <img
                    src="https://img.icons8.com/color/48/000000/css3.png"
                    alt="css3"
                  />
                </div>
                <div className="bg-white p-2 my-3 mx-auto rounded">
                  <img
                    src="https://img.icons8.com/color/48/000000/bootstrap.png"
                    alt="bootstrap"
                  />
                </div>
                <div className="bg-white p-2 my-3 mx-auto rounded">
                  <img
                    src="https://img.icons8.com/fluency/48/000000/tailwind_css.png"
                    alt="tailwind"
                  />
                </div>
                <div className="bg-white p-2 my-3 mx-auto rounded">
                  <img
                    src="https://img.icons8.com/color/48/000000/javascript.png"
                    alt="js"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-row gap-6">
              <div className="grid grid-cols-5 grid-flow-row gap-3">
                <img
                  className="bg-white p-2 my-3 mx-auto rounded"
                  src="https://img.icons8.com/color/48/000000/git.png"
                  alt="git"
                />
                <img
                  className="bg-white p-2 my-3 mx-auto rounded"
                  src="https://img.icons8.com/ios-filled/48/000000/github.png"
                  alt="github"
                />
                <img
                  className="bg-white p-2 my-3 mx-auto rounded"
                  src="https://img.icons8.com/plasticine/48/000000/react.png"
                  alt="reactjs"
                />
                <img
                  className="bg-white p-2 my-3 mx-auto rounded"
                  src="https://img.icons8.com/color/48/000000/nodejs.png"
                  alt="nodejs"
                />
                <img
                  className="bg-white p-2 my-3 mx-auto rounded"
                  src="https://img.icons8.com/color/48/000000/mongodb.png"
                  alt="mongodb"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-row gap-6">
              <div className="grid grid-cols-5 grid-flow-row gap-3">
                <img
                  className="bg-white p-2 my-3 mx-auto rounded"
                  src="https://img.icons8.com/ios/48/000000/express-js.png"
                  alt="express-js"
                />
                <img
                  className="bg-white p-2 my-3 mx-auto rounded"
                  src="https://img.icons8.com/nolan/48/java-coffee-cup-logo.png"
                  alt="java"
                />
                <img
                  className="bg-white p-2 my-3 mx-auto rounded"
                  src="https://img.icons8.com/fluency/48/000000/python.png"
                  alt="python"
                />
                <img
                  className="bg-white p-2 my-3 mx-auto rounded"
                  src="https://img.icons8.com/color/48/000000/figma.png"
                  alt="figma"
                />
                <img
                  className="bg-white p-2 my-3 mx-auto rounded"
                  src="https://img.icons8.com/cute-clipart/48/000000/canva-app.png"
                  alt="canva"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
