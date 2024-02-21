module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('postcss-import')(),
    require('postcss-custom-media')(),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'custom-media-queries': {preserve: true },
      },
      browsers: 'last 2 versions',
    })
  ]
}
