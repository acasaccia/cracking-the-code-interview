// Given two strings write a method to decide if one is a permutation of the other.

exports.check_permutation = function(string_1, string_2) {
    var string_array_1 = string_1.split("");
    var string_array_2 = string_2.split("");
    return string_array_1.sort().join("") === string_array_2.sort().join("");
};