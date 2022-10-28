import fs from "fs";
import Head from "next/head";
import Article from "../../components/article";
import matter from "gray-matter";

export async function getStaticProps() {
  // Get all posts
  const files = fs.readdirSync("./posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      ...frontmatter,
    };
  });
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
        <title>NextJS Blog</title>
        <meta
          name="description"
          content="Blogs written By Susmita Dey - The Creative Web Developer"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 p-4">Blog</h1>
          {posts.map((post) => (
            <Article key={post.slug} className="border-b-2" post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
