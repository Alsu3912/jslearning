var merge = function (intervals) {
    if (!Array.isArray(intervals) || !intervals.length)
        return [];
    if (intervals.length === 1)
        return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    //console.log(intervals);
    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const current = result[result.length - 1];
        const next = intervals[i];
        if (current[1] >= next[0]) {
            const newInterval = [current[0], Math.max(current[1], next[1])];
            result[result.length - 1] = newInterval;
        } else {
            result.push(next);
        }
    }
    return result;
};

console.log(merge([[1, 3], [1, 5], [8, 10], [8, 9], [8, 10], [15, 18]]));

module.exports = merge;