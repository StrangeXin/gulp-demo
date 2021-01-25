var gulp = require('gulp')
var RevAll = require('gulp-rev-all')
var rev = require('gulp-rev')
var clean = require('gulp-clean')
var RevClean = require('gulp-rev-dist-clean')

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

gulp.task("clean", function () {
  return gulp.src("dist/*")
    .pipe(clean({ force: true }))
})

gulp.task("build", function () {
  return gulp.src(["src/**"])
    .pipe(RevAll.revision({ dontRenameFile: [".html"] }))
    .pipe(gulp.dest('dist'))
    .pipe(RevAll.manifestFile())
    .pipe(gulp.dest('dist'));
})

gulp.task("default", gulp.series('clean', 'build'));