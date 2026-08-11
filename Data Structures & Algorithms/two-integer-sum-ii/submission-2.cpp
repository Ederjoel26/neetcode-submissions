class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
      int i = 0;
      int j = numbers.size() - 1;
      while (true) {
        if (numbers[i] + numbers[j] == target && i != j) return { i+=1, j+1 };
        if (numbers[i] + numbers[j] > target) j--;
        if (numbers[i] + numbers[j] < target) i++;
      }
    }
};
