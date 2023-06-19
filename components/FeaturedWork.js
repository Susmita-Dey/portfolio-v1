"use client";

import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "./SectionHeader";
import Project from "./project";

export default function Projects({ work }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="bg-[#000325] text-white px-6"
      id="projects"
      data-aos="fade-down"
      data-aos-once="true"
    >
      <div className="max-w-4xl mx-auto py-12">
        <SectionHeader title="Featured Work" url="/mywork" />
        <div className="flex flex-col gap-2 ">
          {work?.slice(0, 3).map((workItem) => (
            <Project key={workItem.title} item={workItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
