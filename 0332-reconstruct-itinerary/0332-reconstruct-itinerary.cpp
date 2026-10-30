#include <vector>
#include <string>
#include <unordered_map>
#include <queue>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<string> findItinerary(vector<vector<string>>& tickets) {
            // Min-heap to automatically keep destinations in lexicographical order
                    unordered_map<string, priority_queue<string, vector<string>, greater<string>>> graph;
                            
                                    for (const auto& ticket : tickets) {
                                                graph[ticket[0]].push(ticket[1]);
                                                        }
                                                                
                                                                        vector<string> itinerary;
                                                                                dfs("JFK", graph, itinerary);
                                                                                        
                                                                                                // Reverse to get JFK -> ... -> destination order
                                                                                                        reverse(itinerary.begin(), itinerary.end());
                                                                                                                return itinerary;
                                                                                                                    }

                                                                                                                    private:
                                                                                                                        void dfs(const string& airport, 
                                                                                                                                     unordered_map<string, priority_queue<string, vector<string>, greater<string>>>& graph, 
                                                                                                                                                  vector<string>& itinerary) {
                                                                                                                                                          
                                                                                                                                                                  auto& destinations = graph[airport];
                                                                                                                                                                          while (!destinations.empty()) {
                                                                                                                                                                                      string nextAirport = destinations.top();
                                                                                                                                                                                                  destinations.pop();
                                                                                                                                                                                                              dfs(nextAirport, graph, itinerary);
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                              
                                                                                                                                                                                                                                      itinerary.push_back(airport);
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                          };