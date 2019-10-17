"""
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.

"""

class Solution(object):
    def getCharacters(self, digit):
        map = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        };
        return list(map[digit]);
    
    def appendCharacters(self, output, d):
        characters = self.getCharacters(d);
        tmp = []
        for o in output:
            for c in characters:
                tmp.append(o + c);
        return tmp;
    
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        if (len(digits) == 0):
            return [];
        
        output = [];
        for d in digits:
            if (len(output) == 0):
                output = self.getCharacters(d);
            else:
                output = self.appendCharacters(output, d);
        
        
        return output;


class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        def getCharacters(self, digit):
            map = {
                "2": "abc",
                "3": "def",
                "4": "ghi",
                "5": "jkl",
                "6": "mno",
                "7": "pqrs",
                "8": "tuv",
                "9": "wxyz"
            };
            return list(map[digit]);
        
        result = [];
        def getCombinations(combi, index):
            if len(combi) == len(digits):
                result.append(combi);
                return;
            
            chars = getCharacters(self, digits[index]);
            
            for c in chars:
                getCombinations(combi+c, index+1);
      
        if len(digits) == 0:
            return [];
        
        getCombinations("", 0);
        return result;
        
# digits = ""
# output = []
# digits = "2"
# output = ["a","b","c"]
# digits = "23"
# output = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
