const axios = require(`axios`)

async function getAllPosts() {
  const api = process.env.NODE_ENV === 'development' ?
    process.env.GATSBY_API_DEV
    : process.env.GATSBY_API_PROD;
  const posts = (await axios.get(api + '/api/get')).data;
  return posts.reverse();
}

exports.createPages = async ({ actions: { createPage } }) => {
  const posts = await getAllPosts();

  // create main blog page, populated with blog posts
  createPage({
    path: "/blog/",
    component: require.resolve("./src/templates/blog.js"),
    context: { posts },
  })

  // create a page for each blog post
  posts.forEach(post => {
    createPage({
      path: `/blog/${post.slug}/`,
      component: require.resolve("./src/templates/blogPostPage.js"),
      context: { post },
    })
  });
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/admin/)) {
    page.matchPath = "/admin/*"
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}