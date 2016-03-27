"use strict";

var one_away = require('../../01-arrays-and-strings/1.5');

describe('one_away', function(){
    it('should just work™', function(){
        expect(one_away("", "")).toBe(true);
        expect(one_away("", "a")).toBe(true);
        expect(one_away("pale", "ple")).toBe(true);
        expect(one_away("pales", "pale")).toBe(true);
        expect(one_away("pale", "bale")).toBe(true);
        expect(one_away("123456789", "12346789")).toBe(true);
        expect(one_away("12346789", "123456789")).toBe(true);
        expect(one_away("123156789", "123456789")).toBe(true);
        expect(one_away("111456789", "123456789")).toBe(false);
        expect(one_away("123456789", "1234567")).toBe(false);
    });
});