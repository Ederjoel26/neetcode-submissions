class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> result;
        int n = nums.size();
        
        // 1. Ordenar es fundamental
        sort(nums.begin(), nums.end());

        for (int x = 0; x < n - 2; x++) {
            // Optimización: Si el número actual es mayor a 0, 
            // es imposible que sume 0 con los de su derecha (ya que están ordenados).
            if (nums[x] > 0) break;

            // Evitar duplicados para 'x'
            if (x > 0 && nums[x] == nums[x - 1]) continue;

            int i = x + 1; // Buscar siempre a la derecha de 'x'
            int j = n - 1;
            int target = -nums[x];

            while (i < j) {
                int sum = nums[i] + nums[j];

                if (sum == target) {
                    result.push_back({nums[x], nums[i], nums[j]});
                    
                    // Evitar duplicados para 'i' y 'j'
                    while (i < j && nums[i] == nums[i + 1]) i++;
                    while (i < j && nums[j] == nums[j - 1]) j--;
                    
                    // Mover ambos punteros tras encontrar una solución válida
                    i++;
                    j--;
                } 
                else if (sum < target) {
                    i++; // Necesitamos un número mayor
                } 
                else {
                    j--; // Necesitamos un número menor
                }
            }
        }
        
        return result;
    }
};



