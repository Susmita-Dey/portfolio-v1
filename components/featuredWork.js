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
        <SectionHeader title="Featured Work" href="#" />
        <div className="flex flex-col gap-2">
          <Work />
          <Work />
        </div>
      </div>
    </section>
  );
}
