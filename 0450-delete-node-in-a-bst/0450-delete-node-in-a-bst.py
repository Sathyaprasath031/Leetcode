# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def deleteNode(self, root, key):
        if root is None:
            return None
        if root.val<key:
            root.right=self.deleteNode(root.right,key)
        elif root.val>key:
            root.left=self.deleteNode(root.left,key)
        else:
            if root.left is None:
                return root.right
            if root.right is None:
                return root.left
            else:
                successor=root.right
                while successor.left:
                    successor=successor.left
                root.val=successor.val
                root.right=self.deleteNode(root.right,successor.val)
        return root
