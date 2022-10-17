import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "./sectionHeader";
import Work from "./work";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="bg-[#000479] text-white px-6"
      id="projects"
      data-aos="fade-down"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="5000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="max-w-4xl mx-auto py-12">
        <SectionHeader title="Featured Work" href="/projects" />
        <div className="flex flex-col gap-2">
          <Work
            workTitle="Sukoon"
            imageUrl="/Sukoon.png"
            tagName="HTML, CSS, JS"
            about="This is a stress-relieving website project made in my first hackathon Hackofiesta. This project is under the theme Healthcare. This project provides one step solution to get relief from your stress. Live a stress-free life.🕊️"
            repo="https://github.com/Susmita-Dey/Sukoon"
          />
          <Work
            workTitle="Moody"
            imageUrl="/Moody.png"
            tagName="HTML, Tailwind CSS"
            about="Moody is a Chrome extension that will help you filter your home page of your Chrome Browser according to your mood. It helps you to do your work according to your mood and also get back your mood to normal. 🕊️"
            repo="https://github.com/Susmita-Dey/Moody"
          />
        </div>
      </div>
    </section>
  );
}
