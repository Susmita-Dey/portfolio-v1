import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { InlineWidget } from "react-calendly";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="bg-[#000325] text-white px-6 py-12" id="contact">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300">
            Schedule a Call
          </h2>
          <div
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="500"
            data-aos-easing="ease-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <InlineWidget
              url="https://calendly.com/susmitadeyofficial/30min"
              styles={{
                height: "1030px",
              }}
              prefill={{
                date: new Date(Date.now() + 86400000),
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
