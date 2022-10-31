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
          {/* <article className="bg-white p-4 rounded-lg">
            <h3 className="text-2xl mb-2 font-medium">
              A complete guide for Markdown files
            </h3>
            <span className="text-gray-600 mb-4 block">
              <span>Sep 26, 2022</span> |{" "}
              <Link href="https://susmitadey.hashnode.dev/a-complete-guide-for-markdown-files">
                <a target="_blank" rel="noopener noreferrer">
                  Hashnode
                </a>
              </Link>
            </span>
            <p>
              Markdown is a lightweight markup language for creating formatted
              text using a plain-text editor. Markdown is widely used in
              blogging, instant messaging, online forums, collaborative
              software, documentation pages, and readme files.
            </p>
          </article>
          <article className="bg-white p-4 rounded-lg">
            <h3 className="text-2xl mb-2 font-medium">
              Confidential : TryHackMe Room WalkThrough
            </h3>
            <span className="text-gray-600 mb-4 block">
              <span>Aug 20, 2022</span> |{" "}
              <Link href="https://susmitadey.hashnode.dev/confidential-tryhackme-room-walkthrough">
                <a target="_blank" rel="noopener noreferrer">
                  Hashnode
                </a>
              </Link>
            </span>
            <p>
              Hello folks, I'm back with another TryHackMe room walkthrough
              named 'Confidential'. It's a new room recently created by cmnatic.
              It's a pretty easy room but tricky. Room Link:-
              tryhackme.com/room/confidential
            </p>
          </article> */}
        </div>
      </div>
    </section>
  );
}
