// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: { webpackChunkName: true },
        title: 'Static UmiJS Example on Now 2.0',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
