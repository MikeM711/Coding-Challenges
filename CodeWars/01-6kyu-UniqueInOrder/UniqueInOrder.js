var uniqueInOrder = function (iterable) {

    var uniqueArray = [];

    for (var i = 0; i < iterable.length; i++) {

        if (iterable[i - 1] == iterable[i]) {
            continue;
        }
        else {
            uniqueArray.push(iterable[i]);
        };

    }

    return uniqueArray;

}

module.exports = uniqueInOrder;

// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript