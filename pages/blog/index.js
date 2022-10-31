import Head from "next/head";
import Article from "../../components/article";
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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 p-4 text-blue-800">Blogs</h1>
          {posts.map((post) => (
            <Article key={post?.slug} className="border-b-2" post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
