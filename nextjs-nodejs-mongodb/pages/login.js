// Dependencies
import Router from 'next/router'
import { setCookie } from 'nookies'

Login.getInitialProps = async ctx => {
  const options = {
    maxAge: 30 * 24 * 60 * 60,
    path: '/'
  }

  if (ctx.query.id) {
    await setCookie(ctx, 'id', ctx.query.id, options)
    await setCookie(ctx, 'login', ctx.query.login, options)
    await setCookie(ctx, 'token', ctx.query.token, options)
  } 

  if (ctx.res) {
    ctx.res.writeHead(303, {
      Location: '/'
    })
    ctx.res.end()
  } else {
    Router.push('/')
  }
}

function Login() {
  return (
    <div>Logging in...</div>
  )
}

export default Login