/**
 * @param {Function} fn
  * @param {number} t milliseconds
   * @return {Function}
    */
    var debounce = function(fn, t) {
        let timeoutId;
            
                return function(...args) {
                        // Clear the previous timer if it exists
                                clearTimeout(timeoutId);
                                        
                                                // Set a new timer to execute the function after 't' milliseconds
                                                        timeoutId = setTimeout(() => {
                                                                    fn(...args);
                                                                            }, t);
                                                                                }
                                                                                };
                                                                                
                                                                                
