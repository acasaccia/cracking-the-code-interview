// Implement an algorithm to determine if a string has all unique characters.
// What if you can not use additional data structures?

exports.is_unique = function(string) {
    var array_string = string.split('');
    array_string.sort();
    for (var i=0; i<array_string.length-1; i++) {
        if (array_string[i] === array_string[i+1]) {
            return false;
        }
    }
    return true;
};
