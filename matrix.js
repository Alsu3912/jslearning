var matrix = function (matrix1, matrix2) {
    var iLength = matrix1.length - 1;
    var jLength = matrix1[0].length - 1;
    var kLength = matrix2.length - 1;
    var lLength = matrix2[0].length - 1;
    var multResult = [];
    if (jLength != kLength) {
        throw "Exception";
    }
    for (var i = 0; i <= iLength; i++) {
        multResult.push([]);
        for (var l = 0; l <= lLength; l++) {
            multResult[i][l] = 0;
            for (var j = 0; j <= jLength; j++) {
                multResult[i][l] = multResult[i][l] + matrix1[i][j] * matrix2[j][l];
            }
        }
    }
    return multResult;
}