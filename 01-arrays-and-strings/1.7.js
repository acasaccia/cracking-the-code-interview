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

exports.rotate_matrix_in_place = function(matrix, anticlockwise) {
    var dimension = matrix.length;
    var rows = Math.floor(dimension / 2);
    var tmp;
    for (var i=0; i<rows; i++) {
        var limit = Math.ceil(matrix[i].length / 2);
        for (var j=0; j<limit; j++) {
            tmp = matrix[i][j];
            var from;
            var to = {
                r: i,
                c: j
            };
            for (var c=0; c<3; c++) {
                from = indexes_rotate(to.r, to.c, dimension, anticlockwise);
                matrix[to.r][to.c] = matrix[from.r][from.c];
                to = from;
            }
            matrix[to.r][to.c] = tmp;
        }
    }
    return matrix;
};