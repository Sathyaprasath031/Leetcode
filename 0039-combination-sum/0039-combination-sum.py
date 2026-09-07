class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result=[]
        def backtrack(start,path,target):
            if target==0:
                result.append(path.copy())
                return
            if target<0:
                return
            for i in range(start,len(candidates)):
                path.append(candidates[i])
                backtrack(i,path,target-candidates[i])
                path.pop()
        backtrack(0,[],target)
        return result
