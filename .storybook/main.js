const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.mdx',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../stories'),
    })
    // console.log(JSON.stringify(config, null, 2))
    return config
  },
}
