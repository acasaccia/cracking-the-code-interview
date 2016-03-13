// Implement an algorithm to determine if a string has all unique characters.
// What if you can not use additional data structures?

// O(N) up to N additional space for the map
exports.is_unique = function(string) {
    var array_string = string.split('');
    var map = {};
    for (var i=0; i<array_string.length; i++) {
        if (map[array_string[i]] !== undefined) {
            return false;
        }
        map[array_string[i]] = true;
    }
    return true;
};

// O(N²) - no additional space
exports.is_unique_no_space = function(string) {
    var array_string = string.split('');
    for (var i=0; i<array_string.length; i++) {
        for (var j=i+1; j<array_string.length; j++) {
            if (array_string[i] === array_string[j]) {
                return false;
            }
        }
    }
    return true;
};

// O(N * log(N)) - no additional space (depending on sorting algorithm)
exports.is_unique_sorted = function(string) {
    var array_string = string.split('');
    array_string.sort();
    for (var i=0; i<array_string.length-1; i++) {
        if (array_string[i] === array_string[i+1]) {
            return false;
        }
    }
    return true;
};
