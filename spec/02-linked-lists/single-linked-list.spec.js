"use strict";

var SingleLinkedList = require('../../02-linked-lists/lib/single-linked-list');

describe('SingleLinkedList', function(){

    it('should just work™', function(){
        var list = new SingleLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.display()).toBe("1 -> 2 -> 3");
    });

});