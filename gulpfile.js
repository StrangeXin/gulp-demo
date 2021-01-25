const { src, dest, series } = require('gulp')
const revAll = require('gulp-rev-all')
const del = require('del');

function del_dist() {
  return del(['dist']);
}

function build() {
  return src(["src/**"])
    .pipe(revAll.revision({ dontRenameFile: [".html"] }))
    .pipe(dest('dist'))
    .pipe(revAll.manifestFile())
    .pipe(dest('dist'));
}

exports.default = series(del_dist, build)
