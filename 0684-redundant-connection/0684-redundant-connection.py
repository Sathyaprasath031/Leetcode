class dsu:
    def __init__(self,n):
        self.parent=list(range(n+1))
    def find(self,x):
        if self.parent[x]==x:
            return x
        return self.find(self.parent[x])
    def union(self,x,y):
        px=self.find(x)
        py=self.find(y)
        if px==py:
            return False
        self.parent[py]=px
        return True
class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]: 
        DSU=dsu(len(edges))
        for i,j in edges:
            if not DSU.union(i,j):
                return [i,j]