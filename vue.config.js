module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/comparaison-somme-ages/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
