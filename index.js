// Regular Node way
var fs = require("fs")
var postcss = require("postcss")
var atImport = require("postcss-import")
var autoprefixer = require("autoprefixer")
var nested = require("postcss-nested")

// Read in CSS to process
var css = fs.readFileSync("src/style_nested.css", "utf8")

// Process CSS with PostCSS
var output = postcss([autoprefixer, nested])
  .use(atImport())
  .process(css, {
    from: "./src/style_nested.css",
    to: "./css/style.css"
  })
  .css

// Output CSS
fs.writeFile("css/style.css", output, 'utf-8')