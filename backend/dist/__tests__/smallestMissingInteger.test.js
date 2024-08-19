"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smallestMissingInteger_1 = require("../smallestMissingInteger");
const arrayLimit = new Array(100002).fill(1);
describe('smallestMissingInteger', () => {
    test('when given an array with a single element [1] returns 2', () => {
        expect((0, smallestMissingInteger_1.smallestMissingInteger)([1])).toEqual(2);
    });
    test('when given the array [0,2,3,4] returns 1', () => {
        expect((0, smallestMissingInteger_1.smallestMissingInteger)([0, 2, 3, 4])).toEqual(1);
    });
    test('when given the array [-100, -99, -97, 100] returns 98', () => {
        expect((0, smallestMissingInteger_1.smallestMissingInteger)([-100, -99, -97, 100])).toEqual(1);
    });
    test('when given an array with all negative numbers [-1, -2, -3] returns 1', () => {
        expect((0, smallestMissingInteger_1.smallestMissingInteger)([-1, -2, -3])).toEqual(1);
    });
    test('when given an array with mixed negatives and positives [-3, -2, -1, 1, 2, 3, 5] returns 4', () => {
        expect((0, smallestMissingInteger_1.smallestMissingInteger)([-3, -2, -1, 1, 2, 3, 5])).toEqual(4);
    });
    test('when given an array with all zeros [0, 0, 0] returns 1', () => {
        expect((0, smallestMissingInteger_1.smallestMissingInteger)([0, 0, 0])).toEqual(1);
    });
    test('when given an array with consecutive numbers [1, 2, 3, 4, 5] returns 6', () => {
        expect((0, smallestMissingInteger_1.smallestMissingInteger)([1, 2, 3, 4, 5])).toEqual(6);
    });
    test('when given an array with large gaps [1, 100, 1000] returns 2', () => {
        expect((0, smallestMissingInteger_1.smallestMissingInteger)([1, 100, 1000])).toEqual(2);
    });
    test('when given an array with length > 10,000, returns error', () => {
        expect(() => (0, smallestMissingInteger_1.smallestMissingInteger)(arrayLimit)).toThrow('Array must be <= 10,000 in length');
    });
    test('when given an empty array returns 0', () => {
        expect((0, smallestMissingInteger_1.smallestMissingInteger)([])).toEqual(0);
    });
});
