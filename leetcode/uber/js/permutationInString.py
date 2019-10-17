"""
DIDN'T PASS
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

 

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
"""

class Solution(object):
    def checkInclusion(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """
        
        def genPermutation(options, tmp=[]):
            tmpStr = "".join(tmp);
            if tmpStr not in s2:
                return False;
            else: # tmpStr is included in s2
                if len(tmpStr) == len(s1):
                    return True;
            
            for i in xrange(len(options)):
                includesPerm = genPermutation(options[:i] + options[i+1:], tmp + [options[i]]);
                if includesPerm:
                    return True;
            
            return False;
        
        if len(s1) > len(s2):
            return False;
        
        return genPermutation(list(s1));
