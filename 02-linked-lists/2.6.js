// Implement a function to check if a linked list is palindrome

exports.palindrome = function(list) {
    var head = list.head;
    var tail = list.tail;
    while(head !== tail) {
        if (tail === head.next) {
            return tail.value === head.value;
        }
        if (tail.value !== head.value) {
            return false;
        }
        head = head.next;
        tail = tail.previous;
    }
    return true;
};