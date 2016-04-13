"use strict";

var DLL = require('../../02-linked-lists/lib/double-linked-list');
var module = require('../../02-linked-lists/2.6');

describe('palindrome', function(){

    it('should just work™', function(){

        var list;

        var non_palindrome_lists = [
            [1, 2, 3],
            ['a', 'n', 'd', 'r', 'e', 'a'],
            [1, 2, 3, 4, 1],
            [1, 2, 3, 3, 2, 1, 1]
        ];

        non_palindrome_lists.forEach(function(array){
            list = new DLL();
            array.forEach(function(value){
                list.append(value);
            });
            expect(module.palindrome(list)).toBe(false);
        });

        var palindrome_lists = [
            [1, 2, 3, 3, 2, 1],
            ['a', 'n', 'd', 'r', 'e', 'a', 'e', 'r', 'd', 'n', 'a'],
            [1, 2, 3, 4, 1, 4, 3, 2, 1],
            [1, 2, 3, 3, 3, 2, 1]
        ];

        palindrome_lists.forEach(function(array){
            list = new DLL();
            array.forEach(function(value){
                list.append(value);
            });
            expect(module.palindrome(list)).toBe(true);
        });

    });

});