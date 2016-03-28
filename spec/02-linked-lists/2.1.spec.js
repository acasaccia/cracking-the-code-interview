"use strict";

var sll = require('../../02-linked-lists/lib/single-linked-list');
var module = require('../../02-linked-lists/2.1');

describe('remove_duplicates', function(){

    it('should just work™', function(){

        var list = new sll();

        list.append(1);
        list.append(2);
        list.append(1);
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);

        expect(list.display()).toBe("1 -> 2 -> 1 -> 1 -> 2 -> 3 -> 4");
        list = module.remove_duplicates(list);
        expect(list.display()).toBe("1 -> 2 -> 3 -> 4");

    });

});

describe('remove_duplicates_no_space', function(){

    it('should just work™', function(){

        var list = new sll();

        list.append(1);
        list.append(2);
        list.append(1);
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);

        expect(list.display()).toBe("1 -> 2 -> 1 -> 1 -> 2 -> 3 -> 4");
        list = module.remove_duplicates_no_space(list);
        expect(list.display()).toBe("1 -> 2 -> 3 -> 4");

    });

});