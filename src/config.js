export default createPostCss(options) {
  options = options || {};

  return [
    require('gulp'),
    require('gulp-postcss'),
    require('autoprefixer')
  ];
}