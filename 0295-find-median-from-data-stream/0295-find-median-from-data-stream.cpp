#include <queue>
#include <vector>

class MedianFinder {
private:
    std::priority_queue<int> small; // Max-heap: stores lower half
        std::priority_queue<int, std::vector<int>, std::greater<int>> large; // Min-heap: stores upper half

        public:
            MedianFinder() {}

                void addNum(int num) {
                        small.push(num);

                                // Ensure small's max <= large's min
                                        if (!small.empty() && !large.empty() && small.top() > large.top()) {
                                                    large.push(small.top());
                                                                small.pop();
                                                                        }

                                                                                // Maintain size constraint: size(small) >= size(large) and difference <= 1
                                                                                        if (small.size() > large.size() + 1) {
                                                                                                    large.push(small.top());
                                                                                                                small.pop();
                                                                                                                        } else if (large.size() > small.size()) {
                                                                                                                                    small.push(large.top());
                                                                                                                                                large.pop();
                                                                                                                                                        }
                                                                                                                                                            }

                                                                                                                                                                double findMedian() {
                                                                                                                                                                        if (small.size() > large.size()) {
                                                                                                                                                                                    return small.top();
                                                                                                                                                                                            }
                                                                                                                                                                                                    return (small.top() + large.top()) / 2.0;
                                                                                                                                                                                                        }
                                                                                                                                                                                                        };