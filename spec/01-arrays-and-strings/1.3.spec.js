"use strict";

var module = require('../../01-arrays-and-strings/1.3.js');

describe('urlify', function(){
    it('should just work™', function(){
        expect(module.urlify("rofl")).toEqual("rofl");
        expect(module.urlify("rofl lol")).toEqual("rofl%20lol");
        expect(module.urlify("rofl  lol")).toEqual("rofl%20%20lol");
        expect(module.urlify("")).toEqual("");
        expect(module.urlify("   ")).toEqual("%20%20%20");
    });
});