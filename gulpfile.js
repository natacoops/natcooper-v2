var gulp = require('gulp');
var p = require('gulp-load-plugins')();

var livereload = require('gulp-livereload');

gulp.task('styles',function() {
  gulp.src('source/css/style.scss')
    .pipe(p.plumber())
    .pipe(p.sourcemaps.init())
    .pipe(p.sass())
    .pipe(p.autoprefixer())
    .pipe(p.sourcemaps.write('.'))
    .pipe(gulp.dest('./build/'))
    .pipe(livereload())
});

gulp.task('scripts',function() {
  gulp.src('source/js/*.js')
	.pipe(p.sourcemaps.init())
	.pipe(p.concat('scripts.js'))
    .pipe(p.uglify())
	.pipe(p.sourcemaps.write('.'))
    .pipe(gulp.dest('./build/'))
});


gulp.task('watch',function() {
  p.livereload.listen();
  gulp.watch('source/css/*.scss', ['styles']);
  gulp.watch('source/js/*.js', ['scripts']);
});


gulp.task('default',['styles', 'scripts', 'watch']);



