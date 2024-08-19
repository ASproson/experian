"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mostCommonRepeatedArrayValue_1 = require("../mostCommonRepeatedArrayValue");
describe('mostCommonRepeatedArray', () => {
    test('when given an empty array, returns 0', () => {
        expect((0, mostCommonRepeatedArrayValue_1.mostCommonRepeatedArray)([])).toEqual(0);
    });
    test('when given an array of length 1, returns 1', () => {
        expect((0, mostCommonRepeatedArrayValue_1.mostCommonRepeatedArray)(['a'])).toEqual(1);
    });
    test('when given ["a", "jq", "bpa", "bpa", "q"], returns 2', () => {
        expect((0, mostCommonRepeatedArrayValue_1.mostCommonRepeatedArray)(['a', 'jq', 'bpa', 'bpa', 'q'])).toEqual(2);
    });
    test('when given array of duplicate strings of length 4, returns 4', () => {
        expect((0, mostCommonRepeatedArrayValue_1.mostCommonRepeatedArray)(['a', 'a', 'a', 'a'])).toEqual(4);
    });
});
