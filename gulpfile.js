const gulp = require('gulp');// подкл gulp
const concat = require('gulp-concat');// склеивает файлы
const minifyCss = require('gulp-minify-css');// сжим css
const imagemin = require('gulp-imagemin'); // сжатие картинок .png .jpeg .gif .svg
const cache = require('gulp-cache');//кеширование файлов
const browserSync = require('browser-sync');// сервер
const reload = browserSync.reload; // перезагрузка сервера
const shell = require('gulp-shell');//последовательно запустить задачи
const runSequence = require('run-sequence');// запуск задач по очереди
const clean = require('gulp-clean');// очистка файлов или папок
const order = require('gulp-order');// управляет порядком
const rigger = require('gulp-rigger');

path = {
    src: {
        html: "src/*.html",
        styles: ["src/css/tools/reset.css",
            "src/css/**/*.css"
        ],
        js: ["src/js/vendors/**/*.js",
            "src/js/*.js"
        ],
        images: "src/images",
        fonts: "src/fonts/**/*"
    },
    build: {
        html: "./build",
        css: "./build/css/",
        js: "./build/js/",
        images: "./build",
        fonts: "./build/fonts/"
    },
    watch: {
        html: "src/*.html",
        styles: "src/css/**/*.css",
        js: "src/js/**/*.js",
        images: "src/images/**/*",
        fonts: "src/fonts/"
    },
    clean: "./build"

};

gulp.task("html", function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}))
});


gulp.task("css", function () {
    gulp.src(path.src.styles)
   	.pipe(minifyCss())
        .pipe(concat('style.css'))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}))
});

gulp.task("js", function () {
    gulp.src(path.src.js)
        .pipe(order(['jquery-3.3.1.min.js', 'slick.min.js']))
        .pipe(concat("main.js"))
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}))
});

gulp.task("fonts", function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(reload({stream: true}))
});

gulp.task('images', function () {
    return gulp.src(path.src.images + '**/*')
        .pipe(cache(imagemin([
                imagemin.gifsicle({interlaced: true}), //сжатие .gif
                imagemin.jpegtran({progressive: true}), //сжатие .jpeg
                imagemin.optipng({optimizationLevel: 5}), //сжатие .png
                imagemin.svgo({                         // сжатие .svg
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                })
            ], {
                verbose: true  //отображает инфо о сжатии изображения
            })
        ))
        .pipe(gulp.dest(path.build.images))
        .pipe(reload({stream: true}));
});

gulp.task("clean", function () {
    gulp.src(path.build.html)
        .pipe(clean())
});

gulp.task("build", shell.task([
    "gulp clean",
    "gulp images",
    "gulp html",
    "gulp fonts",
    "gulp css",
    "gulp js"
]));

/* следит за изминениями в src*/
gulp.task("watch", function () {
    gulp.watch(path.watch.html, ["html"]);
    gulp.watch(path.watch.styles, ["css"]);
    gulp.watch(path.watch.js, ["js"]);
    gulp.watch(path.watch.images, ["images"]);
});

gulp.task("browser-sync", function () {
    browserSync({
        starPath: "/",
        server: {
            baseDir: "build"
        },
        notify: false
    })
});

gulp.task('server', function () {
    runSequence("build", "browser-sync", "watch")
});

gulp.task("default", ["build"]);

gulp.task("clear-cache", function () {
    cache.clearAll()
});