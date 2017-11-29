1.打开终端 mkdir创建一个项目目录 不能叫gulp
2.通过终端cd 命令进入 该项目目录
3.执行npm init命令 初始化该目录，并生成package.json文件
4.执行npm install gulp --save-dev
5.执行npm install gulp-less --save-dev
6.执行npm install gulp-pug --save-dev
7.执行npm install gulp-plumber --save-dev
8.执行npm install gulp-clean-css --save-dev

当前目录下会生成node_moudles 检查有没有上面安装的插件，并检查
package.json文件里有没有这些插件的信息，保存成功没有

9.通过touch.js命令 生成创建gulpfile.js
10.通过mkdir 创建pug目录
11.通过mkdir 创建less目录

12.编辑 gulpfile.js

--save-dev：用来将安装的插件信息保存到package中


1.打开终端
2.通过mkdir 创建项目文件夹 名称不能叫gulp
3.通过 cd 进入到该文件夹
4.通过 touch 创建gulpfile.js
5.npm init 初始化该目录，建议大家一直按回车
，会在该目录下帮助创建一个package.json文件
6. sudo npm install gulp(生成node_moudles)
7.编辑gulpfile.js

gulp.task("任务名称",function(){
	要做的事情
})
gulp.src("文件的路径，相对的")
pipe("管道，输出到下一步")
gulp.dest("文件输出的路径，相对的")
gulp.watch("你监控的文件路径，相对的",["任务名称1","任务名称2"])