import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-white px-6 py-12">
      <div className="container mx-auto lg:max-w-[76rem] flex gap-14 items-center flex-col-reverse md:flex-row">
        <div className="bg-mobile">
          <h1 className="mb-6 typed-out font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
            Hi, I am Susmita Dey!
            <br />
            Creative Developer
          </h1>
          <p className="text-xl mb-6">
            I&apos;m a final year undergrad college student pursuing B.Sc.
            Computer Science(Hons.) course. I&apos;m a full-stack web developer
            passionate about Open Source and hackathons.
            <br />
            <br /> Currently I&apos;m an MLH mentor and judge and Graphic
            Designer at WeMakeDevs.
          </p>
          <div className="action-buttons mx-auto flex flex-col md:flex-row gap-7">
            <Link
              role="button"
              type="text/html"
              target="_blank"
              href="https://bio.link/susmitadey"
              legacyBehavior>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-4 rounded text-lg mb-12">
                Let&apos;s Connect!
              </button>
            </Link>
            <Link
              role="button"
              type="text/html"
              target="_blank"
              href="Resume-Susmita.pdf"
              legacyBehavior>
              <button className="bg-white text-blue-900 px-6 py-4 rounded text-lg mb-12">
                Hire Me!
              </button>
            </Link>
          </div>
        </div>
        <div title="Hey, I'm Susmita. Nice to meet you.">
          <span className="m-5 inline-block before:w-full before:aspect-square before:-left-1.5 before:block before:absolute before:bg-blue-400 relative z-0 before:rounded-full">
            <Image
              src="/assets/Profile%20Photo%20(2).png"
              alt="Image of Susmita"
              className="z-10 relative rounded-full brightness-95"
              width={940}
              height={940}
              loading="eager"
              priority={true}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
