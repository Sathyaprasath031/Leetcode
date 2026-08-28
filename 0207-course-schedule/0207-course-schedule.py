from collections import deque
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        indegree=[0]*numCourses
        courses=[[] for _ in range(numCourses)]
        for course,prerequisite in prerequisites:
            courses[prerequisite].append(course)
            indegree[course]+=1
        q=deque()
        for i in range(numCourses):
            if indegree[i]==0:
                q.append(i)
        count=0
        while q:
            node=q.popleft()
            count+=1
            for neigh in courses[node]:
                indegree[neigh]-=1
                if indegree[neigh]==0:
                    q.append(neigh)
        return count==numCourses
