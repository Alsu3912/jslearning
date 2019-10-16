var brackets = function(yourString) {
    var arrayFromYourString = Array.from(yourString);
    var current = 0;
    for (let element of arrayFromYourString) {
        if (element == "(") {
            current = current + 1;
        } else if (element == ")") {
            current = current - 1;
        }
        if (current < 0) {
            return false;
        }
    }
    return current == 0;
}