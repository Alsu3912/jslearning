class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
var merge = function (intervals) {
    if (!Array.isArray(intervals) || !intervals.length)
        return [];
    if (intervals.length === 1)
        return intervals;
    // intervals.sort((a, b) => a[0] - b[0]);
    var arrayOfIntervalClass = intervals.map(x => new Interval(x[0], x[1]));
    arrayOfIntervalClass.sort((prev, next) => prev.start - next.start);
    const result = [arrayOfIntervalClass[0]];
    for (let i = 1; i < arrayOfIntervalClass.length; i++) {
        const current = result[result.length - 1];
        const next = arrayOfIntervalClass[i];
        if (current.end >= next.start) {
            const newInterval = new Interval(current.start, Math.max(current.end, next.end))
            //[current[0], Math.max(current[1], next[1])];
            result[result.length - 1] = newInterval;
        } else {
            result.push(next);
        }
    }
    var resultArrayOfIntervals = result.map(z => new Array(z.start, z.end));
    return resultArrayOfIntervals;
};
module.exports = merge;