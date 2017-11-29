//如何在gulpfile中引用别的插件
//1.确定自己的电脑中已经安装了node npm gulp
// var定义一个容器，变量名叫gulp

var gulp = require("gulp")
var pug = require("gulp-pug")
var less = require("gulp-less")
var plumber = require("gulp-plumber")
// 压缩css
// var cleanCss = require("gulp-clean-css")
var rename = require("gulp-rename")
var autoprefixer = require("gulp-autoprefixer")
var plugins = require("gulp-load-plugins")()
// var Q = require("q")
//测试语句
//输出语句
console.log("hello")
//定义任务
//gulp.task("任务名,function(){
//	//任务逻辑
//})
gulp.task("1hao",function(){
	// 找到pug文件
	// 编译pug文件成html
	// 把html放在另外一个目录下
	gulp.src("pug/*.pug")
	.pipe(plumber())
	.pipe(pug())
	.pipe(gulp.dest("html/"));
})
gulp.task("2hao",function(){
	// 找到less文件
	// 编译less文件成css
	// 把css放在另外一个目录下
	gulp.src("less/*.less")
	.pipe(autoprefixer())
	.pipe(plumber())
	.pipe(less())
	.pipe(gulp.dest("css/"))
})
gulp.task("3hao",function(){
	gulp.watch("pug/*.pug",["1hao"])
	gulp.watch("less/*.less",["2hao"])
})

//gulp.task("4hao",function(){
//	console.log("我是胡自鲜")
//})