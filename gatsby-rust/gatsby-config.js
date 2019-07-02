module.exports = {
  siteMetadata: {
    title: 'Gatsby + Rust API'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Rust API',
        short_name: 'Gatbsy + Rust',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png'
      }
    }
  ]
};
