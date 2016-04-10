// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater
// than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x
// (see below). The partition element x can appear anywhere in the "right" partition; it does not need to appear between
// the left and the right partitions.
//
// EXAMPLE
// Input:   3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition 5]
// Output:  3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

var sll = require('./lib/single-linked-list');


exports.partition = function(list, pivot) {
    var left = new sll();
    var right = new sll();
    var current = list.head;
    while (current) {
        if (current.value < pivot) {
            if (left.head === null) {
                left.head = current;
                left.tail = current;
            } else {
                left.tail.next = current;
                left.tail = current;
            }
        } else {
            if (right.head === null) {
                right.head = current;
                right.tail = current;
            } else {
                right.tail.next = current;
                right.tail = current;
            }
        }
        current = current.next;
    }
    left.tail.next = right.head;
    return left;
};