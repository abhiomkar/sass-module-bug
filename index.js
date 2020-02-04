const sass = require('dart-sass');

const result = sass.renderSync({
    // file: './fixture-use.scss',
    file: './fixture-import.scss',
    includePaths: ['node_modules'],
    importer: function(url, prev, done) {
        console.log(url);
    },
});

console.log(result.css.toString());
