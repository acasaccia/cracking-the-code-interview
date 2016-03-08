"use strict";

[
    '../01-arrays-and-strings/1.1.1.js',
    '../01-arrays-and-strings/1.1.2.js',
    '../01-arrays-and-strings/1.1.3.js'
].forEach(function(source){
    var module = require(source);
    describe('is_unique', function(){
        it('should just work™', function(){
            expect(module.is_unique("")).toBe(true);
            expect(module.is_unique("rofl")).toBe(true);
            expect(module.is_unique("1234567890")).toBe(true);
            expect(module.is_unique("asdfghjkl")).toBe(true);
            expect(module.is_unique("trololol")).toBe(false);
            expect(module.is_unique("roflcopter")).toBe(false);
            expect(module.is_unique("lawl!")).toBe(false);
        });
    });
});
