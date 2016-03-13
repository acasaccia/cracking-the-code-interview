"use strict";

var module = require('../01-arrays-and-strings/1.1.js');

describe('is_unique', function(){
    it('should just work™', function(){

        ['is_unique', 'is_unique_no_space', 'is_unique_sorted'].forEach(function(method) {
            expect(module[method]("")).toBe(true);
            expect(module[method]("rofl")).toBe(true);
            expect(module[method]("1234567890")).toBe(true);
            expect(module[method]("asdfghjkl")).toBe(true);
            expect(module[method]("trololol")).toBe(false);
            expect(module[method]("roflcopter")).toBe(false);
            expect(module[method]("lawl!")).toBe(false); 
        });

    });
});