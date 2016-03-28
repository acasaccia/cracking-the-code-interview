"use strict";

var sll = require('../../02-linked-lists/lib/single-linked-list');
var module = require('../../02-linked-lists/2.3');

describe('delete_middle_node', function(){

    it('should just work™', function(){

        var list = new sll();

        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);

        var node = list.tail;

        list.append(6);
        list.append(7);
        list.append(8);
        list.append(9);
        list.append(10);

        expect(list.display()).toBe("1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10");

        module.delete_middle_node(node);

        expect(list.display()).toBe("1 -> 2 -> 3 -> 4 -> 6 -> 7 -> 8 -> 9 -> 10");

    });

});
