"use strict";

var module = require('../../01-arrays-and-strings/1.7');

var original = [];
var dimension = 1000;

for (var i=0; i<dimension; i++) {
    original.push([]);
    for (var j=0; j<dimension; j++) {
        original[i].push(i*dimension + j);
    }
}

console.time("Rotate matrix: In place");
module.rotate_matrix_in_place(original);
console.timeEnd("Rotate matrix: In place");