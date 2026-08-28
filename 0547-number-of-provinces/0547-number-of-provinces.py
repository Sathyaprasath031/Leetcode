class dsu:
    def __init__(self,n):
        self.parent=list(range(n))
    def find(self,x):
        if self.parent[x]==x:
            return x
        return self.find(self.parent[x])
    def union(self,px,py):
        px=self.find(px)
        py=self.find(py)
        if px!=py:
            self.parent[py]=px

class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        DSU=dsu(len(isConnected))
        for i in range(len(isConnected)):
            for j in range(i+1,len(isConnected)):
                if i==j:
                    continue
                if isConnected[i][j]==1:
                    DSU.union(i,j)
        return len(set(DSU.find(i) for i in range(len(isConnected))))