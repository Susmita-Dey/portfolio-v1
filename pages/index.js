import Head from "next/head";
// import Image from "next/image";
import React, { useRef } from "react";
import About from "../components/about";
import Experience from "../components/experience";
import IntroHeader from "../components/introheader";
import Projects from "../components/featuredWork";
import RecentPosts from "../components/recentPosts";
import Contact from "../components/contact";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className="scroll-smooth">
        <Head>
          <title>Susmita Dey | The Web Developer</title>
          <meta name="description" content="Susmita Dey Developer Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <main className="grid place-content-center min-h-screen">
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Next + Tailwind ❤️</div>
            <p className="text-grey-darker text-base">
              Next and Tailwind CSS are a match made in heaven. Check out this
              article on how you can combine these two for your next app.
            </p>
          </div>
        </div>
      </main> */}
        <IntroHeader />
        <About />
        <Experience />
        <Projects />
        <RecentPosts />
        <Contact />
      </div>
    </>
  );
}
