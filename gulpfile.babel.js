import gulp from "gulp";
import server from "gulp-develop-server";
import fs from "fs-extra";
import path from "path";
import babel from "gulp-babel";
import sass from "node-sass";
import resolve from "resolve";
import webpack from "webpack";

gulp.task('startserver', ["rebuildserver"], function() {
    server.listen({
        path: 'build/server'
    });
});

gulp.task('restartserver', ["rebuildserver"], function() {
    server.restart();
});

gulp.task('rebuildserver', function() {
    return gulp.src('server/**/*.*')
        .pipe(babel({}))
        .pipe(gulp.dest("build/server"));
});

gulp.task('buildjs', function(done) {
    webpack({
        entry: {
            "app.js": "./client/app.js",
        },
        output: {
            path: path.join(__dirname, "build/static"),
            filename: "[name]"
        },
        module: {
            loaders: [
                {
                    test: /.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
    }, function(err, stats) {
        if (stats) {
            console.log(stats.toString({}));
        }
        done(err);
    });
});

gulp.task("copystatic",
    function() {
        return gulp.src("static/**/*.*")
            .pipe(gulp.dest("build/static"));
    });

gulp.task('buildcss', function(done) {
    sass.render({
        file: "./css/index.scss",
        outFile: "./build/static/index.css",
        sourceMap: true,
        importer: [function(url, prev) {

            // first check if the file exists as specified
            var f = path.resolve(path.dirname(prev), url);
            if (fs.existsSync(f)) return { file: f };

            // or with .scss added
            var f2 = path.dirname(f) + "/" + path.basename(f, ".scss") + ".scss";
            if (fs.existsSync(f2)) return { file: f2 };

            // or with an underscore
            var f3 = path.dirname(f) + "/_" + path.basename(f, ".scss") + ".scss";
            if (fs.existsSync(f3)) return { file: f3 };

            // try using node resolve
            var f4 = url;
            // if it includes node_modules, remove it
            if (f4.indexOf("node_modules/") >= 0) {
                f4 = f4.substr(f4.lastIndexOf("node_modules/") + 13);
            }

            // resolve with require("resolve")
            try {
                f4 = resolve.sync(f4, {
                    basedir: path.dirname(prev),
                    extensions: [".scss"]
                });
                return { file: f4 };
            } catch (e) {
                console.log(e);
                // couldn't resolve it this way - ignore error and fall back to the default
            }
            return null;
        }]
    }, function(error, result) {
        if (error) {
            console.log(error);
            return;
        }
        fs.ensureDirSync("./build/static");
        fs.writeFileSync("./build/static/index.css", result.css);
        fs.writeFileSync("./build/static/index.css.map", result.map);
        done();
    });
});




gulp.task('buildprod', ["copystatic", "buildcss", "buildjs", "rebuildserver"]);

gulp.task('watch', ["copystatic", "buildcss", "startserver", "buildjs"], function() {

    gulp.watch('server/**/*.js', ["restartserver"]);

    gulp.watch('client/**/*.js', ["buildjs"]);

    gulp.watch('css/**/*.scss', ["buildcss"]);

    gulp.watch('static/**/*.*', ["copystatic"]);

});
