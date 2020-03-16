/*
/*
Problem: Given an array of N numbers, for each index i, return the product of all numbers except the one at index i. Note: these numbers can contain 0s While there's an obvious O(N^2) solution, please provide O(N) solution. Input The input contains space-separated integers (an array of N numbers). Output Print space-separated integers which is the product of all numbers except the one at index i

input =  [1,     2,     3]
output = [2*3,  1*3,  1*2]

P = multiplication of everything
output[i] = P / input[i]

*/

// O(N^2))
function getProducts(input) {
output = [];
for (var i=0; i<input.length; i++) {
	var product = 1;
	for (var j=0; j<input.length; j++) {
  	if (i !== j) {
    	product = product*input[j];
    }
  }
  output.push(product);
}
	return output;
}

// O(N)
function getProducts2(input) {
  var P = input.reduce(function (acc, item) {
    return acc * item;
  }, 1);
  
  return input.map(function (item) {
  	return P/item;
  });
}


var input = [1, 2, 3];
console.dir(getProducts2(input));
