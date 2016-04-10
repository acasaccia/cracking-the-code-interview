var Node = require('./list-node');

module.exports = SingleLinkedList;

function SingleLinkedList() {}

SingleLinkedList.prototype.append = function SingleLinkedList_append(value) {
    if (!this.head) {
        this.head = new Node(value);
        this.tail = this.head;
    } else {
        var new_node = new Node(value);
        this.tail.next = new_node;
        this.tail = new_node;
    }
};

SingleLinkedList.prototype.display = function SingleLinkedList_display() {
    var values = [];
    var current = this.head;
    while (current) {
        values.push(current.value);
        current = current.next;
    }
    return values.join(" -> ");
};