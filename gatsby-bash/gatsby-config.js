module.exports = {
  siteMetadata: {
    title: 'Gatsby + Bash API'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Bash API',
        short_name: 'Gatbsy + Bash',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png'
      }
    }
  ]
};
