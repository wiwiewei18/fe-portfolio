/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Wiwie Sanjaya Portfolio",
    description: "Wiwie Sanjaya Portfolio Site",
    author: "Wiwie Sanjaya",
    twitterUsername: "@wiwiesanjaya",
    image: "/twitter-img.png",
    siteUrl: "https://testing-strapi-gatsby-build.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `https://wiwie-portfolio-api.herokuapp.com`,
    //     queryLimit: 1000, // Default to 100
    //     //   contentTypes : `jobs`, `projects`, `blogs`,
    //     //   singleType : `about`
    //     //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
    //     contentTypes: [`jobs`, `projects`],
    //     singleTypes: [`about`],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Roboto",
    //           variants: ["400", "700"],
    //         },
    //         { family: "Open Sans" },
    //       ],
    //     },
    //   },
    // },
  ],
  pathPrefix: "/fe-portfolio",
}
