// const path = require('path');
// const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

// module.exports = ({ config }) => {
//   // config
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     loader: require.resolve('awesome-typescript-loader')
//   });
//   config.plugins.push(new TSDocgenPlugin());
//   config.resolve.extensions.push('.ts', '.tsx');
//   return config;
// };

// Awesome typescript
module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};

// Babel-loader
// module.exports = ({ config, mode }) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     exclude: /node_modules/,
//     use: [
//       {
//         loader: require.resolve('babel-loader'),
//         options: {
//           presets: [['react-app', { flow: false, typescript: true }]]
//         }
//       }
//     ],
//     include: [path.resolve(__dirname, '../src')]
//   });
//   config.plugins.push(new TSDocgenPlugin());
//   config.resolve.extensions.push('.ts', '.tsx');
//   return config;
// };
