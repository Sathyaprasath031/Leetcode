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
        self.parent[px]=py
        return True
class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        edges=[]
        for i in range(len(points)):
            for j in range(i+1,len(points)):
                x1,y1=points[i]
                x2,y2=points[j]
                dist=abs(x1-x2)+abs(y2-y1)
                edges.append([i,j,dist])
        edges.sort(key=lambda x:x[2])
        DSU=dsu(len(edges))
        cost=0
        for i,j,w in edges:
            if DSU.union(i,j):
                cost+=w
        return cost
