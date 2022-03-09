const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const csso = require('gulp-csso');
const server = require("browser-sync").create();
const rename = require("gulp-rename");

gulp.task("css", function() {
    return gulp.src("src/assets/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(csso())
    .pipe(rename("style-min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("src/css"))
    .pipe(server.stream());
    });

    gulp.task("server", function () {
    server.init({
    server: "src/",
    notify: false,
    open: true,
    cors: true,
    ui: false
    });

    gulp.watch("src/assets/less/**/*.less", gulp.series("css"));
    gulp.watch("src/*.html").on("change", server.reload);
    gulp.watch("src/js/*.js").on("change", server.reload);
    });

    gulp.task("start", gulp.series("css", "server"));

    gulp.task("refresh", function (done) {
    server.reload();
    done();
});
