/**
 * @param {number[][]} graph
  * @return {number}
   */
   var shortestPathLength = function(graph) {
       const n = graph.length;
           if (n === 1) return 0;
           
               // Target mask where all bits from 0 to n-1 are set to 1
                   const target = (1 << n) - 1;
                       
                           // Queue stores [currentNode, visitedMask, distance]
                               const queue = [];
                                   const visited = new Set();
                                   
                                       // We can start at any node, so initialize the queue with all nodes
                                           for (let i = 0; i < n; i++) {
                                                   queue.push([i, 1 << i, 0]);
                                                           visited.add(`${i},${1 << i}`);
                                                               }
                                                               
                                                                   // BFS
                                                                       let head = 0;
                                                                           while (head < queue.length) {
                                                                                   const [node, mask, dist] = queue[head++];
                                                                                   
                                                                                           // If all nodes have been visited, return the distance
                                                                                                   if (mask === target) return dist;
                                                                                                   
                                                                                                           // Traverse neighbors
                                                                                                                   for (const neighbor of graph[node]) {
                                                                                                                               const nextMask = mask | (1 << neighbor);
                                                                                                                                           const state = `${neighbor},${nextMask}`;
                                                                                                                                           
                                                                                                                                                       // If this state hasn't been visited, add it to the queue
                                                                                                                                                                   if (!visited.has(state)) {
                                                                                                                                                                                   visited.add(state);
                                                                                                                                                                                                   queue.push([neighbor, nextMask, dist + 1]);
                                                                                                                                                                                                               }
                                                                                                                                                                                                                       }
                                                                                                                                                                                                                           }
                                                                                                                                                                                                                           
                                                                                                                                                                                                                               return 0;
                                                                                                                                                                                                                               }; 