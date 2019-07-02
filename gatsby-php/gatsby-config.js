module.exports = {
  siteMetadata: {
    title: 'Gatsby + PHP API'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + PHP API',
        short_name: 'Gatbsy + PHP',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png'
      }
    }
  ]
};
