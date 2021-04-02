/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  /* https://www.gatsbyjs.org/docs/add-seo-component/ */
  siteMetadata: {
    titleSuffix: `Florian Bühler`,
    company: ``,
    description: ``,
    author: ``,
    url: ``, // No trailing slash allowed!
    image: `/xyz` // Path to your image you placed in the `static` folder TODO add meta data image
  },
  plugins: [
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    // https://www.gatsbyjs.org/packages/gatsby-plugin-eslint/
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public|_this_is_virtual_fs_path_)/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: true
        }
      }
    }
  ]
}
