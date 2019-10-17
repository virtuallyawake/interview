"""
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
"""


class Solution(object):
    def mapTo(self, a, b, c,digit):
        if digit == 0:
            return "";
        if digit < 4:
            return "".join([a for i in range(digit)]);
        if digit == 4:
            return a+b;
        if digit == 5:
            return b;
        if digit in [6,7,8]:
            return b + "".join([a for i in range(digit-5)]);
        if digit == 9:
            return a+c;
        
    def mapToUnits(self, digit):
        return self.mapTo("I","V","X", digit);
    
    def mapToTens(self, digit):
        return self.mapTo("X","L","C", digit);
    
    def mapToHundreds(self, digit):
        return  self.mapTo("C","D","M", digit);
    
    def mapToThousands(self, digit):
        return "".join(["M" for i in range(digit)]);
        
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """

        digits = [];   # num=1234; digits=[4,3,2,1]
        
        while num is not 0:
            digit = num % 10;
            digits.append(digit);
            num = num//10;
        
        result = [];  # result=["IV", "XXX", "CC", "M"]
        
        for i in range(len(digits)):
            if i==0:
                result.append(self.mapToUnits(digits[i]));
            if i==1:
                result.append(self.mapToTens(digits[i]));
            if i==2:
                result.append(self.mapToHundreds(digits[i]));
            if i==3:
                result.append(self.mapToThousands(digits[i]));
        
        result.reverse();
        return "".join(result);
