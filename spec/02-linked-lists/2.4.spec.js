"use strict";

var SLL = require('../../02-linked-lists/lib/single-linked-list');
var module = require('../../02-linked-lists/2.4');

describe('partition', function(){

    it('should just work™', function(){

        var list = new SLL();

        list.append(3);
        list.append(5);
        list.append(8);
        list.append(5);
        list.append(10);
        list.append(2);
        list.append(1);

        expect(list.display()).toBe("3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1");

        var pivot = 5;

        list = module.partition(list, pivot);

        var current = list.head;

        for (var i=0; i<3; i++) {
            expect(current.value < pivot).toBe(true);
            current = current.next;
        }

        for (var i=0; i<4; i++) {
            expect(current.value >= pivot).toBe(true);
            current = current.next;
        }

    });

});
