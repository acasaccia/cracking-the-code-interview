// Write code to remove duplicates from an unsorted linked list
// How would you solve this problem if a temporary buffer is not allowed

module.exports = function remove_duplicates(list) {
    var seen = {};
    var current = list.head;
    var previous = null;
    while (current) {
        if (seen[current.value]) {
            previous.next = current.next;
        } else {
            seen[current.value] = true;
            previous = current;
        }
        current = current.next;
    }
    return list;
};

