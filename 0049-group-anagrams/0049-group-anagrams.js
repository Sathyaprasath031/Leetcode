/**
 * @param {string[]} strs
  * @return {string[][]}
   */
   var groupAnagrams = function(strs) {
       const map = new Map();
       
           for (const str of strs) {
                   // Sort the characters of each string to use as a hash map key
                           const sortedKey = str.split('').sort().join('');
                                   
                                           if (!map.has(sortedKey)) {
                                                       map.set(sortedKey, []);
                                                               }
                                                                       map.get(sortedKey).push(str);
                                                                           }
                                                                           
                                                                               return Array.from(map.values());
                                                                               }; 