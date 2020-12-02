//implementation of fisher-yates shuffle algorithm
//takes 1 parameter of array of anything
//returns the same array after the order is shuffled
function shuffleArray(arr) {
  let m = arr.length;
  let i, temp;
  while (m) {
    i = Math.floor(Math.random() * m--);
    temp = arr[m];
    arr[m] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

module.exports = shuffleArray;