import Head from "next/head";
import Article from "../../components/article";
import ParticlesComponent from "../../components/particles";
import { getAllPosts } from "../../lib/api";

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Susmita Dey | Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Amazing Blogs Written By Susmita Dey - The Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
      </Head>
      <section className="px-6">
        <ParticlesComponent />
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-3xl font-bold mb-6 p-4">Blogs</h1>
          {posts.map((post) => (
            <Article key={post?.slug} className="border-b-2" post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
