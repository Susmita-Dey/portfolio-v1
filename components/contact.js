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
      <section
        className="bg-[#000325] text-white px-6 py-12"
        id="contact"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1300"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl font-bold mb-6">
            Schedule a Call
          </h2>
          <InlineWidget
            url="https://calendly.com/susmitadeyofficial/30min"
            styles={{
              height: "1030px",
            }}
            prefill={{
              email: "test@test.com",
              firstName: "Jon",
              lastName: "Snow",
              name: "Jon Snow",
              guests: ["janedoe@example.com", "johndoe@example.com"],
              customAnswers: {
                a1: "a1",
                a2: "a2",
                a3: "a3",
              },
              date: new Date(Date.now() + 86400000),
            }}
          />
        </div>
      </section>
    </>
  );
}
