// Dependencies
import { useEffect, useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Cookies from 'js-cookie'

// Components
import Signature from '../components/Signature'
import SignatureSkeleton from '../components/SignatureSkeleton'

function Home({
  router
}) {
  const [signatures, setSignatures] = useState(null)
  const [signatureSubmitted, setSignatureSubmitted] = useState({})
  const [pageCount, setPageCount] = useState(1)
  const [loaded, setLoaded] = useState(false)
  const [authInfo, setAuthInfo] = useState({})
  const existing = signatures ? signatures.find(s => s.id == authInfo.id) : null
  const page = parseInt(router.query.page) || 1
  const limit = parseInt(router.query.limit) || 5

  const previousParams = {
    ...(router.query.limit && { limit: router.query.limit }),
    ...((page - 1 >= 1 && { page: page - 1}) || (page - 1 === 1 && null))
  }

  const nextParams = {
    ...(router.query.limit && { limit: router.query.limit }),
    ...(page + 1 <= pageCount && { page: page + 1})
  }

  const esc = encodeURIComponent
  const buildParams = (params) => Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&')

  const nextPageLink = `/?${buildParams(nextParams)}`
  const previousPageLink = `/?${buildParams(previousParams)}`

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `/api/guestbook/list.js?page=${page}&limit=${limit}`
      )

      const { guestbook, pageCount } = await response.json()

      setSignatures([...guestbook])
      setPageCount(pageCount)
      setLoaded(true)
    }

    fetchData()

    if (router.query.page > pageCount) {
      router.replace({pathname: router.pathname, query: Object.assign({}, router.query, {page: pageCount})}, { shallow: true})
    }
  }, [page])

  useEffect(() => {
    const token = Cookies.get('token')
    const login = Cookies.get('login')
    const id = Cookies.get('id')

    setAuthInfo({token, login, id})
    console.log('test')
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    let signature = e.target.signature.value
    e.target.signature.value = ''

    const res = await fetch(`/api/guestbook/sign.js`, {
      method: 'PATCH',
      body: JSON.stringify({
        signature,
        id: authInfo.id,
        user: authInfo.login
      })
    })

    if (res.status === 200) {
      setSignatureSubmitted({status: true})

      if (existing) {
        const updatedSignatures = signatures.map(s => {
          if (s.id === existing.id) s.signature = signature
          return s
        })

        setSignatures(updatedSignatures)
      } else {
        const newSignature = await res.json()
        const updatedSignatures = [newSignature, ...signatures.slice(0, 4)]
        setSignatures(updatedSignatures)
      }
    } else {
      setSignatureSubmitted({status: false, message: res.message})
    }
  }

  const handleDelete = async () => {
    const res = await fetch(
      `/api/guestbook/delete.js?id=${authInfo.id}&page=${page}&limit=${limit}`,
      {
        method: 'DELETE'
      }
    )

    if (res.status === 200) {
      const data = await res.json()
      setSignatures([...data.guestbook])
    }
  }


  return (
    <>
      <Head>
        <title>GitHub Guestbook</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      <header>
        <h1>GitHub Guestbook</h1>
        <Link
          href={
            !authInfo.token ? `/api/auth` : `/logout`
          }
        >
          <a>
            <button>
              {authInfo.token !== undefined ? 'Logout' : 'Login With GitHub'}
            </button>
          </a>
        </Link>
      </header>
      {authInfo.token && (
        <>
          <h3>
            Hello, {authInfo.login},{' '}
            {!!existing
              ? 'want to update your signature?'
              : 'want to sign the guestbook?'}
          </h3>
          <form onSubmit={handleSubmit}>
            <input id="signature" name="signature" />
            <button type="submit">Sign</button>
          </form>
          <span>{ signatureSubmitted && (signatureSubmitted.status === true ? '' : signatureSubmitted.message) }</span>
        </>
      )}
      <h2>Signatures</h2>
      <div className="signatures-list">
        { loaded }
        { loaded && signatures ? <>{ signatures.length ? signatures.map(g => (
          <Signature
            id={g.id}
            loggedInId={authInfo.id}
            signature={g.signature}
            user={g.user}
            updated={g.updated}
            key={g.id}
            handleDelete={handleDelete}
            />
        )) : "No signatures, why not sign above?"}</> : <SignatureSkeleton /> }
      </div>

      <nav>
        {previousParams.page && (
          <Link prefetch href={previousPageLink}>
            <a>Previous</a>
          </Link>
        )}
        {nextParams.page && (
          <Link prefetch href={nextPageLink}>
            <a className="next">Next</a>
          </Link>
        )}
      </nav>
      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }

        .signatures-list {
          margin-left: 0;
        }

        ul li::before {
          content: '';
        }

        form {
          display: flex;
          width: 100%;
        }

        input {
          flex-grow: 100;
          margin-right: 20px;
        }

        nav {
          display: flex;
          justify-content: space-between;
        }

        .next {
          margin-left: auto;
        }
      `}</style>
    </>
  )
}

export default withRouter(Home)