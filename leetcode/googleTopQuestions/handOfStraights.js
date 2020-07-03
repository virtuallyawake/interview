/*
846. Hand of Straights
https://leetcode.com/problems/hand-of-straights/

Alice has a hand of cards, given as an array of integers.

Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

Return true if and only if she can.

 

Example 1:

Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].
Example 2:

Input: hand = [1,2,3,4,5], W = 4
Output: false
Explanation: Alice's hand can't be rearranged into groups of 4.
 

Constraints:

1 <= hand.length <= 10000
0 <= hand[i] <= 10^9
1 <= W <= hand.length
*/

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */

function getFrequencyTable(arr) {
    let table = {};

    arr.forEach(elem => {
        if (elem in table) {
            table[elem]++;
        } else{
            table[elem] = 1;
        }
    });
    
    return table;
}

// faster
var isNStraightHand2 = function(hand, W) {
    if (hand.length % W !== 0) {
        return false;
    }
        
    hand.sort((a, b) => {
        return a - b;
    });
    
    let counter = 0;  // 2
    let expected = hand[0]; // 4
    let tmp = [];
    let result = [];
    while (hand.length > 0) {
        if (counter === W) {
            counter = 0;
            hand = tmp.concat(hand);
            tmp = [];
            expected = hand[0];
        }
        
        let front = hand.shift();  //4
        if (front === expected) {
            expected++;
            counter++;
        } else {
            if (front === expected-1) {
                tmp.push(front);
                continue;
            }
            return false;
        }
    }
    
    return tmp.length === 0;
}

// Slower
var isNStraightHand = function(hand, W) {
    if (hand.length % W !== 0) {
        return false;
    }
    
    freqTable = getFrequencyTable(hand);

    let keys = Object.keys(freqTable);
    
    let counter = 0; // 1
    let min = Math.min(...keys); // 2
    while (Object.keys(freqTable).length > 0) {
        if (counter === W) {
            keys = Object.keys(freqTable);
            min = Math.min(...keys);
            counter = 0;
        }

        if (min in freqTable) {
            freqTable[min]--;
            if (freqTable[min] === 0) {
                delete freqTable[min];
            }
            min++;
            counter++;
        } else {
            return false;
        }
    }
    
    return true;
};
