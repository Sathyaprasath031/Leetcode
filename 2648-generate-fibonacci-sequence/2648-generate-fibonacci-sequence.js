/**
 * @return {Generator<number>}
  */
  var fibGenerator = function*() {
      let a = 0;
          let b = 1;
              
                  while (true) {
                          // Yield the current Fibonacci number
                                  yield a;
                                          
                                                  // Calculate the next sequence numbers
                                                          let next = a + b;
                                                                  a = b;
                                                                          b = next;
                                                                              }
                                                                              };