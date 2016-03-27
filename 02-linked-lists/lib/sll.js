module.exports = function() {

    this.head = null;

    this.add = function SingleLinkedList_add(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            var tmp = this.head;
            this.head = new Node(value);
            this.head.next = tmp;
        }
    };

};

function Node(value) {
    this.value = value;
}