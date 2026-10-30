/**
 * Definition for singly-linked list.
  * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
    *     this.next = (next===undefined ? null : next)
     * }
      */
      
      /**
       * @param {ListNode} head
        * @return {ListNode}
         */
         var sortList = function(head) {
             if (!head || !head.next) return head;
             
                 // Split the list into two halves using fast & slow pointers
                     let prev = null;
                         let slow = head;
                             let fast = head;
                             
                                 while (fast && fast.next) {
                                         prev = slow;
                                                 slow = slow.next;
                                                         fast = fast.next.next;
                                                             }
                                                             
                                                                 // Cut the link to separate the two halves
                                                                     prev.next = null;
                                                                     
                                                                         // Recursively sort both halves
                                                                             const left = sortList(head);
                                                                                 const right = sortList(slow);
                                                                                 
                                                                                     // Merge the sorted halves
                                                                                         return merge(left, right);
                                                                                         };
                                                                                         
                                                                                         function merge(l1, l2) {
                                                                                             const dummy = new ListNode(0);
                                                                                                 let curr = dummy;
                                                                                                 
                                                                                                     while (l1 && l2) {
                                                                                                             if (l1.val <= l2.val) {
                                                                                                                         curr.next = l1;
                                                                                                                                     l1 = l1.next;
                                                                                                                                             } else {
                                                                                                                                                         curr.next = l2;
                                                                                                                                                                     l2 = l2.next;
                                                                                                                                                                             }
                                                                                                                                                                                     curr = curr.next;
                                                                                                                                                                                         }
                                                                                                                                                                                         
                                                                                                                                                                                             curr.next = l1 ? l1 : l2;
                                                                                                                                                                                                 return dummy.next;
                                                                                                                                                                                                 } 