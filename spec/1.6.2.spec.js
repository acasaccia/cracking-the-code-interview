/**
 * The following together with 1.6.1 proves that a StringBuilder does not give a significant advantage in Javascript
 * http://stackoverflow.com/questions/51185/are-javascript-strings-immutable-do-i-need-a-string-builder-in-javascript
 */
var big_string = require("fs").readFileSync(process.cwd() + "/spec/data/big_string.txt", "utf-8");
var module = require('../01-arrays-and-strings/1.6.js');

console.time("Compress: StringBuilder");
module.compress_string_builder(big_string);
console.timeEnd("Compress: StringBuilder");
