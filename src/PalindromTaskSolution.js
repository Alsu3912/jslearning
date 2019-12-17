let palindrome = function(yourWord) {
    let result;
    // creating the array from the word
    let spell = Array.from(yourWord);
    // the word length determination
    let wordLength = yourWord.length;
    // parameter defenition for the loop
    let halfWord = Math.floor(wordLength/2);
    for (let i=0; i<=halfWord-1; i++, wordLength--) {
        if (spell[i] == spell[wordLength-1]) {
            result = true;
        } else {
            result = false;
            break;
        }
    }
    // this is the corner case
    if (wordLength == 0 || wordLength == 1) {
        result = true;
    }
    return result;
}
// recursive solution
var palindromeR = function(s) {
    var sArr = Array.from(s);
    return f(sArr, 0, sArr.length-1);
}
var f = function(arr, start, end) {
    if (start >= end) {return true;
    }
    return arr[start] == arr[end] && f(arr, start+1, end-1);
}