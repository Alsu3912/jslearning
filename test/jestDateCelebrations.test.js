const findWeekRanges = require('../src/dateCelebration');

//getting dates for the test - the test case depends on current date
var curr = new Date();
var first = curr.getDate() - curr.getDay() + 1;
var last = first + 6;
var monday = new Date(new Date().setDate(first));
monday.setHours(1, 0, 0, 0);
var sunday = new Date(new Date().setDate(last));
sunday.setHours(23, 59, 59, 999);

// converting dates to string format 'YYYY-MM-DD'
var toStringDate = function (date) {
    return date.toISOString().substring(0, 10);
};

// getting test dates that fall in the current week
var tuesday = toStringDate(new Date(new Date().setDate(first + 1))),
    wednesday = toStringDate(new Date(new Date().setDate(first + 2))),
    thursday = toStringDate(new Date(new Date().setDate(first + 3))),
    friday = toStringDate(new Date(new Date().setDate(first + 4))),
    saturday = toStringDate(new Date(new Date().setDate(first + 5)));

// getting test dates that do not fall in the current week
var tuesdayLastWeek = toStringDate(new Date(new Date().setDate(first - 6))),
    wednesdayLastWeek = toStringDate(new Date(new Date().setDate(first - 5))),
    saturdayLastWeek = toStringDate(new Date(new Date().setDate(first - 1))),
    mondayNextWeek = toStringDate(new Date(new Date().setDate(first + 7))),
    thursdayNextWeek = toStringDate(new Date(new Date().setDate(first + 11)));

test('All dates are in this week', function () {
    expect(findWeekRanges([tuesday, wednesday, thursday, friday, saturday])).toStrictEqual([tuesday, wednesday, thursday, friday, saturday]);
});
test('All dates are outside of this week', function () {
    expect(findWeekRanges([tuesdayLastWeek, wednesdayLastWeek, saturdayLastWeek, mondayNextWeek, thursdayNextWeek])).toStrictEqual([]);
});
test('Some dates fall on this week - dates from the begining or the end of an array are not included in this week', function() {
    expect(findWeekRanges([saturdayLastWeek, monday, sunday])).toStrictEqual([toStringDate(monday), toStringDate(sunday)]);
    expect(findWeekRanges([friday, saturday, mondayNextWeek])).toStrictEqual([friday, saturday]);
});
test('Some dates fall on this week - dates from the begining and the end of an array are not included in this week', function() {
    expect(findWeekRanges([tuesdayLastWeek, tuesday, saturday, thursdayNextWeek])).toStrictEqual([tuesday, saturday]);
});
test('Should work for empty array' , () => {
    expect(findWeekRanges([])).toStrictEqual([]);
});
test('Should work for null' , () => {
    expect(findWeekRanges(null)).toStrictEqual([]);
});
test('Should work for string' , () => {
    expect(findWeekRanges('abc')).toStrictEqual([]);
});
test('Should work for number' , () => {
    expect(findWeekRanges(68762)).toStrictEqual([]);
});
test('Should work for undefined' , () => {
    expect(findWeekRanges(undefined)).toStrictEqual([]);
});
test('Should work for boolean' , () => {
    expect(findWeekRanges(true)).toStrictEqual([]);
});
