class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
        g.sort()
        s.sort()
        i=0
        count=0
        while count<len(g) and i<len(s):
            if s[i]>=g[count]:
                count+=1
            i+=1
        return count