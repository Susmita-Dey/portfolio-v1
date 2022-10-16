import Image from "next/image";
import profilePic from "../assets/my-profile-photo.jpg";

export default function IntroHeader() {
  return (
    // <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-slate-800 px-6 py-12">
    <header className="bg-[#000235] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto flex gap-14 items-center flex-col-reverse md:flex-row">
        <div>
          <h1 className="text-3xl font-bold mb-6 typed-out">
            Hi, I am Susmita Dey!
            <br />
            Creative Developer
          </h1>
          <p className="text-lg mb-6" onScroll="fade-in">
            I&apos;m a final year undergrad college student pursuing B.Sc.
            Computer Science(Hons.) course. I&apos;m a MERN stack web developer
            passionate about Open Source and hackathons.
            <br /> Currently I&apos;m an MLH mentor and Graphic Designer at
            Community Classroom.
          </p>
          <a
            href="https://resume.showwcase.com/susmitadey.pdf"
            className="bg-blue-800 text-white px-6 py-4 rounded text-lg hover:bg-blue-700 mb-12"
          >
            <em>Hire Me!</em>
          </a>
        </div>
        <span className="m-5 inline-block before:w-full before:aspect-square before:-left-1.5 before:block before:absolute before:bg-blue-400 relative z-0 before:rounded-full">
          <Image
            src={profilePic}
            alt="Image of Susmita"
            className="z-10 relative rounded-full"
            width="540"
            height="540"
            loading="eager"
            priority
          />
        </span>
      </div>
    </header>
  );
}
