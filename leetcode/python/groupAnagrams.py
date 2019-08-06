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
