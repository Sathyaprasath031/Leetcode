class Solution(object):
    def dominantIndex(self, nums):
        max1=-1
        max2=-1
        max_idx=-1
        for i,num in enumerate(nums):
            if num>max1:
                max2=max1
                max1=num
                max_idx=i
            elif num>max2:
                max2=num
        if max1>=max2*2:
            return max_idx
        return -1       