const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', server);

function server() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./src/js/**/*.js").on('change', browserSync.reload);
    gulp.watch("index.html").on('change', browserSync.reload);
    gulp.watch("./src/style/*.css").on('change', browserSync.reload);
};

gulp.task('default', server);