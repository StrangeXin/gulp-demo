var gulp = require('gulp')
var RevAll = require('gulp-rev-all')
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

gulp.task("default", function () {
  return gulp.src(["src/**"])
    .pipe(RevAll.revision({ dontRenameFile: [".html"] }))
    .pipe(gulp.dest('dist'));
    // .pipe(RevAll.manifestFile())
    // .pipe(gulp.dest('dist'))
    // .pipe(RevAll.versionFile())
    // .pipe(gulp.dest('dist'));
})

gulp.task("clean", function () {
  return gulp.src("dist/*")
    .pipe(clean({force: true}))
})