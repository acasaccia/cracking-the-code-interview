var Node = require('./list-node');
var SingleLinkedList = require('./single-linked-list');

module.exports = DoubleLinkedList;

function DoubleLinkedList() {}

DoubleLinkedList.prototype = SingleLinkedList.prototype;

DoubleLinkedList.prototype.append = function DoubleLinkedList_append(value) {
    if (!this.head) {
        this.head = new Node(value);
        this.tail = this.head;
    } else {
        var new_node = new Node(value);
        var previous_tail = this.tail;
        this.tail = new_node;
        this.tail.previous = previous_tail;
        previous_tail.next = this.tail;
    }
};

DoubleLinkedList.prototype.prepend = function DoubleLinkedList_prepend(value) {
    if (!this.head) {
        this.head = new Node(value);
        this.tail = this.head;
    } else {
        var new_node = new Node(value);
        var previous_head = this.head;
        this.head = new_node;
        previous_head.previous = this.head;
        this.head.next = previous_head;
    }
};