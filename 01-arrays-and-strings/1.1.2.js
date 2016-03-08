// Implement an algorithm to determine if a string has all unique characters.
// What if you can not use additional data structures?

exports.is_unique = function(string) {
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
