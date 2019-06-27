import Link from 'next/link'

export default function Header({ authInfo }) {
  return (
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

      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </header>
  )
}