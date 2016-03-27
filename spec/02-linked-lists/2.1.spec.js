"use strict";

var SingleLinkedList = require('../../02-linked-lists/lib/sll');
var remove_duplicates = require('../../02-linked-lists/2.1');

describe('SingleLinkedList', function(){

    it('should just work™', function(){

        var list = new SingleLinkedList();

        list.add(1);
        list.add(2);
        list.add(1);
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);

        var current = list.head;
        expect(current.value).toBe(4);
        current = current.next;
        expect(current.value).toBe(3);
        current = current.next;
        expect(current.value).toBe(2);
        current = current.next;
        expect(current.value).toBe(1);
        current = current.next;
        expect(current.value).toBe(1);
        current = current.next;
        expect(current.value).toBe(2);
        current = current.next;
        expect(current.value).toBe(1);
        expect(current.next).toBeUndefined();

        list = remove_duplicates(list);
        current = list.head;
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