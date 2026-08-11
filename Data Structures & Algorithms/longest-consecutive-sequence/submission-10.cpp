class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
      unordered_set<int> s(nums.begin(), nums.end());
      vector<int> possibleStart;
      int count = 0, aux = 0;

      for (int i = 0; i < nums.size(); i++) {
        if (!s.contains(nums[i] - 1)) {
          possibleStart.push_back(nums[i]);
        }
      }

      for (int i = 0; i < possibleStart.size(); i++) {
        int times = nums.size();
        aux = 0;
        while (times--) {
          if (s.contains(possibleStart[i]++)) aux++;
          else break;
        }
        if (count < aux) count = aux;
      }

      return count;
    }
};
