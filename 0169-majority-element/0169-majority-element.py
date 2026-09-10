from collections import Counter
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        dic=Counter(nums)
        n=len(nums)//2
        major=0
        for key,val in dic.items():
            if val>n:
                major=key
                break
        return major

