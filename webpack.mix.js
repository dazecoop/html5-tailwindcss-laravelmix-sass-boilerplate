const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-eslint');

mix

  // JS
  .js('./src/js/app.js', './dist/js').eslint()

  // SASS
  .sass('./src/sass/style.scss', './dist/css')

  // Options
  .options({
    postCss: [ tailwindcss('./tailwind.config.js') ],
    processCssUrls: false,
    terser: {
      extractComments: false, // Stop Mix from generating license file
    }
  })

  // Copy HTML files
  .copy('src/*.html', 'dist')

  // Copy Image directory
  .copyDirectory('src/img', 'dist/img')

  // BrowserSync
  .browserSync({
    proxy: false,
    server: 'dist',
    files: [
      'dist/**/*.{css,js,html,php,jpg,jpeg,png,gif,svg}',
    ]
  })
