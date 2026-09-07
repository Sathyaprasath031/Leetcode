from itertools import permutations
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        ans=list(permutations(nums))
        return ans