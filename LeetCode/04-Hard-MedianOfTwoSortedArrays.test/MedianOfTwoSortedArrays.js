var findMedianSortedArrays = function (nums1, nums2) {
  var arrMerge = [];
  var solution;

  nums1.forEach(function (element) {
    arrMerge.push(element);
  });

  nums2.forEach(function (element) {
    arrMerge.push(element);
  });

  arrMerge = arrMerge.sort(function (a, b) { return a - b });

  let arrLength = arrMerge.length;
  // if even, else odd
  if (arrLength % 2 == 0) {
    solution = (arrMerge[arrLength / 2] + arrMerge[(arrLength / 2) - 1]) / 2;

  }
  else {
    solution = arrMerge[arrLength / 2 - 0.5];
  }

  return solution;
};

module.exports = findMedianSortedArrays;