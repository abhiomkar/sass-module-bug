module.exports = {
  mode: 'development',
  entry: './fixture-import.scss',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'css-loader',
            // Compiles Sass to CSS
          {
            loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['node_modules'],
                },
                implementation: require('dart-sass'),
            },
          },
        ],
      },
    ],
  },
};
