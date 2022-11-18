import Head from "next/head";
import md from "markdown-it";
import Image from "next/image";
import { getAllPosts, getPostBySlug } from "../../lib/api";

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = getPostBySlug(slug);
  return {
    props: post,
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Amazing Blogs Written By Susmita Dey - The Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="px-6 bg-green-100">
        <div className="max-w-8xl mx-auto py-12">
          <div className="prose mx-auto">
            <h1>{frontmatter.title}</h1>
            <Image
              src={frontmatter.image}
              alt="blog-image"
              width={1000}
              height={600}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: md({
                  html: true,
                  xhtmlOut: true,
                  breaks: true,
                  langPrefix: "language-",
                  linkify: true,
                  typographer: true,
                  quotes: "“”‘’",
                  highlight: function (/*str, lang*/) {
                    return "";
                  },
                }).render(content),
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
