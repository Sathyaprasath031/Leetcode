/**
 * Definition for a binary tree node.
  * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
    *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
      * }
       */
       /**
        * @param {TreeNode} root
         * @return {string[]}
          */
          var binaryTreePaths = function(root) {
              const ans = [];
                  
                      const dfs = (node, currentPath) => {
                              if (!node) return;
                                      
                                              // Append the current node's value to the path
                                                      currentPath += node.val;
                                                              
                                                                      // If it's a leaf node, add the completed path to the answer array
                                                                              if (!node.left && !node.right) {
                                                                                          ans.push(currentPath);
                                                                                                      return;
                                                                                                              }
                                                                                                                      
                                                                                                                              // If it's not a leaf, append the arrow and continue down both children
                                                                                                                                      currentPath += "->";
                                                                                                                                              if (node.left) dfs(node.left, currentPath);
                                                                                                                                                      if (node.right) dfs(node.right, currentPath);
                                                                                                                                                          };
                                                                                                                                                              
                                                                                                                                                                  // Start the DFS from the root with an empty string
                                                                                                                                                                      dfs(root, "");
                                                                                                                                                                          
                                                                                                                                                                              return ans;
                                                                                                                                                                              }; 