"use strict";
/**
 * write a function that takes a single parameter, an array of strings. Strings will be up to 5 chars in lowercase. Return an int representing the highest number of consecutive repeated strings in the array
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostCommonRepeatedArray = void 0;
/**
 * @param array
 * @returns the maximum number of repeated strings within the passed array
 */
const mostCommonRepeatedArray = (array) => {
    // If array has no values, exit early
    if (array.length === 0)
        return 0;
    // Maintain a global count and a local count
    let maxCount = 1;
    let currentCount = 1;
    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            currentCount++; // If duplicate string, increment
        }
        else {
            // If unique string, determine if max needs to be reassigned to current
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
            currentCount = 1; // Reset current back as the pattern restarts
        }
    }
    // Handle when the array is all duplicates
    return Math.max(maxCount, currentCount);
};
exports.mostCommonRepeatedArray = mostCommonRepeatedArray;
