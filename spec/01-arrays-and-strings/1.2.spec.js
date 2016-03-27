var module = require('../../01-arrays-and-strings/1.2.js');

describe('check_permutation', function(){
    it('should just work™', function(){
        expect(module.check_permutation("lawl", "wall")).toBe(true);
        expect(module.check_permutation("lol lol", "lllloo ")).toBe(true);
        expect(module.check_permutation("lol rofl", "lol rafl")).toBe(false);
        expect(module.check_permutation("asdfghjkl", "asdqwefgh")).toBe(false);
    });
});