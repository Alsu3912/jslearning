var matrix = function (matrix1, matrix2) {
    var matrix1row = matrix1.length - 1;
    var matrix1column = matrix1[0].length - 1;
    var matrix2row = matrix2.length - 1;
    var matrix2column = matrix2[0].length - 1;
    var multResult = [];
    if (matrix1column != matrix2row) {
        throw "Multiplication of these matrices is impossible. The number of columns of the first matrix should be equal to the number of second matrix";
    }
    for (var i = 0; i <= matrix1row; i++) {
        multResult.push([]);
        for (var l = 0; l <= matrix2column; l++) {
            multResult[i][l] = 0;
            for (var j = 0; j <= matrix1column; j++) {
                multResult[i][l] = multResult[i][l] + matrix1[i][j] * matrix2[j][l];
            }
        }
    }
    return multResult;
}