/*
You are given two jugs with capacities x and y litres. There is an infinite amount of water supply available. You need to determine whether it is possible to measure exactly z litres using these two jugs.

If z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end.

Operations allowed:

Fill any of the jugs completely with water.
Empty any of the jugs.
Pour water from one jug into another till the other jug is completely full or the first jug itself is empty.
Example 1: (From the famous "Die Hard" example)

Input: x = 3, y = 5, z = 4
Output: True
Example 2:

Input: x = 2, y = 6, z = 5
Output: False
 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */


function pourAndMeasure(x, y, z, wx, wy, results) {
    //  console.log("wx: " + wx + ", wy: " + wy);
    var biggest = Math.max(wx, wy);
    var smallest = Math.min(wx, wy);
    
    if (biggest == z || smallest == z || biggest + smallest == z) {
        return true;
    }
    
    if (biggest <= 0 || smallest <= 0) {
        return false;
    }
    
    var key = biggest + ',' + smallest;
    results[key] = true;
    console.log(key);
    
    var r1 = false;
    var r2 = false;
    
    var newBiggest = Math.max(biggest-smallest, y);  
    var newSmallest = Math.min(biggest-smallest, y); 
    var key1 = newBiggest + "," + newSmallest;
    if (!(key1 in results)) {
        r1 = pourAndMeasure(x,y,z,newBiggest, newSmallest, results);
    }
    
    newBiggest = Math.max(biggest-smallest, x);
    newSmallest = Math.min(biggest-smallest, x);    
    var key2 = newBiggest + "," + newSmallest;
    if (!(key2 in results)) { 
        r2 = pourAndMeasure(x,y,z,newBiggest, newSmallest, results);
    }
    
    return r1 || r2;    
}



var canMeasureWater = function(x, y, z) {
    var results = {};
    var biggest = Math.max(x,y);
    var smallest = Math.min(x,y);
    return pourAndMeasure(biggest, smallest, z, biggest, smallest, {});
};