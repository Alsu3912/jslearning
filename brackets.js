var brackets = function(yourString) {
    var current = 0;
    for (const element of yourString) {
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