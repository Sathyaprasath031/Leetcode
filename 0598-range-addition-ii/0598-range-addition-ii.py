class Solution(object):
    def maxCount(self, m, n, ops):
        if not ops:
            return m*n
        min_r=min(op[0] for op in ops)
        min_c=min(op[1] for op in ops)

        return min_r*min_c
        