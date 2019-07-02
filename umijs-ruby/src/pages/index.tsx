import React, { useEffect, useState } from 'react';
import { RouterTypes } from 'umi';

const App: React.SFC<RouterTypes> = () => {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date.rb');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>UmiJS + Ruby API</h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/zeit/now-examples/blob/master/umijs-ruby"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        is a <a href="https://umijs.org/">UmiJS</a> app with two directories,{' '}
        <code>/pages</code> for content and components, and <code>/api</code>{' '}
        which contains a serverless{' '}
        <a href="https://www.ruby-lang.org/en/">Ruby</a> function. See{' '}
        <a href="/api/date.rb">
          <code>api/date.rb</code> for the Date API with Ruby
        </a>
        .
      </p>
      <br />
      <h2>The date according to Ruby is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
};

export default App;
