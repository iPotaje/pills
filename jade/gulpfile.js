var gulp      = require('gulp')
  , del       = require('del')
  , jade      = require('gulp-jade')
  , filter    = require('gulp-filter')
  , webserver = require('gulp-webserver')

  , src = {
      jade : 'src/templates/**/*.jade'
    }

  , build = {
        html : "dist/"
      , url  : 'http://localhost:8000/index.html'
    }
  ;

gulp

  //Delete files preprocessed
  .task('clean', () => {
    return del.sync([build.html])
  })

  .task('jade', ['clean'], () => {
    return gulp.src(src.jade)
      //filter out partials (folders and files starting with "_" )
      .pipe(filter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      }))
      //pip to jade plugin
      .pipe(jade())
      //tell gulp our output folder
      .pipe(gulp.dest(build.html));
  })

  .task('webserver', ['jade'], () => {
    gulp.src(build.html)
      .pipe(webserver({
          livereload        : true
        , open              : build.url
        , directoryListing  : true
      }))
  })

  .task("watcher", () => {
    gulp.watch([src.jade], ['jade']);
  })

  .task("default", ['clean', 'jade', 'webserver', 'watcher'])

  ;
