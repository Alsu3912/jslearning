const merge = require("../intervals");

test('No intersection', () => {
    expect(merge([[0, 1], [3, 15], [75, 90]])).toStrictEqual([[0, 1], [3, 15], [75, 90]]);
});

test('An intersection takes place', () => {
    expect(merge([[10, 12], [3, 10], [1, 2]])).toStrictEqual([[1, 2], [3, 12]]);
});

test('Should work for empty array' , () => {
    expect(merge([])).toStrictEqual([]);
});

test('Should work with one array in an array', () => {
    expect(merge([[1, 2]])).toStrictEqual([[1, 2]]);
})
test('Should work for null' , () => {
    expect(merge(null)).toStrictEqual([]);
});
test('Should work for string' , () => {
    expect(merge('abc')).toStrictEqual([]);
});
test('Should work for number' , () => {
    expect(merge(68762)).toStrictEqual([]);
});
test('Should work for undefined' , () => {
    expect(merge(undefined)).toStrictEqual([]);
});
test('Should work for boolean' , () => {
    expect(merge(true)).toStrictEqual([]);
});
