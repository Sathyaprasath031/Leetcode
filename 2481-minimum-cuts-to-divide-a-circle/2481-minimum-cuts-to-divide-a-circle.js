/**
 * @param {number} n
  * @return {number}
   */
   var numberOfCuts = function(n) {
       // A circle is already 1 slice, so no cuts are needed.
           if (n === 1) {
                   return 0;
                       }
                           
                               // If n is even, we can cut along the diameter, which gives 2 slices per cut.
                                   // If n is odd, we must cut along the radius, which gives 1 slice per cut.
                                       return n % 2 === 0 ? n / 2 : n;
                                       }; 