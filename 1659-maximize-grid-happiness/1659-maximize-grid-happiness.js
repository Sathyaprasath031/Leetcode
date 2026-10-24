/**
 * @param {number} m
  * @param {number} n
   * @param {number} introvertsCount
    * @param {number} extrovertsCount
     * @return {number}
      */
      var getMaxGridHappiness = function(m, n, introvertsCount, extrovertsCount) {
          const memo = new Map();
              const p = Math.pow(3, n - 1);
                  
                      // Calculate the interaction score between two adjacent cells
                          const getInteractionScore = (a, b) => {
                                  if (a === 0 || b === 0) return 0;
                                          let score = 0;
                                                  score += a === 1 ? -30 : 20; // First person's reaction
                                                          score += b === 1 ? -30 : 20; // Second person's reaction
                                                                  return score;
                                                                      };
                                                                      
                                                                          const dfs = (pos, ic, ec, mask) => {
                                                                                  // Base case: Reached the end of the grid or ran out of people
                                                                                          if (pos === m * n || (ic === 0 && ec === 0)) return 0;
                                                                                                  
                                                                                                          const stateKey = `${pos}-${ic}-${ec}-${mask}`;
                                                                                                                  if (memo.has(stateKey)) return memo.get(stateKey);
                                                                                                                  
                                                                                                                          const r = Math.floor(pos / n);
                                                                                                                                  const c = pos % n;
                                                                                                                                          
                                                                                                                                                  // Extract the person above and the person to the left
                                                                                                                                                          const up = Math.floor(mask / p);
                                                                                                                                                                  const left = c > 0 ? (mask % 3) : 0;
                                                                                                                                                                          
                                                                                                                                                                                  const nextMaskBase = (mask % p) * 3;
                                                                                                                                                                                          
                                                                                                                                                                                                  // Option 1: Leave cell empty
                                                                                                                                                                                                          let maxHappiness = dfs(pos + 1, ic, ec, nextMaskBase);
                                                                                                                                                                                                          
                                                                                                                                                                                                                  // Option 2: Place an Introvert
                                                                                                                                                                                                                          if (ic > 0) {
                                                                                                                                                                                                                                      let happiness = 120;
                                                                                                                                                                                                                                                  if (r > 0) happiness += getInteractionScore(1, up);
                                                                                                                                                                                                                                                              if (c > 0) happiness += getInteractionScore(1, left);
                                                                                                                                                                                                                                                                          maxHappiness = Math.max(maxHappiness, happiness + dfs(pos + 1, ic - 1, ec, nextMaskBase + 1));
                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                          // Option 3: Place an Extrovert
                                                                                                                                                                                                                                                                                                  if (ec > 0) {
                                                                                                                                                                                                                                                                                                              let happiness = 40;
                                                                                                                                                                                                                                                                                                                          if (r > 0) happiness += getInteractionScore(2, up);
                                                                                                                                                                                                                                                                                                                                      if (c > 0) happiness += getInteractionScore(2, left);
                                                                                                                                                                                                                                                                                                                                                  maxHappiness = Math.max(maxHappiness, happiness + dfs(pos + 1, ic, ec - 1, nextMaskBase + 2));
                                                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                  memo.set(stateKey, maxHappiness);
                                                                                                                                                                                                                                                                                                                                                                          return maxHappiness;
                                                                                                                                                                                                                                                                                                                                                                              };
                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                  return dfs(0, introvertsCount, extrovertsCount, 0);
                                                                                                                                                                                                                                                                                                                                                                                  };