const request = require('request-promise')

module.exports = async (req, res) => {
  const { code } = req.query

  const { access_token } = await request({
    method: 'POST',
    uri: 'https://github.com/login/oauth/access_token',
    body: {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code
    },
    json: true
  })

  const { id, login } = await request({
    uri: 'https://api.github.com/user',
    headers: {
      Authorization: `bearer ${access_token}`,
      'User-Agent': 'Serverless Guestbook'
    },
    json: true
  })

  res.writeHead(301, {
    Location: `/login?token=${access_token}&login=${login}&id=${id}`
  })
  res.end()
};
