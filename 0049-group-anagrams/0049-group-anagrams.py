from collections import defaultdict
class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        temp=defaultdict(list)
        res=[]
        for val in strs:
            sorted_key="".join(sorted(val))
            temp[sorted_key].append(val)
        for val in temp.values():
            res.append(val)
        return res
      

