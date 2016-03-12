// There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a
// character. Given two strings, write a function to check if they are one edit (or zero edits) away.

/**
 * Returns true if string_1 and string_2 are zero or one edit away, false otherwise
 * @param string_1
 * @param string_2
 * @returns {boolean}
 */
module.exports = function one_away(string_1, string_2) {
    if (string_1.length - string_2.length > 1) {
        return false;
    }
    // zero edits away
    if (string_1 === string_2) {
        return true;
    }
    if (string_1.length - string_2.length < 0){
        var tmp = string_1;
        string_1 = string_2;
        string_2 = tmp;
    }
    // insert a character or remove a character
    if (string_1.length - string_2.length === 1) {
        var i1 = 0; // iterator on string_1 (longer)
        var i2 = 0; // iterator on string_2 (shorter)
        while (i1<string_1.length) {
            if (string_1.charAt(i1) !== string_2.charAt(i2)) {
                i1++;
            } else {
                i1++;
                i2++;
            }
        }
        if (i1 - i2 < 2) {
            return true;
        }
    }
    // replace a character
    var differences = 0;
    var i = 0;
    while (i<string_1.length) {
        if (string_1.charAt(i) !== string_2.charAt(i)) {
            differences++;
        }
        i++;
    }
    if (differences === 1) {
        return true;
    }
    return false;
};