# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: TreeNode | None) -> int:
        ans=float("-inf")
        def dfs(root):
            nonlocal ans
            if not root:
                return 0
            left=max(0,dfs(root.left))
            right=max(0,dfs(root.right))
            ans=max(ans,left+root.val+right)
            return root.val+max(left,right)
        dfs(root)
        return ans
