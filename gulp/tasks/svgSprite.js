const gulp =require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
	svgmin = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace');

module.exports = function svgSpriteBuild() {
  return gulp.src('src/img/icons/*.svg')
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(replace('&gt;', '>'))
		// build svg sprite
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../sprite.svg",
					render: {
						scss: {
							dest:'../../../src/styles/utils/_sprite.scss',
							template: "src/styles/utils/_sprite_template.scss"
						}
					}
				}
			}
		}))
		.pipe(gulp.dest('build/img'))
}

//
// gulp.task('svgSpriteBuild', function () {
//
// });
//
//
//
// gulp.task('svgSprite', ['svgSpriteBuild']);
