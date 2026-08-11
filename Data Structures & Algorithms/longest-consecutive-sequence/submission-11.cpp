class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
      unordered_set<int> s(nums.begin(), nums.end());
      int longest = 0;

      for (int num : s) {
        if (!s.contains(num - 1)) {
          int length = 0;
          while (s.contains(num++)) {
            length++;
          }
          longest = max(longest, length);
        }
      }

      return longest;
    }
};
