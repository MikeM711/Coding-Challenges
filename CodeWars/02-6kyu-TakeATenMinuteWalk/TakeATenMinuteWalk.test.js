const isValidWalk = require('./TakeATenMinuteWalk');

let test1 = ['n','s','n','s','n','s','n','s','n','s'];
let test1Ans = true;

let test2 = ['w','e','w','e','w','e','w','e','w','e','w','e'];
let test2Ans = false

let test3 = ['w'];
let test3Ans = false;

let test4 = ['n','n','n','s','n','s','n','s','n','s'];
let test4Ans = false;

let test5 = ['n','s','e','w','n','s','e','w','n','s']
let test5Ans = true;

test('EX.1 10 minute walk TRUE', () => {
   expect(isValidWalk(test1)).toEqual(test1Ans);
});

test('EX.2 10 minute walk FALSE', () => {
    expect(isValidWalk(test2)).toEqual(test2Ans);
 });

 test('EX.3 10 minute walk FALSE', () => {
    expect(isValidWalk(test3)).toEqual(test3Ans);
 });

 test('EX.4 10 minute walk FALSE', () => {
    expect(isValidWalk(test4)).toEqual(test4Ans);
 });

 test('EX.5 10 minute walk TRUE', () => {
    expect(isValidWalk(test5)).toEqual(test5Ans);
 });

