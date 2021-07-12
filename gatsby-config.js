/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-mysql',
      options: {
        connectionDetails: {
          host: 'us-cdbr-east-04.cleardb.com',
          user: 'b1601efb83fa98',
          password: '2183ba1c',
          database: 'heroku_a0f43feca6ab6ff',
          connectTimeout: 100000,
          flags: 'INTERACTIVE'
        },
        queries: [
          {
            statement: 'SELECT * FROM posts;',
            idFieldName: 'id',
            name: 'allPosts'
          }
        ]
      }
    }
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
