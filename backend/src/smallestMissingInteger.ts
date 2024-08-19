/**
 * @param array
 * @returns the smallest missing integer within the passed array
 * @satisfies O(n) time and space
 */
export const smallestMissingInteger = (array: number[]): number => {
  // Exit early if invalid array
  if (array.length === 0) return 0;
  if (array.length > 10000) throw new Error('Array must be <= 10,000 in length');

  // Understand the array extremes
  let min = Math.min(...array);
  let max = Math.max(...array);

  // If no value is positive, then return 1 as it's the smallest next positive
  if (max <= 0) {
    return 1;
  }

  // Only check positive ints
  if (min <= 0) {
    min = 1;
  }

  // Remove duplicates and enable O(1) lookups
  const numSet = new Set(array);

  // Find first positive int
  for (let i = min; i <= max; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }

  // If no missing int and has positives, then the next smallest positive value is after max
  return max + 1;
};
