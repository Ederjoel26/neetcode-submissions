class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
      unordered_map<int, int> h;       
      for (int& i: nums) {
        h[i]++;
      }

      vector<vector<int>> b(nums.size() + 1);
      for (auto& [num, count]: h){
        b[count].push_back(num);
      }
      
      vector<int> res;
      for (int i = nums.size(); i >= 0 && res.size() < k; i--) {
        for (int num: b[i]) {
          res.push_back(num);
          if (res.size() == k) return res;
        }
      }

      return res;
    }
};
