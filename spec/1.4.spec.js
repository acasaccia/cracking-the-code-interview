"use strict";

var module = require('../01-arrays-and-strings/1.4.js');

describe('palindrome_permutation', function(){
    it('should just work™', function(){
        expect(module.palindrome_permutation("rofl")).toBe(false);
        expect(module.palindrome_permutation("")).toBe(true);
        expect(module.palindrome_permutation("r")).toBe(true);
        expect(module.palindrome_permutation("rofllfor")).toBe(true);
        expect(module.palindrome_permutation("1234567890987654321")).toBe(true);
        expect(module.palindrome_permutation("aassddffgggghj")).toBe(false);
    });
});