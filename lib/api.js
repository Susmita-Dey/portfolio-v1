import fs from "fs";
import matter from "gray-matter";
import axios from "axios";

export function getAllPosts() {
  const files = fs.readdirSync("./posts");
  const posts = files
    .map((fileName) => {
      const slug = fileName.replace(".md", "");
      const { frontmatter } = getPostBySlug(slug);
      return {
        slug,
        ...frontmatter,
      };
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    frontmatter,
    content,
  };
}

export async function getHashnodeBlogs() {
  try {
    const response = await axios.post(
      "https://api.hashnode.com/",
      {
        query: `
          query {
            user(username: "susmitadey") {
              publication {
                posts(page: 0) {
                  _id
                  title
                  brief
                  slug
                  dateAdded
                  coverImage
                }
              }
            }
          }
        `,
      },
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_HASHNODE_API_KEY,
        },
      }
    );

    const { data } = response.data;
    const blogs = data.user.publication.posts.map((post) => {
      return {
        id: post._id,
        slug: post.slug,
        title: post.title,
        date: post.dateAdded,
        brief: post.brief,
        coverImg: post.coverImage,
      };
    });

    const jsonData = JSON.stringify(blogs);
    return jsonData;
  } catch (error) {
    console.error("Error fetching Hashnode blogs:", error);
    return [];
  }
}

export function getAllWork() {
  const data = fs.readFileSync("json/data.json", "utf-8");
  const jsonData = JSON.parse(data);
  return jsonData.work;
}
