import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
// import Link from "next/link";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="bg-[#000325] text-white px-6 py-12" id="contact">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-col md:flex-row"
            // data-aos="fade-up"
            // data-aos-offset="50"
            // data-aos-duration="500"
            // data-aos-easing="ease-in"
            // data-aos-mirror="true"
            // data-aos-once="false"
            // data-aos-anchor-placement="top-center"
          >
            <div className="flex mx-12">
              <Image
                src="https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="girl-coding"
                width={580}
                height={680}
                // layout="responsive"
                priority
              />
            </div>
            <div>
              <div className="container flex flex-col">
                <div className="flex flex-col mx-auto my-8">
                  <h2 className="text-center text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300">
                    Contact Me
                  </h2>
                  <p>Feel free to reach out to me by filling this form.</p>
                  <p>
                    Are you bored of filling forms? 🤔 <br /> Shoot an{" "}
                    <a
                      href="mailto:susmitadey475@gmail.com"
                      className="text-cyan-300"
                    >
                      email
                    </a>{" "}
                    directly or{" "}
                    <a
                      href="https://calendly.com/susmitadeyofficial/30min"
                      target="_blank"
                      className="text-cyan-300"
                    >
                      schedule a call.
                    </a>
                  </p>
                </div>

                <form action="https://formspree.io/f/mvoygqdg" method="POST">
                  <div className="my-3 flex flex-col">
                    <label htmlFor="name" className="mb-3 font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="name p-3 rounded-xl"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="my-3 flex flex-col">
                    <label htmlFor="email" className="mb-3 font-semibold">
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="email p-3 rounded-xl"
                      placeholder="Email id"
                      required
                    />
                  </div>

                  <div className="my-3 flex flex-col">
                    <label htmlFor="subject" className="mb-3 font-semibold">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="subject p-4 rounded-xl"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="my-3 flex flex-col">
                    <label htmlFor="message" className="mb-3 font-semibold">
                      Message
                    </label>
                    <textarea
                      type="text"
                      name="suggestion"
                      className="suggestion p-3 rounded-xl"
                      placeholder="Your Message"
                      required
                    />
                  </div>

                  <div className="text-center my-3">
                    {/* <Link href="mailto:susmitadey475@gmail.com"> */}
                    <button type="submit" className="btn">
                      Submit
                    </button>
                    {/* </Link> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
