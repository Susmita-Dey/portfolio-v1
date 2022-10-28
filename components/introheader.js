import Image from "next/image";
import profilePic from "../assets/my-profile-photo.jpg";

export default function IntroHeader() {
  return (
    // <header className="bg-gradient-to-r bg-[#000235] from-indigo-500 via-purple-500 to-pink-500 dark:bg-slate-800 px-6 py-12">
    <header className="text-white px-6 py-12">
      <div className="max-w-4xl mx-auto flex gap-14 items-center flex-col-reverse md:flex-row">
        <div>
          <h1 className="mb-6 typed-out font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
            Hi, I am Susmita Dey!
            <br />
            Creative Developer
          </h1>
          <p className="text-lg mb-6">
            I&apos;m a final year undergrad college student pursuing B.Sc.
            Computer Science(Hons.) course. I&apos;m a MERN stack web developer
            passionate about Open Source and hackathons.
            <br /> Currently I&apos;m an MLH mentor and Graphic Designer at
            Community Classroom.
          </p>
          <a type="text/html"
            href="https://drive.google.com/file/d/1KAwnHGJmdAcoEh9O80YuFMoev_OG_LjA/view?usp=sharing"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-4 rounded text-lg mb-12"
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
