const uniqueInOrder = require('./UniqueInOrder');

let test1 = 'AAAABBBCCDAABBB';
let test1Ans = ['A', 'B', 'C', 'D', 'A', 'B'];

let test2 = 'ABBCcAD';
let test2Ans = ['A', 'B', 'C', 'c', 'A', 'D'];

let test3 = [1, 2, 2, 3, 3];
let test3Ans = [1, 2, 3];

test('Unique in order', () => {
    expect(uniqueInOrder(test1)).toEqual(test1Ans);
});

test('Unique in order - Lower Case', () => {
    expect(uniqueInOrder(test2)).toEqual(test2Ans);
});

test('Unique in order - Numbers', () => {
    expect(uniqueInOrder(test3)).toEqual(test3Ans);
});