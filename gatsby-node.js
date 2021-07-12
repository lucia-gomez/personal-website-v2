exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    query {
      allMysqlAllPosts {
        nodes {
          id,
          date,
          dateString,
          title,
          summary,
          slug,
          content, 
          likes
        }
      }
    }
  `);
  const posts = data.allMysqlAllPosts.nodes.reverse();

  // create main blog page, populated with blog posts
  createPage({
    path: "/blog/",
    component: require.resolve("./src/templates/blog.js"),
    context: { posts },
  })

  // // create a page for each blog post
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
          {
            test: /react-draft-wysiwyg/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}