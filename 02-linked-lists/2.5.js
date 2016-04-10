// You have two numbers represented by a linked list, where each node contains a single digit. The digit are stored in
// *reverse* order, such that the 1's digit is at the head of the list . Write a function that adds the two numbers and
// returns the sum as a linked list.
//
// EXAMPLE
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
// Output: 2 -> 1 -> 9. That is, 912
//
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem.
//
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295
// Output: 9 -> 1 -> 2. That is, 912



exports.sum_lists = function(list1, list2) {

    var SLL = require('./lib/single-linked-list');

    var digit1 = list1.head;
    var digit2 = list2.head;

    var result = new SLL();
    var carry = 0;
    var digits_sum;

    while (digit1 !== undefined || digit2 !== undefined) {
        digits_sum = parseInt(digit1.value) + parseInt(digit2.value) + carry;
        result.append(digits_sum % 10);
        carry = Math.floor(digits_sum / 10);
        digit1 = digit1.next;
        digit2 = digit2.next;
    }

    return result;

};

exports.sum_dllists = function(list1, list2) {

    var DLL = require('./lib/double-linked-list');

    var digit1 = list1.tail;
    var digit2 = list2.tail;

    var result = new DLL();
    var carry = 0;
    var digits_sum;

    while (digit1 !== undefined || digit2 !== undefined) {
        digits_sum = parseInt(digit1.value) + parseInt(digit2.value) + carry;
        result.prepend(digits_sum % 10);
        carry = Math.floor(digits_sum / 10);
        digit1 = digit1.previous;
        digit2 = digit2.previous;
    }

    return result;

};