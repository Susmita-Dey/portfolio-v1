/**
 * Method used to fetch data from Hashnode.
 * @param {Object} context
 * @return props
 */
const query = `
 {
   user(username: "susmitadey") {
     publication {
       posts(page: 0) {
         slug
         title
         brief
         coverImage
         replyCount
         totalReactions
       }
     }
   }
 }
`;

export const fetchPosts = async () => {
  const res = await fetch("https://api.hashnode.com", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const hashnodeResponse = await res.json();
  return hashnodeResponse.data.user.publication.posts;
};

// caec0d86-4724-431c-869e-4b60a06d496f

export const fetchThreeMostRecentPost = async () => {
  const posts = await fetchPosts();
  return posts.slice(0, 3);
};

export const getStaticProps = async () => {
  const posts = await fetchThreeMostRecentPost();
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
