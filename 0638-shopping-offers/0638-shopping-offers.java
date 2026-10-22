import java.util.*;

class Solution {
    private Map<List<Integer>, Integer> memo = new HashMap<>();

        public int shoppingOffers(List<Integer> price, List<List<Integer>> special, List<Integer> needs) {
                return dfs(price, special, needs);
                    }

                        private int dfs(List<Integer> price, List<List<Integer>> special, List<Integer> needs) {
                                if (memo.containsKey(needs)) {
                                            return memo.get(needs);
                                                    }

                                                            // Base cost: buying each item individually at regular price
                                                                    int minCost = 0;
                                                                            int n = needs.size();
                                                                                    for (int i = 0; i < n; i++) {
                                                                                                minCost += needs.get(i) * price.get(i);
                                                                                                        }

                                                                                                                // Try applying each valid special offer
                                                                                                                        for (List<Integer> offer : special) {
                                                                                                                                    List<Integer> updatedNeeds = new ArrayList<>();
                                                                                                                                                boolean isValid = true;

                                                                                                                                                            for (int i = 0; i < n; i++) {
                                                                                                                                                                            int remaining = needs.get(i) - offer.get(i);
                                                                                                                                                                                            if (remaining < 0) {
                                                                                                                                                                                                                isValid = false;
                                                                                                                                                                                                                                    break;
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                    updatedNeeds.add(remaining);
                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                            // If the offer does not exceed any item requirement, recurse
                                                                                                                                                                                                                                                                                                        if (isValid) {
                                                                                                                                                                                                                                                                                                                        int offerPrice = offer.get(n);
                                                                                                                                                                                                                                                                                                                                        minCost = Math.min(minCost, offerPrice + dfs(price, special, updatedNeeds));
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                    memo.put(needs, minCost);
                                                                                                                                                                                                                                                                                                                                                                            return minCost;
                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                }