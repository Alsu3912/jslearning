module.exports = commentRemover;
 
function commentRemover(code) {
    var firstChange = quatation(code, "'", "<", ">");
    var secondChange = quatation(firstChange, '"', '<', '>');
    var re = /\/\/(?!.*>).*|\/\*(?!.*>)[^]*?\*\/|\/\*(?!.*>)[^]*?$/g;
    var clearedСode = secondChange.replace(re, "");
    var reBack = /<|>/g
    return clearedСode.replace(reBack, "'");
}

class JustString {
    constructor(str) {
        this.str = str;
    }
    replaceAt(index, replacement) {
        return this.str.substring(0, index) + replacement + this.str.substring(index + replacement.length);
    }
}

function quatation(text, typeOfQuotationMark, openingMark, closingMark) {
    var mutableStr = new JustString(text);
    var current = 0;
    for (var i = 0; i <= mutableStr.str.length; i++) {
        if (mutableStr.str.charAt(i) == typeOfQuotationMark) {
            current = current + 1;
            if (current % 2 == 1) {
                mutableStr.str = mutableStr.replaceAt(i, openingMark);
            } else {
                mutableStr.str = mutableStr.replaceAt(i, closingMark);
            }
        }
    }
    return mutableStr.str;
}