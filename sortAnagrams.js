var A = ["anna", "bubu", "dada", "coco", "ubbu", "naan", "cooc", "daad"];

function partition(A, left, right) {
  var pivot = A[left];
  var i = left+1;
  for(var j=i; j<=right; j++) {
    if (A[j] < pivot) {
      // swap A[j] and A[i]
      var tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
      i++;
    }
  }
  // swap pivot and A[i-1]
  A[left] = A[i-1];
  A[i-1] = pivot;
  return i-1;
}

function quicksort(A, left, right) {
  var index = partition(A, left, right);
  if (left < index-1)
    quicksort(A, left, index-1);
  if (index+1 < right)
    quicksort(A, index+1, right);
}

function sortAlphabetically(word) {
  var chararray = word.slice().split("");
  quicksort(chararray, 0, chararray.length-1);
  return chararray.join("");
}

var w = "bubu";
console.log(sortAlphabetically(w));

var obj = {};

A.forEach(function(word) {
  var key = sortAlphabetically(word);
  if (!obj[key]) {
    obj[key] = [word];
  } else {
    obj[key].push(word);
  }
});

console.dir(obj);
var sorted = [];
Object.keys(obj).forEach(function(key) {
  console.log(obj[key]);
  //sorted.concat(obj[key]);
  obj[key].forEach(function(w) {
    sorted.push(w);
  })
  console.dir(sorted);
});
console.dir(sorted);