# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isValidBST(self, root):
        def inorder(root,res):
            if root is None:
                return None
            inorder(root.left,res)
            res.append(root.val)
            inorder(root.right,res)
        res=[]
        inorder(root,res)
        for i in range(1,len(res)):
            if res[i]<=res[i-1]:
                return False
        return True
