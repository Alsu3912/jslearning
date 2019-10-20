var zipArrays = function (arr1, arr2, transform) {
    var resultArr = [];
    var largerArr = [], 
        smallerArr = [];
    if (arr1.length >= arr2.length) {
        largerArr = arr1;
        smallerArr = arr2;
    } else {
        largerArr = arr2;
        smallerArr = arr1;
    }
    for (let x = 0; x <= smallerArr.length - 1; x++) {
        resultArr.push(transform(largerArr[x], smallerArr[x]));
    }
    for (let i = smallerArr.length; i <= largerArr.length - 1; i++) {
        resultArr.push(largerArr[i]);
    }
    return resultArr;
}