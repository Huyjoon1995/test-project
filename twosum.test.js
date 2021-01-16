var twosum = require('./twosum');
test("should return array that contains index [0, 1] that sum up to 9 ", () => {
    var nums = [2, 7, 11, 15]
    var target = 9;
    var result = [0, 1];
    expect(twosum(nums, target)).toEqual(result);
});
