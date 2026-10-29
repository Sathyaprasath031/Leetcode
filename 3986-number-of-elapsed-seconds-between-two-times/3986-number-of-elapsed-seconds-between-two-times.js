/**
 * @param {string} startTime
  * @param {string} endTime
   * @return {number}
    */
    var secondsBetweenTimes = function(startTime, endTime) {
        // Helper function to convert "HH:MM:SS" to total seconds
            const toSeconds = (time) => {
                    const [hours, minutes, seconds] = time.split(':').map(Number);
                            return (hours * 3600) + (minutes * 60) + seconds;
                                };
                                    
                                        // Return the difference in seconds
                                            return toSeconds(endTime) - toSeconds(startTime);
                                            }; 