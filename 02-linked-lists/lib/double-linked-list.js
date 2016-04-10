module.exports = function DoubleLinkedList() {

    this.append = function DoubleLinkedList_append(value) {
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

    this.prepend = function DoubleLinkedList_append(value) {
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

    this.display = function DoubleLinkedList_display() {
        var values = [];
        var current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values.join(" -> ");
    };

};

function Node(value) {
    this.value = value;
}