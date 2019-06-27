// Dependencies
import Router from 'next/router'
import { destroyCookie } from 'nookies'

Logout.getInitialProps = async ctx => {
  destroyCookie(ctx, 'token')
  destroyCookie(ctx, 'id')
  destroyCookie(ctx, 'login')

  if (ctx.res) {
    ctx.res.writeHead(303, {
      Location: '/'
    })
    ctx.res.end()
  } else {
    Router.push('/')
  }

  return {}
}

function Logout() {
  return (
    <div>Logging out...</div>
  )
}

export default Logout