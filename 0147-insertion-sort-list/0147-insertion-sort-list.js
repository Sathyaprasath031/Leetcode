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
         var insertionSortList = function(head) {
             if (!head || !head.next) return head;
             
                 const dummy = new ListNode(0, head);
                     let lastSorted = head;
                         let curr = head.next;
                         
                             while (curr !== null) {
                                     if (curr.val >= lastSorted.val) {
                                                 // Already in correct relative order
                                                             lastSorted = curr;
                                                                     } else {
                                                                                 // Find insertion point from the start
                                                                                             let prev = dummy;
                                                                                                         while (prev.next.val <= curr.val) {
                                                                                                                         prev = prev.next;
                                                                                                                                     }
                                                                                                                                     
                                                                                                                                                 // Splice curr out of its position
                                                                                                                                                             lastSorted.next = curr.next;
                                                                                                                                                             
                                                                                                                                                                         // Insert curr between prev and prev.next
                                                                                                                                                                                     curr.next = prev.next;
                                                                                                                                                                                                 prev.next = curr;
                                                                                                                                                                                                         }
                                                                                                                                                                                                                 curr = lastSorted.next;
                                                                                                                                                                                                                     }
                                                                                                                                                                                                                     
                                                                                                                                                                                                                         return dummy.next;
                                                                                                                                                                                                                         }; 