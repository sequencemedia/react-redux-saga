module.exports = {
  compact: true,
  comments: false,
  presets: [
    '@babel/react',
    [
      '@babel/env', {
        useBuiltIns: 'entry',
        targets: {
          node: 'current',
          browsers: [
            'last 2 versions'
          ]
        },
        corejs: 3
      }
    ]
  ],
  plugins: [
    '@babel/transform-runtime',
    '@babel/proposal-class-properties',
    [
      'module-resolver', {
        root: ['./src'],
        cwd: 'babelrc',
        alias: {
          app: './src/app',
          stories: './stories'
        }
      }
    ]
  ]
};
