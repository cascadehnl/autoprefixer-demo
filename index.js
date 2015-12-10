// Regular Node way
var fs = require("fs")
var postcss = require("postcss")
var atImport = require("postcss-import")
var autoprefixer = require("autoprefixer")
var nested = require("postcss-nested")

// Example custom PostCSS plugin (inlined)
var remove = postcss.plugin('remove', function (opts) {

    opts = opts || {};

    // Work with options here

    return function (css, result) {

        // Transform CSS AST here

        css.walkDecls(opts, function (decl) {
            decl.remove();
        });
    };
});

// Read in CSS to process
var css = fs.readFileSync("src/style_nested.css", "utf8")

// Process CSS with PostCSS
var output = postcss([autoprefixer, nested, remove('opacity')])
  .use(atImport())
  .process(css, {
    from: "./src/style_nested.css",
    to: "./css/style.css"
  })
  .css

// Output CSS
fs.writeFile("css/style.css", output, 'utf-8')