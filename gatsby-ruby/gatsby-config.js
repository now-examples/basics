module.exports = {
  siteMetadata: {
    title: 'Gatsby + Ruby API'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Ruby API',
        short_name: 'Gatbsy + Ruby',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png'
      }
    }
  ]
};
