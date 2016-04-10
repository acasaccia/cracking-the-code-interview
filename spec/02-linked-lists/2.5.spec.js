"use strict";

var SLL = require('../../02-linked-lists/lib/single-linked-list');
var DLL = require('../../02-linked-lists/lib/double-linked-list');
var module = require('../../02-linked-lists/2.5');

describe('sum_lists', function(){

    it('should just work™', function(){

        var list1 = new SLL();

        list1.append(7);
        list1.append(1);
        list1.append(6);

        var list2 = new SLL();

        list2.append(5);
        list2.append(9);
        list2.append(2);

        expect(module.sum_lists(list1, list2).display()).toBe("2 -> 1 -> 9");

    });

});

describe('sum_dllists', function(){

    it('should just work™', function(){

        var list1 = new DLL();

        list1.append(6);
        list1.append(1);
        list1.append(7);

        var list2 = new DLL();

        list2.append(2);
        list2.append(9);
        list2.append(5);

        expect(module.sum_dllists(list1, list2).display()).toBe("9 -> 1 -> 2");

    });

});
