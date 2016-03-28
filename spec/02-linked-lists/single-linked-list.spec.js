"use strict";

var SingleLinkedList = require('../../02-linked-lists/lib/single-linked-list');

describe('SingleLinkedList', function(){

    it('should just work™', function(){
        var list = new SingleLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        var current = list.head;
        expect(current.value).toBe(3);
        current = current.next;
        expect(current.value).toBe(2);
        current = current.next;
        expect(current.value).toBe(1);
        expect(current.next).toBeUndefined();
    });

});