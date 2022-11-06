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
      <div className="max-w-4xl justify-center mx-auto flex gap-14 items-center flex-col md:flex-row">
        <div data-aos="fade-left" data-aos-once="true">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-500">
            Open Source Contributons
          </h2>
          <p className="text-lg font-normal mb-6">
            Top Open Source Contributons to Various Orgs/Companies
          </p>
        </div>
        {/* <div className="rounded-xl" data-aos="fade-right" data-aos-once="true">
          Hello World
        </div> */}
      </div>
      <div className="max-w-4xl mx-auto flex gap-10 flex-col md:flex-row">
        <div className="flex my-2 md:w-1/4 md:h-1/4 cursor-pointer">
          <Link href="https://novu.co/contributors/Susmita-Dey/">
            <Image
              src="/logos/novu.png"
              width={500}
              height={200}
              layout="intrinsic"
            />
          </Link>
        </div>
        <div className="flex mt-2 md:w-1/4 md:h-1/4 cursor-pointer">
          <Link href="https://github.com/commclassroom/roadmaps/pull/191">
            <Image
              src="/logos/CC-logo.png"
              width={500}
              height={200}
              layout="intrinsic"
            />
          </Link>
        </div>
        <div className="flex -mt-2 md:w-1/4 md:h-1/4 cursor-pointer">
          <Link href="https://github.com/orgs/hack4bengal/teams/web-team/members">
            <Image
              src="/logos/Hack4Bengal.png"
              width={300}
              height={200}
              layout="intrinsic"
            />
          </Link>
        </div>
        <div className="flex mt-2 md:w-1/4 md:h-1/4 cursor-pointer">
          <Link href="https://github.com/dailydotdev/memetoberfest/pull/68">
            <Image
              src="/logos/dailydotdev.png"
              width={500}
              height={200}
              layout="intrinsic"
            />
          </Link>
        </div>
        <div className="flex mt-2 md:w-1/4 md:h-1/4 cursor-pointer">
          <Link href="https://github.com/Fueler-io/Web-Development-Resources/pull/63">
            <Image
              src="/logos/fueler.png"
              width={500}
              height={200}
              layout="intrinsic"
            />
          </Link>
        </div>
        <div className="flex mt-1 md:w-1/5 md:h-1/4 cursor-pointer w-full h-full justify-center items-center">
          <Link href="https://github.com/Showwcase/hacktoberfest/pull/19">
            <Image
              src="/logos/showwcase.jpg"
              width={172}
              height={106}
              layout="intrinsic"
            />
          </Link>
        </div>
        {/* <div className="flex mt-2 md:w-1/4 md:h-1/4 w-full h-full justify-center items-center cursor-pointer">
          <Link href="https://github.com/github/india/pull/1021/">
            <Image src="/logos/github.png" width={50} height={50} />
          </Link>
        </div> */}
        {/* <div className="flex mt-2 md:w-1/4 md:h-1/4 cursor-pointer">
          <Link href="https://github.com/AccessibleForAll/Resources/pull/3">
            <Image src="/logos/AccessibleForAll.png" width={50} height={50} />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
