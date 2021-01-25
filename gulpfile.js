const { src, dest, series } = require('gulp')
const revAll = require('gulp-rev-all') //给静态资源添加hash值，并更新文件依赖
const del = require('del');  //删除文件夹
// const useref = require('gulp-useref'); //按规则合并js、css

function del_dist() {
  return del(['dist']);
}

function build() {
  return src(["src/**"])
    .pipe(revAll.revision({ dontRenameFile: [".html"] }))
    .pipe(dest('dist'));
    // .pipe(revAll.manifestFile())
    // .pipe(dest('dist'));
}

function html_useref() {
  return src(["dist/*.html"])
    .pipe(useref())
    .pipe(dest('dist'));
}

exports.default = series(del_dist, build);
