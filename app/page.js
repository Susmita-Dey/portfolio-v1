"use client"

import Head from "next/head";
import React from "react";
import ParticlesComponent from "../components/particles";
import { getAllPosts, getAllWork, getHashnodeBlogs } from "../lib/api";
import Certificates from "../components/Certificates";
import HeroSection from "../components/HeroSection";
import Skills from "../components/MySkills";
import Experience from "../components/Experience";
import Projects from "../components/FeaturedWork";
import OpenSource from "../components/OpenSource";
// import RecentPosts from "../components/recentPosts";
import Contact from "../components/Contact";
import { workdata } from "json/workdata";

export async function generateStaticParams() {
    const posts = await getHashnodeBlogs();
    const work = await getAllWork();

    return {
        props: {
            posts,
            work,
        },
    };
}

export default function Home({ posts }) {
    return (
        <>
            <div className="scroll-smooth">
                <Head>
                    <title>Susmita Dey | The Web Developer</title>
                    <meta name="description" content="Susmita Dey Developer Portfolio" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <ParticlesComponent />
                <HeroSection />
                {/* <About /> */}
                <Skills />
                <Experience />
                <Projects work={workdata} />
                <OpenSource />
                {/* <RecentPosts posts={posts} /> */}
                <Certificates />
                <Contact />
            </div>
        </>
    );
}
