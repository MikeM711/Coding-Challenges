const uniqueInOrder = require('./6kyu-Unique-In-Order');

test('Unique in order', () => {
   expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A','B','C','D','A','B']);
});

test('Unique in order - Lower Case', () => {
    expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
});

test('Unique in order - Numbers', () => {
    expect(uniqueInOrder([1,2,2,3,3])).toEqual([1,2,3]);
});