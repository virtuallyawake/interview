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
