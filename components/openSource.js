import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

export default function OpenSource() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#000325] text-white text-center px-6 py-12">
      <div
        className="max-w-4xl mx-auto"
        data-aos="fade-left"
        data-aos-once="true"
      >
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-500">
          Open Source Contributons
        </h2>
        <p className="text-lg font-normal mb-6">
          Top Open Source Contributons to Various Orgs/Companies
        </p>
      </div>
      <div
        className="max-w-4xl mx-auto flex gap-10 md:flex-row flex-col"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="my-2 md:w-1/4 md:h-1/4 cursor-pointer">
          <Link href="https://novu.co/contributors/Susmita-Dey/" passhref>
            <a title="Open in new tab to see my contributions at Novu">
              <Image
                src="/logos/novu.png"
                width={500}
                height={200}
                layout="intrinsic"
                alt="Novu"
              />
            </a>
          </Link>
        </div>
        <div className="mt-2 md:w-1/4 md:h-1/4 cursor-pointer">
          <Link
            href="https://github.com/commclassroom/roadmaps/pull/191"
            passhref
          >
            <a title="Open in new tab to see my contributions at Community Classroom">
              <Image
                src="/logos/CC-logo.png"
                width={500}
                height={200}
                layout="intrinsic"
                alt="Community Classroom logo"
              />
            </a>
          </Link>
        </div>
        <div className="-mt-2 md:w-1/4 md:h-1/4 cursor-pointer">
          <Link
            href="https://github.com/orgs/hack4bengal/teams/web-team/members"
            passhref
          >
            <a title="Open in new tab to see my contributions at Hack4Bengal">
              <Image
                src="/logos/Hack4Bengal.png"
                width={300}
                height={200}
                layout="intrinsic"
                alt="Hack4Bengal"
              />
            </a>
          </Link>
        </div>
        <div className="mt-2 md:w-1/4 md:h-1/4 cursor-pointer">
          <Link
            href="https://github.com/dailydotdev/memetoberfest/pull/68"
            passhref
          >
            <a title="Open in new tab to see my contributions at daily.dev">
              <Image
                src="/logos/dailydotdev.png"
                width={500}
                height={200}
                layout="intrinsic"
                alt="dailydotdev"
              />
            </a>
          </Link>
        </div>
        <div className="mt-2 md:w-1/4 md:h-1/4 cursor-pointer">
          <Link
            href="https://github.com/Fueler-io/Web-Development-Resources/pull/63"
            passhref
          >
            <a title="Open in new tab to see my contributions at Fueler">
              <Image
                src="/logos/fueler.png"
                width={500}
                height={200}
                layout="intrinsic"
                alt="fueler"
              />
            </a>
          </Link>
        </div>
        <div className="mt-1 md:w-1/5 md:h-1/4 cursor-pointer w-full h-full justify-center items-center">
          <Link
            href="https://github.com/Showwcase/hacktoberfest/pull/19"
            passhref
          >
            <a title="Open in new tab to see my contributions at Showwcase">
              <Image
                src="/logos/showwcase.jpg"
                width={172}
                height={106}
                layout="intrinsic"
                alt="showwcase"
              />
            </a>
          </Link>
        </div>
        {/* <div className="flex mt-2 md:w-1/4 md:h-1/4 w-full h-full justify-center items-center cursor-pointer">
          <Link href="https://github.com/github/india/pull/1021/">
            <Image src="/logos/github.png" width={50} height={50} alt="github" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
