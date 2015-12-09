// Gulp way
var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')

// Task Gulp with piping CSS through PostCSS
gulp.task('css', function() {
  var processors = [autoprefixer]

  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css/'))
});

// Define Gulp default task(s)
gulp.task('default', ['css'])
