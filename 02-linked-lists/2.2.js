// Implement an algorithm to find the kth to last element of a singly linked list

exports.kth_to_last = function kth_to_last(list, k) {
    var list_size = size(list);
    var element_position = list_size - k;
    var c = 0;
    var current = list.head;
    while (c !== element_position) {
        current = current.next;
        c++
    }
    return current;
};

function size(list) {
    var c = 0;
    var current = list.head;
    while (current) {
        c++;
        current = current.next;
    }
    return c;
}

exports.kth_to_last_recursive = function kth_to_last_recursive(list, k) {

    var head = list.head;
    var result = null;

    var traverse_list = function(node) {
        if (node.next) {
            traverse_list(node.next);
        }
        k--;
        if (k === 0) {
            result = node;
        }
    };

    traverse_list(head);

    return result;
};
