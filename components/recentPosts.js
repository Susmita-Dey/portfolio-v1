import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Article from "./article";
import SectionHeader from "./sectionHeader";

export default function RecentPosts() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="bg-[#000358]"
      data-aos="fade-right"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="1300"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="max-w-4xl mx-auto py-12">
        <SectionHeader title="Recent Posts" href="#" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Article />
          <Article />
        </div>
      </div>
    </section>
  );
}
