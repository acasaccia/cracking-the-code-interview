"use strict";

var sll = require('../../02-linked-lists/lib/single-linked-list');
var module = require('../../02-linked-lists/2.1');

describe('remove_duplicates', function(){

    it('should just work™', function(){

        var list = new sll();

        list.add(1);
        list.add(2);
        list.add(1);
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);

        list = module.remove_duplicates(list);
        var current = list.head;
        expect(current.value).toBe(4);
        current = current.next;
        expect(current.value).toBe(3);
        current = current.next;
        expect(current.value).toBe(2);
        current = current.next;
        expect(current.value).toBe(1);
        expect(current.next).toBeUndefined();

    });

});

describe('remove_duplicates_no_space', function(){

    it('should just work™', function(){

        var list = new SingleLinkedList();

        list.add(1);
        list.add(2);
        list.add(1);
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);

        list = module.remove_duplicates_no_space(list);
        var current = list.head;
        expect(current.value).toBe(4);
        current = current.next;
        expect(current.value).toBe(3);
        current = current.next;
        expect(current.value).toBe(2);
        current = current.next;
        expect(current.value).toBe(1);
        expect(current.next).toBeUndefined();

    });

});