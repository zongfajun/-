// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });
// // 把js文件，css文件，jpg文件，png文件都使用hash
// fis.match('*.{js,css,jpg,png}', {
//   useHash: true
// });

// fis.match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });
// // fis.match('*.html', {
// //   //invoke fis-optimizer-html-minifier
// //   optimizer: fis.plugin('html-minifier')
// // });
// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });