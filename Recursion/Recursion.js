// Return sum, max number, element count;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findSum(arr, sum = 0, count = 0, max) {
  if (arr.length === 0) {
    return { sum, count, max };
  }

  [head, ...tail] = arr;

  max = Math.max(arr);

  return findSum(tail, (sum += head), (count += 1), max);
}

console.log(findSum(arr));
