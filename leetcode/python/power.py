class Solution(object):
    def myPow(self, x, n):
        """
        :type x: float
        :type n: int
        :rtype: float
        """
        
        def power(x, p):  # p is positive
            acc = x;
            power = 1;
            while p > 0:
                if p%2:  # p is odd
                    power = power*acc;
                acc = acc*acc;
                p = p//2;
            return power;

        if n == 0:
            return 1;
        
        if n > 0:
            res = power(x, n);            
        else:
            res = 1/power(x, -n);
            
        return res;
