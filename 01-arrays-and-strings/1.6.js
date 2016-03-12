// Implement a method to perform basic string compression using the counts of repeated characters. For example the
// string aabcccccaaa would become a2b1c5a3. If the 'compressed' string would not become smaller than the original
// string, your method should return the original string. You can assume the string has only uppercase and lowercase
// letters (a - z).

exports.compress = function compress(string) {
    var current_char;
    var next_char;
    var sequence = 1;
    var result = '';
    for (var i=0; i<string.length; i++) {
        current_char = string.charAt(i);
        next_char = string.charAt(i+1);
        if (current_char === next_char) {
            sequence++;
        } else {
            result += current_char + sequence;
            sequence = 1;
        }

    }
    return string.length > result.length ? result : string;
};

exports.compress_string_builder = function compress(string) {
    var current_char;
    var next_char;
    var sequence = 1;
    var string_builder = new StringBuilder();
    for (var i=0; i<string.length; i++) {
        current_char = string.charAt(i);
        next_char = string.charAt(i+1);
        if (current_char === next_char) {
            sequence++;
        } else {
            string_builder.add(current_char + sequence);
            sequence = 1;
        }

    }
    var result = string_builder.toString();
    return string.length > result.length ? result : string;
};

// NB: this is not needed in Javascript (JS engines optimize this for us)
// http://stackoverflow.com/questions/51185/are-javascript-strings-immutable-do-i-need-a-string-builder-in-javascript
// However let's implement it just to show that I know it wouldn't be a good idea to concatenate strings iteratively in
// a low level language O(N²)

function StringBuilder() {

    var string_chunks = [];

    this.add = function (chunk) {
        string_chunks.push(chunk);
    };

    this.toString = function() {
        return string_chunks.join("");
    };

}