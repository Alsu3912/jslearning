module.exports = commentRemover;
 
function commentRemover(code) {
    var firstChange = quotation(code, "'", "<", ">");
    var secondChange = quotation(firstChange, '"', '<', '>');
    var re = /\/\/(?!.*>).*|\/\*(?!.*>)[^]*?\*\/|\/\*(?!.*>)[^]*?$/g;
    var clearedСode = secondChange.replace(re, "");
    var reBack = /<|>/g
    return clearedСode.replace(reBack, "'");
}

function replaceAt(text, index, replacement) {
    return text.substring(0, index) + replacement + text.substring(index + replacement.length);
}

function quotation(text, typeOfQuotationMark, openingMark, closingMark) {
    var mutableStr = text;
    var current = 0;
    for (var i = 0; i <= mutableStr.length; i++) {
        if (mutableStr.charAt(i) == typeOfQuotationMark) {
            current = current + 1;
            if (current % 2 == 1) {
                mutableStr = replaceAt(mutableStr, i, openingMark);
            } else {
                mutableStr = replaceAt(mutableStr, i, closingMark);
            }
        }
    }
    return mutableStr;
}