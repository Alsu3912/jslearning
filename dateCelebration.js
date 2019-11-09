var dateCelebration = function (listOfCelebrations) {
    var currentWeekCelebrations = [];
    var curr = new Date();
    var first = curr.getDate() - curr.getDay() + 1;
    var last = first + 6;
    var firstDayOfWeek = new Date(curr.setDate(first));
    firstDayOfWeek.setHours(1, 0, 0, 0);
    var lastDayOfWeek = new Date(curr.setDate(last));
    lastDayOfWeek.setHours(23, 59, 59, 999)
    for (let element of listOfCelebrations) {
        let z = new Date(element);
        if (z >= firstDayOfWeek && z <= lastDayOfWeek) {
            currentWeekCelebrations.push(element);
        }
    }
    return currentWeekCelebrations;
}

// console.log(dateCelebration(["2019-08-15", "2019-10-12", "2019-10-21", "2019-10-25", "2019-10-27", "2019-10-28", "2019-12-30"]));

////////////////////////// another solution
var binarySearch = function (searchArr, searchingValue) {
    var start = 0,
        end = searchArr.length - 1,
        middle = Math.round((end + start) / 2);
    if (searchArr[end] <= searchingValue) {
        return end + 1;
    }
    if (searchArr[start] >= searchingValue) {
        return start;
    }
    for (; middle != end;) {
        if (searchArr[middle] >= searchingValue) {
            end = middle;
        } else {
            start = middle;
        }
        middle = Math.round((end + start) / 2);
    }
    return end;
}

var toDate = function (arr1) {
    return arr1.map(d => new Date(d));
};

// converting dates to string format 'YYYY-MM-DD'
var toStringDate = function (arr2) {
    return arr2.map(a => a.toISOString().substring(0, 10));
};

var findWeekRanges = function (arr) {
    if (!Array.isArray(arr)) {
        return [];
    }
    if (arr.length == 0) {
        return [];
    } 
    var dates = toDate(arr);
    var curr = new Date();
    var first = curr.getDate() - curr.getDay() + 1;
    var last = first + 6;
    var firstDayOfWeek = new Date(new Date().setDate(first));
    firstDayOfWeek.setHours(1, 0, 0, 0);
    var lastDayOfWeek = new Date(new Date().setDate(last));
    lastDayOfWeek.setHours(23, 59, 59, 999);
    var resultArrayDates = dates.slice(binarySearch(dates, firstDayOfWeek), binarySearch(dates, lastDayOfWeek));
    return toStringDate(resultArrayDates);
};

console.log(findWeekRanges(['2019-10-29', '2019-11-05', '2019-11-09', '2019-11-15']));
console.log(findWeekRanges('adv'));

module.exports = findWeekRanges;