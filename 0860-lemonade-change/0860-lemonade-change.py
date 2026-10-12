class Solution:
    def lemonadeChange(self, bills: list[int]) -> bool:
        five=0
        ten=0
        for val in bills:
            if val==5:
                five+=1
            elif val==10:
                if five==0:
                    return False
                ten+=1
                five-=1
            else:
                if ten==0:
                    
                    if five>2:
                        five-=3
                    else:
                        return False
                elif five==0:
                    return False
                else:
                    ten-=1
                    five-=1
        return True
