"use strict";

var module = require('../01-arrays-and-strings/1.6.js');

describe('compress', function(){
    it('should just work™', function(){
        expect(module.compress("aabcccccaaa")).toEqual("a2b1c5a3");
        expect(module.compress("abcdefghilm")).toEqual("abcdefghilm");
    });
});
