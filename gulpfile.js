const { src, dest, series } = require('gulp')
const revAll = require('gulp-rev-all') //给静态资源添加hash值，并更新文件依赖
const del = require('del')  //删除文件夹
// const useref = require('gulp-useref'); //按规则合并js、css
const browserSync = require('browser-sync').create() //多设备实时浏览器同步更新服务
const { createProxyMiddleware } = require('http-proxy-middleware') //本地开发代理跨域请求插件
const proxy = createProxyMiddleware(['/api'],{
  target: 'https://cmpay.csfullspeed.com',
  changeOrigin: true,
  pathRewrite: {
    '/api': ''
  }
})
const uglify = require('gulp-uglify') //压缩js
const htmlmin = require('gulp-htmlmin') //压缩html


//清空目录
function del_dist() {
  return del(['dist']);
}

//添加hash打包
function build() {
  return src(["src/**"])
    .pipe(revAll.revision({ dontRenameFile: [".html"] }))
    .pipe(dest('dist'));
  // .pipe(revAll.manifestFile())
  // .pipe(dest('dist'));
}

//合并html里的js、css
function html_useref() {
  return src(["dist/*.html"])
    .pipe(useref())
    .pipe(dest('dist'));
}

//开发静态服务器
function browser_sync() {
  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: "./src",
      middleware: [proxy]
    }
  })
}

//js压缩
function compress() {
  return src(["src/*.js"])
    .pipe(uglify())
    .pipe(dest('dist'));
}

//html压缩
function minify() {
  return src(["src/*.html"])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

exports.browser = series(browser_sync);
exports.default = series(del_dist, build);
