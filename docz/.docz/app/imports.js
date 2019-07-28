export const imports = {
  'hello-world.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "hello-world" */ 'hello-world.mdx'),
}
