# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def kthSmallest(self, root, k):
        self.count=0
        self.answer=0
        def inorder(root,k):
            
            if root is None:
                return None
            inorder(root.left,k)
            self.count+=1
            if self.count==k:
                self.answer=root.val
                return
            inorder(root.right,k)
        inorder(root,k)
        return self.answer
