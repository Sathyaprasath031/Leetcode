/**
 * @param {number[][]} students
  * @param {number[][]} mentors
   * @return {number}
    */
    var maxCompatibilitySum = function(students, mentors) {
        const m = students.length;
            const n = students[0].length;
                let maxScore = 0;
                
                    // Helper function to calculate compatibility score between a student and a mentor
                        const getScore = (student, mentor) => {
                                let score = 0;
                                        for (let i = 0; i < n; i++) {
                                                    if (student[i] === mentor[i]) {
                                                                    score++;
                                                                                }
                                                                                        }
                                                                                                return score;
                                                                                                    };
                                                                                                    
                                                                                                        // Precompute the scores for all student-mentor pairs
                                                                                                            const scoreMatrix = Array.from({ length: m }, () => new Array(m).fill(0));
                                                                                                                for (let i = 0; i < m; i++) {
                                                                                                                        for (let j = 0; j < m; j++) {
                                                                                                                                    scoreMatrix[i][j] = getScore(students[i], mentors[j]);
                                                                                                                                            }
                                                                                                                                                }
                                                                                                                                                
                                                                                                                                                    // Backtracking with bitmask to keep track of assigned mentors
                                                                                                                                                        const dfs = (studentIndex, currentScore, mentorMask) => {
                                                                                                                                                                if (studentIndex === m) {
                                                                                                                                                                            maxScore = Math.max(maxScore, currentScore);
                                                                                                                                                                                        return;
                                                                                                                                                                                                }
                                                                                                                                                                                                
                                                                                                                                                                                                        for (let mentorIndex = 0; mentorIndex < m; mentorIndex++) {
                                                                                                                                                                                                                    // Check if the mentor is already assigned using the bitmask
                                                                                                                                                                                                                                if ((mentorMask & (1 << mentorIndex)) === 0) {
                                                                                                                                                                                                                                                dfs(
                                                                                                                                                                                                                                                                    studentIndex + 1, 
                                                                                                                                                                                                                                                                                        currentScore + scoreMatrix[studentIndex][mentorIndex], 
                                                                                                                                                                                                                                                                                                            mentorMask | (1 << mentorIndex)
                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                    };
                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                        dfs(0, 0, 0);
                                                                                                                                                                                                                                                                                                                                                            return maxScore;
                                                                                                                                                                                                                                                                                                                                                            }; 