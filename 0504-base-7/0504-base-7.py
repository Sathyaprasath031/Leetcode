class Solution(object):
    def convertToBase7(self, num):
        if num==0:
            return "0"
        n=abs(num)
        result=[]
        while n>0:
            result.append(str(n%7))
            n//=7
        res_str="".join(result[::-1])
        return "-"+res_str if num<0 else res_str