/*
Given cryptocurrency prices over last N days e.g.: 25, 30, 48, 15, 25, 45, 10, 25 write the function that returns the maximum profit that can be made with a single buy-sell transaction (note: you need to buy cryptocurrency first before you can sell it). If no profit can be made, return 0.
In the example, price of cryptocurrency on day #4 was 15, and price of cryptocurrency on day #6 was 45, which means you could’ve made profit 30 if you bought cryptocurrency on day #4 and sold it on day #6.
Note: these prices are neither minimum (minimum price on day #7 and was 10), nor maximum (maximum price occurred on day #3 and was 48F)
While there's an obvious O(N^2) solution, please provide O(N) solution.

*/

// prev  | curr  |  smallest | maxProfit
// 10       25        10         30
function getMaxProfit(input) {
    var smallest = input[0];
    var prev = input[0];
    var maxProfit = 0;
    for (var i=1; i<input.length; i++) {
	var curr = input[i];     
	var diff = curr - prev;  
	if (diff > 0) {
    	    if ((curr - smallest) > maxProfit) {
    		maxProfit = curr - smallest;
            }
	} else {
    	    smallest = curr;
	}
	prev = curr;
    }
    
    return maxProfit;
}

var input = [25, 30, 48, 15, 25, 45, 10, 25];

console.log(getMaxProfit(input));

// with temperatures:
function maxIncrease(temps) {
    var min = temps[0];    // 10
    var max = 0;           
    
    for (var i=1; i<temps.length; i++) {  // temps[i] = 25
  	if (temps[i] - temps[i-1] >= 0) {  // 10
    	    if (temps[i] - min > max) {
      		max = temps[i] - min;     // max = 30
	    }
	} else {
    	    min = temps[i];
	}
    }
    
    return max;
}

// with stocks
function maxProfit(arr) {
    var buyAt = arr[0];  // 15
    var maxProfit = 0;  // 30
    
    for (var i=1; i<arr.length; i++) {
  	if (arr[i] - arr[i-1] >= 0) {
    	    if (arr[i] - buyAt > maxProfit) {
      		maxProfit = arr[i] - buyAt;
	    }
	} else {
    	    buyAt = arr[i];
	}
    }
    
    return maxProfit;
}


var T = [25, 30, 48, 15, 25, 45, 10, 25 ];

console.log(maxIncrease(T));
