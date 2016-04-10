"use strict";

var SLL = require('../../02-linked-lists/lib/single-linked-list');
var module = require('../../02-linked-lists/2.2');

describe('kth_to_last', function(){

    it('should just work™', function(){

        var list = new SLL();

        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6);
        list.append(7);
        list.append(8);
        list.append(9);
        list.append(10);

        var second_to_last = module.kth_to_last(list, 2);
        expect(second_to_last.value).toBe(9);
        var third_to_last = module.kth_to_last(list, 3);
        expect(third_to_last.value).toBe(8);
        var tenth_to_last = module.kth_to_last(list, 10);
        expect(tenth_to_last.value).toBe(1);

    });

});

describe('kth_to_last_recursive', function(){

    it('should just work™', function(){

        var list = new SLL();

        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6);
        list.append(7);
        list.append(8);
        list.append(9);
        list.append(10);

        var second_to_last = module.kth_to_last_recursive(list, 2);
        expect(second_to_last.value).toBe(9);
        var third_to_last = module.kth_to_last_recursive(list, 3);
        expect(third_to_last.value).toBe(8);
        var tenth_to_last = module.kth_to_last_recursive(list, 10);
        expect(tenth_to_last.value).toBe(1);

    });

});