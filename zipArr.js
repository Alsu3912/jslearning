var zipArrays = function (arr1, arr2, transform) {
    var resultArr = [];
    if (arr1.length >= arr2.length) {
        for (let x = 0; x <= arr2.length - 1; x++) {
            resultArr.push(transform(arr1[x], arr2[x]));
        }
        for (let i = arr2.length; i <= arr1.length - 1; i++) {
            resultArr.push(arr1[i]);
        }
    } else if (arr1.length < arr2.length) {
        for (let x = 0; x <= arr1.length - 1; x++) {
            resultArr.push(transform(arr1[x], arr2[x]));
        }
        for (let j = arr1.length; j <= arr2.length - 1; j++) {
            resultArr.push(arr2[j]);
        }
    }
    return resultArr;
}
