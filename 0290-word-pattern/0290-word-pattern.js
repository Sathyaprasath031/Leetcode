var wordPattern = function(pattern, s) {
        const words = s.split(" ");
            if (pattern.length !== words.length) {
                    return false;
                        }

                            const charToWord = new Map();
                                const wordToChar = new Map();

                                    for (let i = 0; i < pattern.length; i++) {
                                            const c = pattern[i];
                                                    const w = words[i];

                                                            if (charToWord.has(c) && charToWord.get(c) !== w) {
                                                                        return false;
                                                                                }
                                                                                        if (wordToChar.has(w) && wordToChar.get(w) !== c) {
                                                                                                    return false;
                                                                                                            }

                                                                                                                    charToWord.set(c, w);
                                                                                                                            wordToChar.set(w, c);
                                                                                                                                }

                                                                                                                                    return true;
                                                                                                                                    };
