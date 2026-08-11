class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        for (int i = 0; i < nums.size(); i++){
            int counter = 0;
            for (int x = 0; x < nums.size(); x++){
                if (nums[i] == nums[x]) {
                    counter++;
                }
            }
            if (counter >= 2) return true;
        }

        return false;
    }
};
