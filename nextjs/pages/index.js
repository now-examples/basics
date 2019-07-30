import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <div>
      <Head title="Home" />
      <Nav />

      <div className="hero">
        <h1 className="title">Welcome to Next!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>

        <div className="row date">
          <p>The date is:&nbsp; {date
            ? <b>{date.date}</b>
            : <span className="loading"></span>}</p>
        </div>

        <div className="row">
          <Link href="https://github.com/zeit/next.js#getting-started">
            <a className="card">
              <h3>Getting Started &rarr;</h3>
              <p>Learn more about Next on Github and in their examples</p>
            </a>
          </Link>
          <Link href="https://open.segment.com/create-next-app">
            <a className="card">
              <h3>Examples &rarr;</h3>
              <p>
                Find other example boilerplates on the{' '}
                <code>create-next-app</code> site
              </p>
            </a>
          </Link>
          <Link href="https://github.com/segmentio/create-next-app">
            <a className="card">
              <h3>Create Next App &rarr;</h3>
              <p>Was this tool helpful? Let us know how we can improve it</p>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .date p {
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @keyframes Loading { 
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          width: 400px;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  )
}

export default Home
