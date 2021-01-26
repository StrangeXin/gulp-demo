const { src, dest, series } = require('gulp')
const revAll = require('gulp-rev-all') //给静态资源添加hash值，并更新文件依赖
const del = require('del')  //删除文件夹
const browserSync = require('browser-sync').create() //多设备实时浏览器同步更新服务
const { createProxyMiddleware } = require('http-proxy-middleware') //本地开发代理跨域请求插件
const proxy = createProxyMiddleware(['/api'],{
  target: 'https://cmpay.csfullspeed.com',
  changeOrigin: true,
  pathRewrite: {
    '/api': ''
  }
})

//清空目录
function del_dist() {
  return del(['dist']);
}

//添加hash打包
function build() {
  return src(["src/**"])
    .pipe(revAll.revision({ dontRenameFile: [".html"] }))
    .pipe(dest('dist'));
}

//开发静态服务器
function browser_sync() {
  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: "./src",
      middleware: [proxy]  //配置代理
    }
  })
}

exports.browser = series(browser_sync);
exports.default = series(del_dist, build);
