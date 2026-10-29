class Solution(object):
    def fairCandySwap(self, aliceSizes, bobSizes):
        sumA=sum(aliceSizes)
        sumB=sum(bobSizes)

        delta=(sumB-sumA)//2

        bob_set=set(bobSizes)

        for x in aliceSizes:
            if x+delta in bob_set:
                return[x,x+delta]        