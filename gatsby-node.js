const axios = require(`axios`)

async function getAllPosts() {
  const posts = (await axios.get('http://localhost:3001/api/get')).data;
  return posts.reverse();
}

exports.createPages = async ({ actions: { createPage } }) => {
  const posts = await getAllPosts();

  createPage({
    path: "/blog/",
    component: require.resolve("./src/templates/blog.js"),
    context: { posts },
  })

  posts.forEach(post => {
    createPage({
      path: `/blog/${post.slug}/`,
      component: require.resolve("./src/templates/blogPostPage.js"),
      context: { post },
    })
  });
}