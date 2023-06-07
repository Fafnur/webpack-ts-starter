module.exports = ({ file, options, env }) => ({
  parser: false,
  plugins: {
    'postcss-import': {},
    'autoprefixer': {},
    cssnano: env === 'production' ? {} : false,
  },
});
