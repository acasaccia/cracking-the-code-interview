"use strict";

var clone = require('clone');
var module = require('../01-arrays-and-strings/1.7.js');

var original = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];

var rotated = [
    [ 7, 4, 1 ],
    [ 8, 5, 2 ],
    [ 9, 6, 3 ]
];

describe('rotate_matrix', function(){
    it('should just work™', function(){
        expect(module.rotate_matrix(original)).toEqual(rotated);
        expect(module.rotate_matrix(rotated, true)).toEqual(original);
        var original_copy = clone(original);
        expect(module.rotate_matrix_in_place(original_copy)).toEqual(rotated);
        expect(module.rotate_matrix_in_place(rotated, true)).toEqual(original);
    });
});