// Implement an algorithm to determine if a string has all unique characters.
// What if you can not use additional data structures?

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