from collections import Counter
class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        dic=Counter(nums)
        major=[]
        for key,val in dic.items():
            if val>len(nums)//3:
                major.append(key)
        return major