const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, search, start = 0, end = numbers.length) {
  let mid = Math.floor((start + end) / 2);

  if (end < start) {
    return 'something wrong';
  }

  if (arr[mid] === search) {
    return mid;
  }

  if (arr[mid] < search) {
    return binarySearch(arr, search, mid + 1, end);
  } else {
    return binarySearch(arr, search, start, mid - 1);
  }
}

console.log(binarySearch(numbers, 2));
