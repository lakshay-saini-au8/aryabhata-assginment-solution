var gulp = require("gulp");
var sass = require("gulp-sass");
const babel = require("gulp-babel");
gulp.task("hello", function () {
  console.log("Hey it is running");
});
gulp.task("sass", function () {
  return gulp
    .src("./src/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/css"));
});
gulp.task("es5", () =>
  gulp
    .src("./src/app.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(gulp.dest("./dist/js"))
);
