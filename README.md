Not reproducible with dart-sass CLI:

```
$ npx dart-sass --load-path="./node_modules" fixture-import.scss
```

Reproducible when compiled using sass-loader (Webpack plugin):

```
$ npx webpack --config=webpack.config.js
Hash: bdf8ee812cf608b6e3a8
Version: webpack 4.41.5
Time: 318ms
Built at: 02/04/2020 10:09:49 AM
  Asset      Size  Chunks             Chunk Names
main.js  4.25 KiB    main  [emitted]  main
Entrypoint main = main.js
[./fixture-import.scss] 434 bytes {main} [built] [failed] [1 error]

ERROR in ./fixture-import.scss
Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
SassError: Can't find stylesheet to import.
  ╷
1 │ @forward "@material/base" as mdc-base-*;
  │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  node_modules/@material/button/_mixins.import.scss 1:1  @import
  /Users/abhiomkar/code/sass-bug-module/fixture-import.scss 1:9                                              root stylesheet
```

Changing webpack entry file `fixture-import.scss` => `fixture-use.scss` would fix the error.
