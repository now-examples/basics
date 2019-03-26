// Packages
import fetch from 'isomorphic-unfetch'
import retry from 'async-retry'
import { parse as parseContentType } from 'content-type'

const { API_URL } = require('../config')
const NETWORK_ERR_CODE = 'network_error'
const NETWORK_ERR_MESSAGE = 'A network error has occurred. Please retry'

const isServer = typeof window === 'undefined'
const agents = new Map()

export default async function fetchAPI(path, opts = {}) {
  const headers = opts.headers || {}

  // accept path to be a full url or a relative path
  const url = path[0] === '/' ? API_URL + path : path
  let agent

  if (isServer) {
    const { parse } = require('url')
    const { protocol } = parse(url)
    if (protocol) {
      agent = getAgent(protocol)
    }

    // Pass the auth cookie if present
    // On the browser this is undefined because the token cookie is httpOnly.
    // TODO Perhaps in real life you would need to support more than one cookie.
    if (opts.token) {
      headers.cookie = `token=${opts.token}`
    }
  }

  return retry(
    async bail => {
      let res, data, err

      try {
        res = await fetch(url, { ...opts, headers, agent })
        if (opts.throwOnHTTPError && (res.status < 200 || res.status >= 300)) {
          const { type } = parseContentType(
            res.headers.get('Content-Type') || ''
          )
          if (type === 'application/json') {
            data = await res.json()

            // some APIs don't wrap their errors in `error`
            // (like api-www-user
            if (opts.wrapErrorsLegacy && data.code && data.message) {
              data.error = data
            }

            err = new Error(
              data.error == null
                ? `Unexpected Error (${opts.method} ${url})`
                : data.error.message
            )
            err.res = res
            err.status = res.status
            // TODO: remove this hack https://github.com/zeit/front/issues/553
            if (data.error) {
              err.code = data.error.code
              for (const field of Object.keys(data.error)) {
                if (field !== 'message') {
                  err[field] = data.error[field]
                }
              }
            } else {
              err.code = res.status
            }
          } else {
            // handle it below as network error
            let text = ''
            try {
              text = await res.text()
            } catch (berr) {
              // eslint-disable-next-line no-console
              console.error('error buffering text', berr)
            }
            throw new Error(
              `Unexpected response content-type (${opts.method} ${url}): ` +
                type +
                `(${res.status}) ${text}`
            )
          }
        } else if (res.status === 204) {
          // Since 204 means no content we return null
          data = null
        } else {
          data = await res.json()
        }
      } catch (e) {
        err = isServer ? e : new Error(NETWORK_ERR_MESSAGE)
        err.code = NETWORK_ERR_CODE
        err.res = null
        err.status = null
      }

      if (!err) return data
      if (err.status < 500) return bail(err)
      err.stack = (err.stack ? err.stack : '') + ' ### Fetched URL: ' + url
      if (opts.body) {
        err.stack =
          (err.stack ? err.stack : '') + ' ### Request Body: ' + opts.body
      }
      throw err
    },
    { retries: 3, maxTimeout: 2500 }
  )
}

const getAgent = protocol => {
  if (!agents.has(protocol)) {
    const http = require('http')
    const https = require('https')
    const module = protocol === 'https:' ? https : http
    const opts = {
      keepAlive: true,
      keepAliveMsecs: 10000,
      maxSockets: 100
    }
    const agent = new module.Agent(opts)
    agents.set(protocol, agent)
  }

  return agents.get(protocol)
}
