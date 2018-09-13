import dynamic from 'next/dynamic'

const Components = {
  'misc-redirect': dynamic(import('../misc-redirect/readme.md')),
  'node-hello-world': dynamic(import('../node-hello-world/readme.md'))
}

const ExamplePage = ({ example }) => {
  const Component = Components[example]

  return (
    <div>
      <Component />
    </div>
  )
}

ExamplePage.getInitialProps = ({ query }) => {
  return { example: query.example }
}

export default ExamplePage
