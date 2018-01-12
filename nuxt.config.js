module.exports = {
  plugins: [
    '~plugins/filters.js',
    { src: '~plugins/modules.js', ssr: false }
  ],
  css: ['~node_modules/tachyons/css/tachyons.min.css'],
  head: {
    title: 'Cloudfoundry Buildpacks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cloudfoundry Buildpacks' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    vendor: [ "axios", "moment", "keen-ui", "vue-select" ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
