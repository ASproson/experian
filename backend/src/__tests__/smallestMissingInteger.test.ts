import { smallestMissingInteger } from '../smallestMissingInteger';

const arrayLimit: number[] = new Array(100002).fill(1);

describe('smallestMissingInteger', () => {
  test('when given an array with a single element [1] returns 2', () => {
    expect(smallestMissingInteger([1])).toEqual(2);
  });
  test('when given the array [0,2,3,4] returns 1', () => {
    expect(smallestMissingInteger([0, 2, 3, 4])).toEqual(1);
  });
  test('when given the array [-100, -99, -97, 100] returns 98', () => {
    expect(smallestMissingInteger([-100, -99, -97, 100])).toEqual(1);
  });
  test('when given an array with all negative numbers [-1, -2, -3] returns 1', () => {
    expect(smallestMissingInteger([-1, -2, -3])).toEqual(1);
  });
  test('when given an array with mixed negatives and positives [-3, -2, -1, 1, 2, 3, 5] returns 4', () => {
    expect(smallestMissingInteger([-3, -2, -1, 1, 2, 3, 5])).toEqual(4);
  });
  test('when given an array with all zeros [0, 0, 0] returns 1', () => {
    expect(smallestMissingInteger([0, 0, 0])).toEqual(1);
  });
  test('when given an array with consecutive numbers [1, 2, 3, 4, 5] returns 6', () => {
    expect(smallestMissingInteger([1, 2, 3, 4, 5])).toEqual(6);
  });
  test('when given an array with large gaps [1, 100, 1000] returns 2', () => {
    expect(smallestMissingInteger([1, 100, 1000])).toEqual(2);
  });
  test('when given an array with length > 10,000, returns error', () => {
    expect(() => smallestMissingInteger(arrayLimit)).toThrow('Array must be <= 10,000 in length');
  });
  test('when given an empty array returns 0', () => {
    expect(smallestMissingInteger([])).toEqual(0);
  });
});
