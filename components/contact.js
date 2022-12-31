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
      <section className="bg-[#000325] px-6 py-12" id="contact">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-col md:flex-row"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex mx-12">
              <div className="relative block group">
                <Image
                  src="https://cdn.pixabay.com/photo/2018/03/09/18/06/science-fiction-3212212_960_720.jpg"
                  alt="sci-fi"
                  width={580}
                  height={680}
                  // layout="responsive"
                  priority
                  className="absolute inset-0 object-cover group-hover:opacity-50"
                />
                <div className="relative p-2 text-white flex items-center justify-center">
                  <div className="md:-mt-[42rem] -mt-60">
                    <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                      <div className="text-center">
                        <div className="md:text-xl text-xs">
                          <p>Psst! Want to know a secret?</p>
                          <p>I respond to mails faster than any forms. 🤫</p>
                          <br />
                          <p>I love to help folks in the community. </p>
                          <p>
                            Feel free to schedule a call
                            <br /> if you need any mentorship sessions for free.
                          </p>
                          <br />
                          <p>Happy Hacking 😊</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container flex flex-col">
                <div className="flex flex-col mx-auto my-8 text-white">
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

                <form action="https://formspree.io/f/mlevdloa" method="POST">
                  <div className="my-3 flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-white mb-3 font-semibold"
                    >
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
                    <label
                      htmlFor="email"
                      className="text-white mb-3 font-semibold"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="email p-3 rounded-xl"
                      placeholder="Your Email Address"
                      required
                    />
                  </div>

                  <div className="my-3 flex flex-col">
                    <label
                      htmlFor="subject"
                      className="text-white mb-3 font-semibold"
                    >
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
                    <label
                      htmlFor="message"
                      className="text-white mb-3 font-semibold"
                    >
                      Message
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      className="message p-3 rounded-xl"
                      placeholder="Your Message"
                      required
                    />
                  </div>

                  <div className="text-center my-3">
                    <button type="submit" className="btn" role="button">
                      Submit
                    </button>
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
