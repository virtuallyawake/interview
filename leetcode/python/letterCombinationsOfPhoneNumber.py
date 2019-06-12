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
        
# digits = ""
# output = []
# digits = "2"
# output = ["a","b","c"]
# digits = "23"
# output = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
