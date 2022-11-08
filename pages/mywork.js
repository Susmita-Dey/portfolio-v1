import Head from "next/head";
import ParticlesComponent from "../components/particles";
import Work from "../components/work";
// import { useEffect, useState } from "react";
import { getAllWork } from "../lib/api";

export async function getStaticProps() {
  const work = getAllWork();
  return {
    props: {
      work,
    },
  };
}

export default function WorkPage({ work }) {
  return (
    <div>
      <Head>
        <title>Susmita Dey | Projects</title>
        <meta
          name="description"
          content="Projects done by Susmita Dey - The Creative Web Developer"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-6 text-white">
        <div className="max-w-4xl mx-auto">
          <ParticlesComponent />
          <h2 className="text-4xl text-center font-bold mb-6 p-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300">
            Work
          </h2>
          {/* <!-- Control buttons --> 
          <div
            id="myBtnContainer"
            className="flex justify-center align-center flex-wrap md:flex-row mb-8"
          >
            <button className="btn active" onClick="filterObjects('all')">
              {" "}
              Show all
            </button>
            <button className="btn" onClick="filterObjects('frontend')">
              {" "}
              Frontend
            </button>
            <button className="btn" onClick="filterObjects('ui-ux')">
              {" "}
              UI/UX
            </button>
            <button className="btn" onClick="filterObjects('backend')">
              {" "}
              Backend
            </button>
            <button className="btn" onClick="filterObjects('web3')">
              {" "}
              Web3
            </button>
            <button className="btn" onClick="filterObjects('full-stack')">
              {" "}
              Full-Stack
            </button>
            <button className="btn" onClick="filterObjects('ai')">
              {" "}
              AI/ML
            </button>
            <button className="btn" onClick="filterObjects('devops')">
              {" "}
              DevOps
            </button>
            <button className="btn" onClick="filterObjects('freelance')">
              {" "}
              Freelance
            </button>
           </div>*/}
          {work?.map((workItem) => (
            <Work key={workItem?.title} item={workItem} />
          ))}
        </div>
      </section>
    </div>
  );
}
