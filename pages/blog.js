import Head from "next/head";
import Article from "../components/article";

export default function Blog({publications}) {
  return (
    <div>
      <Head>
        <title>Susmita Dey | Blogs</title>
        <meta name="description" content="Blogs written by Susmita Dey - The Creative Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <section className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6"> */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 p-4">Blog</h1>
          <Article className="border-b-2" />
          <Article className="border-b-2" />
          <Article className="border-b-2" />
          <Article className="border-b-2" />
        </div>
      </section>
    </div>
  );
}

/**
 * Method used to fetch data from Hashnode.
 * @param {Object} context 
 * @return props
 */

export async function getServerSideProps(context) {
    const res = await fetch("https://api.hashnode.com/",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: "caec0d86-4724-431c-869e-4b60a06d496f",
    },
    body: JSON.stringify({
      query:
      'query {user(username: "testchan") {publication {posts(page: 0) {title brief slug coverImage dateAdded}}}}',
    }),
    );
}

// caec0d86-4724-431c-869e-4b60a06d496f