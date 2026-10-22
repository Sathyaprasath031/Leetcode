class Solution {
        public boolean isValidSudoku(char[][] board) {
                // Use bitmasks to track seen digits (1-9) for rows, columns, and 3x3 boxes
                        int[] rows = new int[9];
                                int[] cols = new int[9];
                                        int[] boxes = new int[9];

                                                for (int r = 0; r < 9; r++) {
                                                            for (int c = 0; c < 9; c++) {
                                                                            char ch = board[r][c];
                                                                                            if (ch == '.') {
                                                                                                                continue;
                                                                                                                                }

                                                                                                                                                int val = ch - '1'; // map '1'-'9' to 0-8
                                                                                                                                                                int mask = 1 << val;
                                                                                                                                                                                int boxIndex = (r / 3) * 3 + (c / 3);

                                                                                                                                                                                                // Check if digit was already seen in current row, column, or box
                                                                                                                                                                                                                if ((rows[r] & mask) != 0 || (cols[c] & mask) != 0 || (boxes[boxIndex] & mask) != 0) {
                                                                                                                                                                                                                                    return false;
                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                    // Mark digit as seen
                                                                                                                                                                                                                                                                                    rows[r] |= mask;
                                                                                                                                                                                                                                                                                                    cols[c] |= mask;
                                                                                                                                                                                                                                                                                                                    boxes[boxIndex] |= mask;
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                return true;
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                    }
