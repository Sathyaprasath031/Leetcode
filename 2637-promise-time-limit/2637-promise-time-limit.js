/**
 * @param {Function} fn
  * @param {number} t
   * @return {Function}
    */
    var timeLimit = function(fn, t) {
        return async function(...args) {
                // Create a promise that rejects after 't' milliseconds
                        const timeoutPromise = new Promise((_, reject) => {
                                    setTimeout(() => {
                                                    reject("Time Limit Exceeded");
                                                                }, t);
                                                                        });
                                                                        
                                                                                // Execute the original function
                                                                                        const executionPromise = fn(...args);
                                                                                        
                                                                                                // Return the result of whichever promise finishes first
                                                                                                        return Promise.race([executionPromise, timeoutPromise]);
                                                                                                            }
                                                                                                            };
                                                                                                            
                                                                                                            /**
                                                                                                             * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
                                                                                                              * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
                                                                                                               */ 