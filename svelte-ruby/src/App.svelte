<script>
  import { onMount } from "svelte";
  export let date;

  onMount(async () => {
    const res = await fetch("/api/date");
    const newDate = await res.text();
    date = newDate;
  });
</script>

<main>
  <h1>Svelte + Ruby API</h1>
  <h2>
    Deployed with
    <a href="https://zeit.co/docs" target="_blank" rel="noreferrer noopener">
      ZEIT Now
    </a>
    !
  </h2>
  <p>
    <a
      href="https://github.com/zeit/now-examples/blob/master/svelte-ruby"
      target="_blank"
      rel="noreferrer noopener">
      This project
    </a>
    is a
    <a href="https://svelte.dev/">Svelte</a>
    app with three directories,
    <code>/public</code>
    for static assets,
    <code>/src</code>
    for components and content, and
    <code>/api</code>
    which contains a serverless
    <a href="https://www.ruby-lang.org/en/">Ruby</a>
    function. See
    <a href="/api/date">
      <code>api/date</code>
      for the Date API with Ruby
    </a>
    .
  </p>
  <br />
  <h2>The date according to Ruby is:</h2>
  <p>{date ? date : 'Loading date...'}</p>
</main>
