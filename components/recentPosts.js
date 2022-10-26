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
        <SectionHeader
          title="Recent Posts"
          href="https://susmitadey.hashnode.dev/"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Article
            postTitle="A complete guide for Markdown files"
            postDate="Sep 26, 2022"
            postLink="https://susmitadey.hashnode.dev/a-complete-guide-for-markdown-files"
            postDesc="Markdown is a lightweight markup language for creating formatted text using a plain-text editor. Markdown is widely used in blogging, instant messaging, online forums, collaborative software, documentation pages, and readme files."
          />
          <Article
            postTitle="Confidential : TryHackMe Room WalkThrough"
            postDate="Aug 20, 2022"
            postLink="https://susmitadey.hashnode.dev/confidential-tryhackme-room-walkthrough"
            postDesc="Hello folks, I'm back with another TryHackMe room walkthrough named 'Confidential'. It's a new room recently created by cmnatic. It's a pretty easy room but tricky. Room Link:- tryhackme.com/room/confidential"
          />
        </div>
      </div>
    </section>
  );
}
