class Solution {
public:
  vector<vector<int>> threeSum(vector<int>& nums) {
    vector<vector<int>> result;
    int n = nums.size();
    sort(nums.begin(), nums.end());

    for (int x = 0; x < n - 2; x++) {
      if (nums[x] > 0) break;

      if (x > 0 && nums[x] == nums[x - 1]) continue;

      int i = x + 1; 
      int j = n - 1;
      int target = -nums[x];

      while (i < j) {
        int sum = nums[i] + nums[j];

        if (sum == target) {
          result.push_back({nums[x], nums[i], nums[j]});
              
            while (i < j && nums[i] == nums[i + 1]) i++;
            while (i < j && nums[j] == nums[j - 1]) j--;
            
            i++;
            j--;
        } 
        else if (sum < target) {
            i++;
        } 
        else {
            j--;                 
        }
      }
    }
      
    return result;
  }
};





