// Given a string, write a function to check if it's a permutation of a palindrome. A palindrome is a word or phrase
// that reads the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need
// to be limited to just dictionary words.

exports.palindrome_permutation = function(string) {
    var string_array = string.split("");
    var odd = {};
    var char;
    for (var i=0; i<string.length; i++) {
        char = string_array[i];
        if (odd[char]) {
            delete odd[char];
        } else {
            odd[char] = true;
        }
    }
    return Object.keys(odd).length <= 1;
};