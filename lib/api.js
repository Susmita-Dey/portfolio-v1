import fs from "fs";
import axios from "axios";

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

export async function getAllWork() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'json/data.json');
  // Read the json file
  const jsonData = await fs.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData.work;
}
