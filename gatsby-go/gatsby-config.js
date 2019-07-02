module.exports = {
  siteMetadata: {
    title: 'Gatsby + Go API'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Go API',
        short_name: 'Gatbsy + Go',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png'
      }
    }
  ]
};
