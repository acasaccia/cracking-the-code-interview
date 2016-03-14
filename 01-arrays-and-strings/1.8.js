// Write an algorithm such that if an element in N x M matrix is 0, its entire column and row are set to zero.

exports.zero_matrix = function zero_matrix(matrix) {
    var rows = {};
    var cols = {};
    for (var row=0; row < matrix.length; row++) {
        for (var col=0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                rows[row] = true;
                cols[col] = true;
            }
        }
    }

    for (var i in rows) {
        zero_row(i, matrix);
    }

    for (var j in cols) {
        zero_col(j, matrix);
    }

    return matrix;
};

function zero_row(row, matrix) {
    for (var col=0; col < matrix[row].length; col++) {
        matrix[row][col] = 0;
    }
}

function zero_col(col, matrix) {
    for (var row=0; row < matrix.length; row++) {
        matrix[row][col] = 0;
    }
}