"""
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
"""
class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        table = {};
        for word in strs:
            chars = list(word);
            chars.sort();
            key = ''.join(chars);
            if key not in table:
                table[key] = [word];
            else:
                table[key].append(word);
        
        result = [];
        for key in table:
            result.append(table[key]);

        return result;
