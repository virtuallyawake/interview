/*
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

/**
 * @param {number[]} height
 * @return {number}
 */


function getArea(h1, h2, dx) {
    var minHeight = Math.min(h1, h2);
    return minHeight*dx;
}

var maxArea = function(height) {
    var max = 0;
    for (var i=0; i<height.length; i++) {
        for (var j=i+1; j<height.length; j++) {
            var area = getArea(height[i], height[j], j-i);
            if (area > max)
                max = area;
        }
    }
    return max;
};

// with pointers in one pass
var maxArea = function(height) {
    var max = 0;
    pLeft = 0;
    pRight = height.length-1;
    while (pLeft < pRight) {
        var area = getArea(height[pLeft], height[pRight], pRight-pLeft);
        if (area > max)
            max = area;
        if (height[pLeft] < height[pRight])
            pLeft++;
        else
            pRight--;
    }
    return max;
};
