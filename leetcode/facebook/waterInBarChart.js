/*
Given an array of integers representing heights in a bar graph, determine the volume of water that it can hold.
Input: An array of positive integers that represent the heights of bars in a bar chart. Heights are guaranteed to be >= 1.

Output: The number of "units" of water that the bar chart can hold.

Note that water "spills over" the sides if there's nothing to contain it. Formally, a cell can contain water if, and only if, it has a wall to its right and a wall to its left.

Example 1
Input: [5, 3, 2, 1, 5]
Output: 9

Empty     Filled
#   #     #...#
#   #     #...#
##  #     ##..#
### #     ###.#
#####     #####

Example 2
Input: [2, 4, 1, 5, 3]
Output: 3

Empty     Filled

   #         #
 # #       #.#
 # ##      #.##
## ##     ##.##
#####     #####

Example 3
Input: [2, 1, 5, 1, 3]
Output: 3

Empty     Filled

  #         #
  #         #
  # #       #.#
# # #     #.#.#
#####     #####

Example 4
Input: [1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1]
Output: 7

Empty        Filled

   #   #        #...#
 # # # # #    #.#.#.#.#
###########  ###########

- # water units = min(left wall height, right wall height) - bar height
*/

function getTallestWalls(arr) {
    var result = [0];   // [0, 2, 2, 5, 5]
    var tallest = arr[0]; // 5

    for (var i=1; i<arr.length; i++) {
  	result.push(tallest);
  	if (arr[i] > tallest) {
    	    tallest = arr[i];
	}
    }
    
    return result;
}

function getVolume(arr) {
    var tallestLeftWalls = getTallestWalls(arr);
    var tallestRightWalls = getTallestWalls(arr.reverse());
    arr.reverse(); // return array back to normal
    tallestRightWalls = tallestRightWalls.reverse();
    var volume = 0;
    
    for(var i=0; i<arr.length; i++) {
  	var heightLeft = tallestLeftWalls[i];
	var heightRight = tallestRightWalls[i];
	var units = Math.min(heightLeft, heightRight) - arr[i];
	units = (units < 0) ? 0 : units;
  	volume += units;  
    }
    
    return volume;
}

var arr = [2, 1, 5, 1, 3];

console.log(getVolume(arr));
