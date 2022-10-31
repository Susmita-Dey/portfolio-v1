import React, { useEffect } from "react";
import Link from "next/link";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "./sectionHeader";
import Article from "./article";

export default function RecentPosts({ posts }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className=""
      data-aos="fade-right"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="1300"
      data-aos-easing="ease-in"
      data-aos-mirror="false"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="max-w-4xl mx-auto py-12 px-4">
        <SectionHeader title="Recent Posts" href="/blog" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Article post={posts[0]} />
          <Article post={posts[1]} />
        </div>
      </div>
    </section>
  );
}
