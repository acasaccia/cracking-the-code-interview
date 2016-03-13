// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate
// the image by 90 degrees. Can you do this in place?

function indexes_rotate(row, column, dimension, anticlockwise) {
    if (anticlockwise) {
        return {
            r: column,
            c: dimension - 1 - row
        }
    } else {
        return {
            r: dimension - 1 - column,
            c: row
        }
    }
}

exports.rotate_matrix = function(matrix, anticlockwise) {
    var dimension = matrix.length;
    var new_matrix = [];
    for (var r=0; r<dimension; r++) {
        new_matrix.push([]);
        for (var c=0; c<dimension; c++) {
            var from = indexes_rotate(r, c, dimension, anticlockwise);
            new_matrix[r][c] = matrix[from.r][from.c];
        }
    }
    return new_matrix;
};