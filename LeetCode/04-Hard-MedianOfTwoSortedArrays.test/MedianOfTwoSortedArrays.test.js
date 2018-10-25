const findMedianSortedArrays = require('./MedianOfTwoSortedArrays');

let test1_param1 = [1, 3];
let test1_param2 = [2];
let test1Ans = 2;

let test2_param1 = [1, 2];
let test2_param2 = [3, 4];
let test2Ans = 2.5;

test('Ex.1 Median of Two Sorted Arrays', () => {
    expect(findMedianSortedArrays(test1_param1, test1_param2)).toEqual(test1Ans);
});

test('Ex.2 Median of Two Sorted Arrays', () => {
    expect(findMedianSortedArrays(test2_param1, test2_param2)).toEqual(test2Ans);
});