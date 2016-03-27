// Write code to remove duplicates from an unsorted linked list
// How would you solve this problem if a temporary buffer is not allowed

exports.remove_duplicates = function(list) {
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

exports.remove_duplicates_no_space = function(list) {
    var current = list.head;
    var runner;
    while (current) {
        runner = current;
        while (runner.next) {
            if (runner.next.value === current.value) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        current = current.next;
    }
    return list;
};

