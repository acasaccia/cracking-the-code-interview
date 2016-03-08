// Write a method to replace all spaces in a string with ‘%20’.

exports.urlify = function(string) {
    var array_string = string.split("");
    var occurrences = 0;
    for (var i=0; i<array_string.length; i++) {
        if (array_string[i] === " ") {
            occurrences++;
        }
    }
    if (!occurrences) {
        return array_string.join('');
    }
    var new_array_string_size = array_string.length + occurrences*2;
    var new_array_string = Array(new_array_string_size);
    var tail = new_array_string_size - 1;
    for (var i=array_string.length-1; i>=0; i--) {
        if (array_string[i] !== " ") {
            new_array_string[tail--] = array_string[i];
        } else {
            new_array_string[tail--] = "0";
            new_array_string[tail--] = "2";
            new_array_string[tail--] = "%";
        }
    }
    return new_array_string.join('');
};