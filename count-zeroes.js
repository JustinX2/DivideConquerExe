function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    //If the last element is 1, there are no zeroes
    if (arr[right] === 1) return 0;
    
    //If the first element is 0, all elements are zeroes
    if (arr[left] === 0) return arr.length;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === 1 && arr[mid + 1] === 0) {
        return arr.length - (mid + 1);
      } else if (arr[mid] === 1) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  module.exports = countZeroes;