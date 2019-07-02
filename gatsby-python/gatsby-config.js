module.exports = {
  siteMetadata: {
    title: 'Gatsby + Python API'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Python API',
        short_name: 'Gatbsy + Python',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png'
      }
    }
  ]
};
