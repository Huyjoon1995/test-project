const { expect } = require('@jest/globals');
var twosum = require('./twosum');
test("should return array that contains index [0, 1] that sum up to 9 ", () => {
    var nums = [2, 7, 11, 15]
    var target = 9;
    var result = [0, 1];
    expect(twosum(nums, target)).toEqual(result);
});

test("should return array that contains index [1, 2] that sum up to 6", () => {
    var nums = [3, 2, 4];
    var target = 6;
    var result = [1,2];
    expect(twosum(nums, target)).toEqual(result);
});