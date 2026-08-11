class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
      set<vector<int>> result;
      sort(nums.begin(), nums.end());
      int i = 0, j = nums.size() -1;

      for (int x = 0; x < nums.size(); x++) {
        int num = nums[x];
        int target = 0 - num;
        i = 0, j = nums.size() -1;
        while (i < j) {
          if (x == i) {
            i++;
            break;
          }
          if (x == j) {
            j--;
            break;
          }
          int sum = nums[i] + nums[j];
          if (sum == target) {
            vector<int> aux = { num, nums[i], nums[j]};
            sort(aux.begin(), aux.end());
            result.insert(aux);
          }
          if (sum > target) j--;
          else i++;
        }
      }
        
      return vector<vector<int>>(result.begin(), result.end());
    }
};


