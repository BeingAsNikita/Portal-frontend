const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('source/sass/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('source/css'))
    .pipe(browserSync.stream());
});

gulp.task("server", function () {
    browserSync.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
    });
    
    gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("sass"));
    gulp.watch("source/*.html").on('change', browserSync.reload)
});

gulp.task("refresh", function (done) {
    server.reload();
    done();
    });

gulp.task("start", gulp.series("server"));