import Link from 'next/link'

const ExampleLink = ({ slug, children }) => (
  <li>
    <Link href={`/example?example=${slug}`} as={`/examples/${slug}`}>
      <a>{children}</a>
    </Link>
  </li>
)

const ExamplesPage = () => (
  <div>
    <ul>
      <ExampleLink slug="misc-redirect">Misc Redirect</ExampleLink>
      <ExampleLink slug="node-hello-world">Node Hello World</ExampleLink>
    </ul>
  </div>
)

export default ExamplesPage
