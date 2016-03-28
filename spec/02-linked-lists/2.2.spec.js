"use strict";

var sll = require('../../02-linked-lists/lib/single-linked-list');
var module = require('../../02-linked-lists/2.2');

describe('kth_to_last', function(){

    it('should just work™', function(){

        var list = new sll();

        list.add(10);
        list.add(9);
        list.add(8);
        list.add(7);
        list.add(6);
        list.add(5);
        list.add(4);
        list.add(3);
        list.add(2);
        list.add(1);

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

        var list = new SingleLinkedList();

        list.add(10);
        list.add(9);
        list.add(8);
        list.add(7);
        list.add(6);
        list.add(5);
        list.add(4);
        list.add(3);
        list.add(2);
        list.add(1);

        var second_to_last = module.kth_to_last_recursive(list, 2);
        expect(second_to_last.value).toBe(9);
        var third_to_last = module.kth_to_last_recursive(list, 3);
        expect(third_to_last.value).toBe(8);
        var tenth_to_last = module.kth_to_last_recursive(list, 10);
        expect(tenth_to_last.value).toBe(1);

    });

});