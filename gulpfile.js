var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    rename     = require('gulp-rename'),
    minifyCss  = require('gulp-minify-css');

gulp.task('sass', function(){
    return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('js', function(){
    return gulp.src('app/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

gulp.task('watch', function() {
    gulp.watch('app/scss/*.scss', ['sass'])
    gulp.watch('app/js/*.js', ['js'])
})