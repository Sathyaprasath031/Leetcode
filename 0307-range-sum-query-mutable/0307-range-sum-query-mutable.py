class NumArray:

    def __init__(self, nums: List[int]):
        self.nums=nums
        n=len(self.nums)
        self.tree=[0]*(4*n)
        def build(node,start,end):
            if start==end:
                self.tree[node]=self.nums[start]
                return
            mid=(start+end)//2
            build(node*2,start,mid)
            build(node*2+1,mid+1,end)
            self.tree[node]=self.tree[2*node]+self.tree[2*node+1]
        build(1,0,n-1)

            

        

    def update(self, index: int, val: int) -> None:
        def update_tree(node,start,end):
            if start==end:
                self.nums[index]=val
                self.tree[node]=val
                return
            mid=(start+end)//2
            if index<=mid:
                update_tree(2*node,start,mid)
            else:
                update_tree(2*node+1,mid+1,end)
            self.tree[node]=self.tree[2*node]+self.tree[2*node+1]
        update_tree(1,0,len(self.nums)-1)
    def sumRange(self, left: int, right: int) -> int:
        def query(node,start,end):
            if right<start or end<left:
                return 0
            if start>=left and end<=right:
                return self.tree[node]
            mid=(start+end)//2
            left_sum=query(node*2,start,mid)
            right_sum=query(node*2+1,mid+1,end)
            return left_sum+right_sum
        return query(1,0,len(self.nums)-1) 

# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(index,val)
# param_2 = obj.sumRange(left,right)