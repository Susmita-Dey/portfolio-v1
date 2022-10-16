import Head from "next/head";
import Article from "../components/article";

export default function Blog({ publications }) {
  return (
    <div>
      <Head>
        <title>Susmita Dey | Blogs</title>
        <meta
          name="description"
          content="Blogs written by Susmita Dey - The Creative Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <section className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6"> */}
      <section className="bg-[#00023b] px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-3xl font-bold mb-6 p-4">Blog</h1>
          <Article className="rounded-lg border-b-2" />
          <Article className="rounded-lg border-b-2" />
          <Article className="rounded-lg border-b-2" />
          <Article className="rounded-lg border-b-2" />
        </div>
      </section>
    </div>
  );
}
