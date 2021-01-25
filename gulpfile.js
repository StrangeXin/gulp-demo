var gulp = require('gulp')
var RevAll = require('gulp-rev-all')
var clean = require('gulp-clean')

function transpile(cb) {
  // body omitted
  cb();
}

function bundle(cb) {
  // body omitted
  cb();
}

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

// exports.build = series(transpile, bundle);
// exports.default = defaultTask

gulp.task("default", function(){
  return gulp.src(["src/**"])
  .pipe(RevAll.revision())
  .pipe(gulp.dest('dist'))
  .pipe(RevAll.manifestFile())
  .pipe(gulp.dest('dist'));
})