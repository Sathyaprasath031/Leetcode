class Solution:
    def canCompleteCircuit(self, gas: list[int], cost: list[int]) -> int:
        total=curr=start=0
        for i in range(len(gas)):
            diff=gas[i]-cost[i]
            total+=diff
            curr+=diff
            if curr<0:
                start=i+1
                curr=0
        if total>=0:
            return start
        else:
            return -1
