class Solution(object):
    def multiply(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        def convertStrToInt(numStr):
            allDigits = "0123456789";
            arr = list(numStr);
            digits = [allDigits.find(d) for d in arr];
            digits.reverse();
            acc = 0;
            factor = 1;
            for d in digits:
                acc = acc + d*factor;
                factor = factor*10;
            return acc;
        
        n1 = convertStrToInt(num1);
        n2 = convertStrToInt(num2);
        
        return str(n1*n2);
