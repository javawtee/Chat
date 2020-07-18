module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./'],
          alias: {
            'assetSrc': './assets',
            'main': './dev/main',
            'utils': './utils',
            'apolloSrc': './dev/_apollo',
            'reduxSrc': './dev/_redux',
            'components': './dev/components'
          }
        }
      ]
    ]
  };
};
