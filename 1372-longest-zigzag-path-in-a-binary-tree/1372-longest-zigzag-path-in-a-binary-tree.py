# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestZigZag(self, root: TreeNode | None) -> int:
        ans=0
        def dfs(root):
            nonlocal ans
            if not root:
                return -1,-1

            left=dfs(root.left)
            right=dfs(root.right)
            l=1+left[1]
            r=1+right[0]
            ans=max(ans,l,r)
            return l,r
        dfs(root)
        return ans