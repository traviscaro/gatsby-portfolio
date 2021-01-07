module.exports = {
  siteMetadata: {
    title: `Travis Caro | Software Engineer`,
    siteUrl: `https://traviscaro.dev`,
    description: `Travis Caro's personal website and portfolio`,
    author: `Travis Caro`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Travis Caro | Software Engineer`,
        shortname: `Travis Caro`,
        startUrl: `/`,
        display: `minimal-ui`,
        icon: `src/images/tc-logo-primary.png`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
